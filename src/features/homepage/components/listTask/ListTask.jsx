import React, { useState, useEffect, useRef } from 'react'
import { FaTrashAlt, FaPlus } from "react-icons/fa"
import { Container, Content, Header, CreateTask, ListCard } from "./style"
import { useDrag, useDrop } from "react-dnd"
import { useDispatch } from "react-redux"
import { deleteList, updateOrderList, createCard, updateListTitle } from "../../../../services/slices/boardSlice"
import CardItem from '../cardItem/CardItem'
function ListTask({ list, index, moveCard, cloneList }) {
    const [editListTitle, setEditListTitle] = useState(false)
    const [createTask, setCreateTask] = useState(false)
    const [cardTitle, setCardTitle] = useState("")
    const [chooseCard, setChooseCard] = useState("")
    const [listTitle,setListTitle]=useState(list?.title)
    const ref = useRef(null)
    const dispatch = useDispatch()
    const [{ isDragging }, drag] = useDrag(() => ({
        type: "card",
        item: { index, list },
        collect: monitor => ({
            isDragging: !!monitor.isDragging(),
        }),
    }))
    const [{ handlerId }, drop] = useDrop({
        accept: "card",
        collect(monitor) {
            return {
                handlerId: monitor.getHandlerId(),
            };
        },
        drop(item, monitor) {
            // console.log("cloneList",cloneList)
            dispatch(updateOrderList(cloneList))
        },
        hover(item, monitor) {
            if (!ref.current) {
                return;
            }
            const dragIndex = item.index;
            const hoverIndex = index;
            // Don't replace items with themselves
            if (dragIndex === hoverIndex) {
                return;
            }
            //====== Determine rectangle on screen
            const hoverBoundingRect = ref.current?.getBoundingClientRect();
            //====== Get vertical middle
            // const hoverMiddleY = (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2;
            const hoverMiddleX = (hoverBoundingRect.right - hoverBoundingRect.left) / 2;
            //====== Determine mouse position
            const clientOffset = monitor.getClientOffset();
            //====== Get pixels to the top
            // const hoverClientY = clientOffset.y - hoverBoundingRect.top;
            const hoverClientX = clientOffset.x - hoverBoundingRect.left;
            // Only perform the move when the mouse has crossed half of the items height
            // When dragging downwards, only move when the cursor is below 50%
            // When dragging upwards, only move when the cursor is above 50%
            //==== Dragging downwards
            // if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) {
            //     return;
            // }
            if (dragIndex < hoverIndex && hoverClientX < hoverMiddleX) {
                return;
            }
            //===== Dragging upwards
            // if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) {
            //     return;
            // }
            if (dragIndex > hoverIndex && hoverClientX > hoverMiddleX) {
                return;
            }
            // Time to actually perform the action
            moveCard(dragIndex, hoverIndex);
            // Note: we're mutating the monitor item here!
            // Generally it's better to avoid mutations,
            // but it's good here for the sake of performance
            // to avoid expensive index searches.
            item.index = hoverIndex;
        },
    });
    drag(drop(ref))
    function handleDeleteList() {
        dispatch(deleteList(list))
    }
    function handleCreateCard(e) {
        e.preventDefault()
        console.log(cardTitle)
        setCreateTask(false)
        setCardTitle("")
        dispatch(createCard({ title: cardTitle, listId: list._id, boardId: list.boardId }))
    }
    function handleEditListTitle(e)
    {
        e.preventDefault()
        dispatch(updateListTitle({title:listTitle,id:list?._id}))
        setEditListTitle(false)
    }
    return (
        <Container ref={ref} style={{ opacity: isDragging && "0" }} data-handler-id={handlerId}>
            <Content>
                <Header>
                    {
                        editListTitle
                            ? <div name="edit-list-title" className="edit-list-title">
                                <form action="" onSubmit={(e)=>handleEditListTitle(e)}>
                                    <input type="text" onChange={(e)=>setListTitle(e.target.value)} value={listTitle} />
                                </form>
                                <button className="cancel-edit-list" onClick={() => setEditListTitle(false)}>Cancel</button>
                            </div>
                            : <div className="wp-list-title" name="wp-list-title">
                                <span className="list-title" onClick={() => setEditListTitle(true)}>{list?.title}</span>
                                <FaTrashAlt onClick={() => handleDeleteList()}></FaTrashAlt>
                            </div>
                    }

                </Header>
                <ListCard>
                    {
                        list?.cards?.map(item => {
                            return <CardItem card={item} chooseCard={chooseCard} setChooseCard={setChooseCard}></CardItem>
                        })
                    }
                </ListCard>
            </Content>
            {createTask && <CreateTask>
                <form action="" onSubmit={(e) => handleCreateCard(e)}>
                    <input type="text" onChange={(e) => setCardTitle(e.target.value)} />
                </form>
                <button className="cancle-create-task" onClick={() => setCreateTask(false)}>Cancel</button>
            </CreateTask>
            }
            {
                !createTask && <button className="new-task" onClick={() => setCreateTask(true)}>
                    <FaPlus></FaPlus>
                </button>

            }
        </Container>
    )
}

export default ListTask
