import {takeEvery,call,put} from "redux-saga/effects"
import boardApi from "../../api/boardApi"
import { updateBoardTitleInManage } from "../slices/boardSlice"
import {addNewBoardSuccess, deleteBoardSuccess, getListBoardSuccess, updateBoardTitleSuccess} from "../slices/listBoardSlice"
function* addNewBoard(action)
{
    console.log("action",action)
    console.log("add new board")
    let res=yield call(boardApi.createBoard,action.payload)
    let board=res.data.board
    board.lists=[]
    yield put(addNewBoardSuccess(board))
}
function* getListBoardsWorker()
{
    let res=yield call(boardApi.getBoards)
    yield put(getListBoardSuccess(res.data.boards))
}
function* deleteBoardWorker(action)
{
    console.log("deleteboard",action.payload)
    yield call(boardApi.deleteBoard,action.payload._id)
    yield put(deleteBoardSuccess(action.payload._id))
}
function* updateBoardTitleWorker(action)
{
    console.log("updateboardtitle",action.payload)
    let {id,title}=action.payload
    let res=yield call(boardApi.updateTitle,id,title)
    console.log("response",res.data.board)
    yield put(updateBoardTitleSuccess(res.data.board))
    // yield put(updateBoardTitleInManage(res.data.board))

}
function* listBoardSaga()
{
    console.log("listboardsaga")
    yield takeEvery("listBoard/addNewBoard",addNewBoard)
    yield takeEvery("listBoard/getListBoard",getListBoardsWorker)
    yield takeEvery("listBoard/deleteBoard",deleteBoardWorker)
    yield takeEvery("listBoard/updateBoardTitle",updateBoardTitleWorker)
}
export default listBoardSaga