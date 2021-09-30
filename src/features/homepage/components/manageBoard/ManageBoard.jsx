import React, { useState } from 'react'
import ListTask from '../listTask/ListTask'
import { Container, Content, CreateList,ManageArea } from "./style"
import {useParams} from "react-router-dom"
import {useSelector} from "react-redux"
function ManageBoard() {
    const [toggleCreateList, setToggleCreateList] = useState(false)
    const {id}=useParams()
    const board=useSelector(state=>state.board)
    console.log(id)
    return (
        <Container>
            <Content>
                <h2>{board?.title}</h2>
                <ManageArea>
                    <ListTask></ListTask>
                    <CreateList>
                        {
                            !toggleCreateList
                                ? <span onClick={() => setToggleCreateList(true)}>Add a new list...</span>
                                : <div className="input-list-title">
                                    <form action="">
                                        <input type="text" />
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
