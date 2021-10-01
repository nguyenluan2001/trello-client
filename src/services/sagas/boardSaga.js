import { takeEvery,call,put } from "@redux-saga/core/effects";
import listApi from "../../api/listApi";
import { createListSuccess, deleteListSuccess, updateListTitleSuccess } from "../slices/boardSlice";
function* createListWorker(action)
{
    let {title,boardId}=action.payload
    let res=yield call(listApi.createList,title,boardId)
    yield put(createListSuccess(res.data.list))
    console.log(res)
}
function* deleteListWorker(action)
{
    // console.log("deletelist",action.payload)
    yield call(listApi.deleteList,action.payload._id)
    yield put(deleteListSuccess(action.payload))
}
function* updateOrderListWorker(action)
{
    // console.log("updateorderlist",action.payload)
    let res=yield call(listApi.updateOrderList,action.payload)
    console.log("updateorder ok",res.data)
}
function* updateListTitleWorker(action)
{
    console.log("updatelisttitle",action.payload)
    let {id,title}=action.payload
    let res=yield call(listApi.updateListTitle,id,title)
    yield put(updateListTitleSuccess(res.data.list))
}
function* boardSaga()
{
    console.log("board saga")
    yield takeEvery("board/createList",createListWorker)
    yield takeEvery("board/deleteList",deleteListWorker)
    yield takeEvery("board/updateOrderList",updateOrderListWorker)
    yield takeEvery("board/updateListTitle",updateListTitleWorker)
}
export default boardSaga