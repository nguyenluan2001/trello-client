import {takeEvery,call,put} from "redux-saga/effects"
import boardApi from "../../api/boardApi"
import {addNewBoardSuccess, getListBoardSuccess} from "../slices/listBoardSlice"
function* addNewBoard(action)
{
    console.log("action",action)
    console.log("add new board")
    let res=yield call(boardApi.createBoard,action.payload)
    yield put(addNewBoardSuccess(res.data.board))
}
function* getListBoardsWorker()
{
    let res=yield call(boardApi.getBoards)
    yield put(getListBoardSuccess(res.data.boards))
}
function* listBoardSaga()
{
    console.log("listboardsaga")
    yield takeEvery("listBoard/addNewBoard",addNewBoard)
    yield takeEvery("listBoard/getListBoard",getListBoardsWorker)
}
export default listBoardSaga