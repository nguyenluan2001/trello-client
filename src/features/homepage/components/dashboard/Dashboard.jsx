import React,{useEffect} from 'react'
import BoardItem from '../boardItem/BoardItem'
import CreateBoard from '../createBoard/CreateBoard'
import { Container, Content,ListBoards } from "./style"
import {useDispatch,useSelector} from "react-redux"
import {getListBoard} from "../../../../services/slices/listBoardSlice"
function Dashboard() {
    const dispatch=useDispatch()
    const listBoard=useSelector(state=>state.listBoard)
    console.log(listBoard)
    useEffect(()=>{
        dispatch(getListBoard())
    },[])
    return (
        <Container>
            <Content>
                <h2>Boards</h2>
                <ListBoards>
                    {
                        listBoard?.map(item=>{
                            return <BoardItem board={item}></BoardItem>
                        })
                    }
                    {/* <BoardItem type="existed" boardName="123"></BoardItem> */}
                    <CreateBoard></CreateBoard>
                </ListBoards>

            </Content>

        </Container>
    )
}

export default Dashboard
