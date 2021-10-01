import React, { useState ,useEffect,useRef} from 'react'
import { Container, Content, Setting } from "./style"
import { FaTrashAlt, FaRegClock, FaTimes } from "react-icons/fa"
import {useDispatch} from "react-redux"
import {deleteCard, updateCardTitle} from "../../../../services/slices/boardSlice"
function CardItem({ card,chooseCard,setChooseCard }) {
    const [toggleSetting, setToggleSetting] = useState(false)
    const [cardTitle,setCardTitle]=useState(card?.title)
    const formRef=useRef()
    const dispatch=useDispatch()
    useEffect(()=>{
        if(chooseCard!=card._id)
        {
            setToggleSetting(false)
        }
    },[chooseCard])
    useEffect(()=>{
        if(toggleSetting)
        {
            formRef.current.focus()
        }
    },[toggleSetting])
    function handleOpenSetting()
    {
        setToggleSetting(true)
        setChooseCard(card._id)
    }
    function handleDeleteCard()
    {
        dispatch(deleteCard(card))
        setToggleSetting(false)
    }
    function handleEditCardTitle(e)
    {
        e.preventDefault()
        dispatch(updateCardTitle({id:card?._id,title:cardTitle}))
        setToggleSetting(false)
    }
    return (
        <Container>
            <Content >
                {!toggleSetting&&<span onClick={() => handleOpenSetting()}>{card?.title}</span>}
               {toggleSetting&& <form action="" onSubmit={(e)=>handleEditCardTitle(e)}>
                    <input ref={formRef} type="text" value={cardTitle} onChange={(e)=>setCardTitle(e.target.value)}/>
                </form>}
                {toggleSetting && <Setting>
                    <li onClick={()=>handleDeleteCard()}>
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
                    <li onClick={()=>setToggleSetting(false)}>
                        <FaTimes></FaTimes>
                    </li>
                </Setting>}
            </Content>
        </Container>
    )
}

export default CardItem
