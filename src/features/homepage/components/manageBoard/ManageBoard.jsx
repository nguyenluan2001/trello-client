import React, { useState,useCallback,useEffect } from 'react'
import ListTask from '../listTask/ListTask'
import { Container, Content, CreateList, ManageArea } from "./style"
import { useParams } from "react-router-dom"
import { useSelector, useDispatch } from "react-redux"
import { createList } from "../../../../services/slices/boardSlice"
import { useDrop } from 'react-dnd'
import update from 'immutability-helper';

function ManageBoard() {
    const [toggleCreateList, setToggleCreateList] = useState(false)
    const { id } = useParams()
    const board = useSelector(state => state.board)
    const [cloneList,setCloneList]=useState([...board.lists])
    const dispatch = useDispatch()
    const [listTitle, setListTitle] = useState("")
    const [{ isOver }, drop] = useDrop(() => ({
        accept: "card",
        drop: (item) => { },
        collect: monitor => ({
            isOver: !!monitor.isOver(),
        })
    }), [1, 2])
    const moveCard = useCallback((dragIndex, hoverIndex) => {
        const dragList = cloneList[dragIndex];
        setCloneList(update(cloneList, {
            $splice: [
                [dragIndex, 1],
                [hoverIndex, 0, dragList],
            ],
        }));
       
        console.log("dragindex",dragIndex)
        console.log("hoverindex",hoverIndex)
    }, [cloneList]);
    useEffect(()=>{
        setCloneList([...board.lists])
    },[board.lists])
    function handleSubmit(e) {
        e.preventDefault()
        console.log(listTitle)
        dispatch(createList({
            title: listTitle,
            boardId: board?._id
        }))
        setListTitle("")
        setToggleCreateList(false)
    }
    return (
        <Container ref={drop}>
            <Content>
                <h2>{board?.title}</h2>
                <ManageArea>
                    {
                        cloneList?.map((item, index) => {
                            return <ListTask cloneList={cloneList} key={item._id} list={item} index={index} moveCard={moveCard}></ListTask>
                        })
                    }
                    <CreateList>
                        {
                            !toggleCreateList
                                ? <span onClick={() => setToggleCreateList(true)}>Add a new list...</span>
                                : <div className="input-list-title">
                                    <form action="" onSubmit={(e) => handleSubmit(e)}>
                                        <input type="text" onChange={(e) => setListTitle(e.target.value)} />
                                    </form>
                                    <button onClick={() => setToggleCreateList(false)}>Cancel</button>
                                </div>
                        }
                    </CreateList>
                </ManageArea>
            </Content>

        </Container>
    )
}

export default ManageBoard
