import React, { useState, useEffect } from 'react'
import { FaTrashAlt, FaPlus } from "react-icons/fa"
import { Container, Content, Header,CreateTask } from "./style"
function ListTask() {
    const [editListTitle, setEditListTitle] = useState(false)
    const [createTask, setCreateTask] = useState(false)
    useEffect(() => {
        // window.addEventListener("click",(e)=>{
        //     // alert(1)
        //     // setEditListTitle(false)
        //     console.log(e.target.name)
        //     if(e.target.name!="edit-list-title")
        //     {
        //         setEditListTitle(false)
        //     }
        // })
    })
    return (
        <Container>
            <Content>
                <Header>
                    {
                        editListTitle
                            ? <div name="edit-list-title" className="edit-list-title">
                                <input type="text" />
                                <button className="cancel-edit-list" onClick={() => setEditListTitle(false)}>Cancel</button>
                            </div>
                            : <div className="wp-list-title" name="wp-list-title">
                                <span className="list-title" onClick={() => setEditListTitle(true)}>123</span>
                                <FaTrashAlt></FaTrashAlt>
                            </div>
                    }

                </Header>
            </Content>
            {createTask && <CreateTask>
                <form action="">
                    <input type="text" />
                </form>
                <button className="cancle-create-task" onClick={() => setCreateTask(false)}>Cancel</button>
            </CreateTask>
            }
            {
                !createTask&&<button className="new-task" onClick={() => setCreateTask(true)}>
                <FaPlus></FaPlus>
            </button>

            }
        </Container>
    )
}

export default ListTask
