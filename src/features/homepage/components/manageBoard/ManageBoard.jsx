import React, { useState, useCallback, useEffect, useRef } from 'react'
import ListTask from '../listTask/ListTask'
import {
    Container, Content,
    CreateList, ManageArea,
    TopContent, BoardSetting, WrapTopContent,
    ConfirmDelete, Title, EditTitle
} from "./style"
import { useParams, useHistory } from "react-router-dom"
import { useSelector, useDispatch } from "react-redux"
import { createList } from "../../../../services/slices/boardSlice"
import { deleteBoard,updateBoardTitle } from '../../../../services/slices/listBoardSlice'
import { useDrop } from 'react-dnd'
import update from 'immutability-helper';
import { FaTrashAlt } from "react-icons/fa"
function ManageBoard() {
    const [toggleCreateList, setToggleCreateList] = useState(false)
    const [toggleConfirmDeleteBoard, setToggleConfirmDeleteBoard] = useState(false)
    const [toggleEditBoardTitle, setToggleEditBoardTitle] = useState(false)
    const { id } = useParams()
    const history = useHistory()
    const board = useSelector(state => state.board)
    const listBoard=useSelector(state=>state.listBoard)
    const [boardTitle,setBoardTitle]=useState(board?.title)
    const [cloneList, setCloneList] = useState([...board?.lists])
    const dispatch = useDispatch()
    const [listTitle, setListTitle] = useState("")
    const topContentRef = useRef()
    const [topContentHeight, setTopContentHeight] = useState(0)
    const [{ isOver }, drop] = useDrop(() => ({
        accept: "card",
        drop: (item) => { },
        collect: monitor => ({
            isOver: !!monitor.isOver(),
        })
    }), [1, 2])
    const moveList = useCallback((dragIndex, hoverIndex) => {
        const dragList = cloneList[dragIndex];
        setCloneList(update(cloneList, {
            $splice: [
                [dragIndex, 1],
                [hoverIndex, 0, dragList],
            ],
        }));

        console.log("dragindex", dragIndex)
        console.log("hoverindex", hoverIndex)
    }, [cloneList]);
    useEffect(() => {
        setCloneList([...board.lists])
    }, [board.lists])
    useEffect(() => {
        setTopContentHeight(topContentRef.current.clientHeight)
    }, [])
    useEffect(()=>{
        setBoardTitle(board?.title)
    },[board.title])
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
    async function handleDeleteBoard() {
        await dispatch(deleteBoard(board))
        history.push("/")
    }
    function handleEditBoardTitle(e)
    {
        e.preventDefault()
        console.log(boardTitle)
        dispatch(updateBoardTitle({id:board?._id,title:boardTitle}))
        setToggleEditBoardTitle(false)
    }
    return (
        <Container ref={drop}>
            <Content>
                <WrapTopContent topContentHeight={topContentHeight}>
                    <TopContent ref={topContentRef}>
                        <Title>
                            {!toggleEditBoardTitle && <p className="title" onClick={() => setToggleEditBoardTitle(true)}>{boardTitle}</p>}
                            {toggleEditBoardTitle && <EditTitle>
                                <form action="" onSubmit={(e)=>handleEditBoardTitle(e)}>
                                    <input type="text" value={boardTitle} onChange={(e)=>setBoardTitle(e.target.value)} />
                                </form>
                                <button className="cancel-edit" onClick={() => setToggleEditBoardTitle(false)}>Cancel</button>
                            </EditTitle>}
                        </Title>
                        <BoardSetting>
                            <li>
                                <span>Color</span>
                            </li>
                            <li>
                                <div onClick={() => setToggleConfirmDeleteBoard(true)}>
                                    <FaTrashAlt></FaTrashAlt>
                                    <span >Delete board</span>
                                </div>
                                {toggleConfirmDeleteBoard && <ConfirmDelete>
                                    <span>Are you sure?</span>
                                    <div className="delete-btn" onClick={() => handleDeleteBoard()}>Delete</div>
                                    <div className="cancel-btn" onClick={() => setToggleConfirmDeleteBoard(false)}>Cancel</div>
                                </ConfirmDelete>}
                            </li>
                        </BoardSetting>
                    </TopContent>
                </WrapTopContent>
                <ManageArea>
                    {
                        cloneList?.map((item, index) => {
                            return <ListTask cloneList={cloneList} key={item._id} list={item} index={index} moveList={moveList}></ListTask>
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
