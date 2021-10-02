import React, { useState, useEffect, useRef } from 'react'
import { Container, Content, Setting } from "./style"
import { FaTrashAlt, FaRegClock, FaTimes } from "react-icons/fa"
import { useDispatch } from "react-redux"
import { deleteCard, updateCardTitle } from "../../../../services/slices/boardSlice"
import { useDrag, useDrop } from "react-dnd"
import {updateOrderCard} from "../../../../services/slices/boardSlice"
function CardItem({cloneCard, index, card, chooseCard, setChooseCard, moveCard }) {
    const [toggleSetting, setToggleSetting] = useState(false)
    const [cardTitle, setCardTitle] = useState(card?.title)
    const formRef = useRef()
    const cardRef = useRef()
    const dispatch = useDispatch()
    const [{ isDragging }, drag] = useDrag(() => ({
        type: "card",
        item: {index,card},
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
            console.log("clonecard",cloneCard)
            // dispatch(updateOrderList(cloneList))
            console.log("card drop")
            // console.log("list id",card.listId)
            dispatch(updateOrderCard(cloneCard))
        },
        hover(item, monitor) {
            if (!cardRef.current) {
                return;
            }
            const dragIndex = item.index;
            const hoverIndex = index;
            // console.log("dragindex",dragIndex)
            // console.log("hoverindex",hoverIndex)
            // // Don't replace items with themselves
            if (dragIndex === hoverIndex) {
                return;
            }
            // //====== Determine rectangle on screen
            const hoverBoundingRect = cardRef.current?.getBoundingClientRect();
            // //====== Get vertical middle
            const hoverMiddleY = (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2;
            // const hoverMiddleX = (hoverBoundingRect.right - hoverBoundingRect.left) / 2;
            // //====== Determine mouse position
            const clientOffset = monitor.getClientOffset();
            // //====== Get pixels to the top
            const hoverClientY = clientOffset.y - hoverBoundingRect.top;
            // const hoverClientX = clientOffset.x - hoverBoundingRect.left;
            // // Only perform the move when the mouse has crossed half of the items height
            // // When dragging downwards, only move when the cursor is below 50%
            // // When dragging upwards, only move when the cursor is above 50%
            // //==== Dragging downwards
            if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) {
                return;
            }
            // if (dragIndex < hoverIndex && hoverClientX < hoverMiddleX) {
            //     return;
            // }
            // //===== Dragging upwards
            if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) {
                return;
            }
            // if (dragIndex > hoverIndex && hoverClientX > hoverMiddleX) {
            //     return;
            // }
            // // Time to actually perform the action
            moveCard(dragIndex, hoverIndex);
            // // Note: we're mutating the monitor item here!
            // // Generally it's better to avoid mutations,
            // // but it's good here for the sake of performance
            // // to avoid expensive index searches.
            item.index = hoverIndex;
        },
    });
    useEffect(() => {
        if (chooseCard != card?._id) {
            setToggleSetting(false)
        }
    }, [chooseCard])
    useEffect(() => {
        if (toggleSetting) {
            formRef.current.focus()
        }
    }, [toggleSetting])
    function handleOpenSetting() {
        setToggleSetting(true)
        setChooseCard(card._id)
    }
    function handleDeleteCard() {
        dispatch(deleteCard(card))
        setToggleSetting(false)
    }
    function handleEditCardTitle(e) {
        e.preventDefault()
        dispatch(updateCardTitle({ id: card?._id, title: cardTitle }))
        setToggleSetting(false)
    }
    drag(drop(cardRef))
    return (
        <Container  >
            <Content ref={cardRef} data-handler-id={handlerId} style={{opacity:isDragging&&"0"}} >
                {!toggleSetting && <span onClick={() => handleOpenSetting()}>{card?.title}</span>}
                {toggleSetting && <form action="" onSubmit={(e) => handleEditCardTitle(e)}>
                    <input ref={formRef} type="text" value={cardTitle} onChange={(e) => setCardTitle(e.target.value)} />
                </form>}
                {toggleSetting && <Setting>
                    <li onClick={() => handleDeleteCard()}>
                        <FaTrashAlt></FaTrashAlt>
                        <span>Delete</span>
                    </li>
                    <li>
                        <img src="https://www.swimmeet.com/images/icons/color-wheel.png" alt="" />
                        <span>Color</span>
                    </li>
                    <li>
                        <FaRegClock></FaRegClock>
                        <span>Due</span>
                    </li>
                    <li onClick={() => setToggleSetting(false)}>
                        <FaTimes></FaTimes>
                    </li>
                </Setting>}
            </Content>
        </Container>
    )
}

export default CardItem
