import React from 'react'
import { Container } from "./style"
import {useHistory} from "react-router-dom"
import {useDispatch} from "react-redux"
import {getBoard} from "../../../../services/slices/boardSlice"
function BoardItem({ board }) {
    const dispatch=useDispatch()
    const history=useHistory()
    function handleOpenBoard()
    {
        dispatch(getBoard(board))
        history.push(`/${board._id}`)
    }
    return (
        <Container onClick={()=>handleOpenBoard()}>
            <span className="titile">{board?.title}</span>
        </Container>
    )
}

export default BoardItem
