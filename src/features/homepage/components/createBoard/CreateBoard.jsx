import React, { useState } from 'react'
import { Container } from "./style"
import {useDispatch} from "react-redux"
import {addNewBoard} from "../../../../services/slices/listBoardSlice"
function CreateBoard() {
    const [toggleForm, setToggleForm] = useState(false)
    const [boardTitle,setBoardTitle]=useState("")
    const dispatch=useDispatch()
    function handleSubmit(e)
    {
        e.preventDefault()
        console.log(boardTitle)
        dispatch(addNewBoard(boardTitle))
    }
    function handleToggleForm(e)
    {
        if(e.target.name=="cancel")
        {
            setToggleForm(false)
        }
        else
        {
            setToggleForm(true)
        }
    }
    console.log(toggleForm)
    return (
        <Container onClick={(e) =>handleToggleForm(e)}>
            {
                toggleForm
                    ? <form onSubmit={(e)=>handleSubmit(e)}>
                        <input type="text" onChange={(e)=>setBoardTitle(e.target.value)} />
                        <div className="buttons">
                            <button className="create">Create</button>
                            <button name="cancel" className="cancel" onClick={(e)=>handleToggleForm(e)}>Cancel</button>
                        </div>
                    </form>
                    : <span>Add a new board</span>
            }

        </Container>
    )
}

export default CreateBoard
