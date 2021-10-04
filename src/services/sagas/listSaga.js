import { call, put, takeEvery } from "@redux-saga/core/effects"
import cardApi from "../../api/cardApi"
import { createCardSuccess, deleteCardSuccess, updateCardTitleSuccess, updateDueDateCardSuccess, updateOrderCardSuccess } from "../slices/boardSlice"
function* createCardWorker(action)
{
    let {title,listId,boardId}=action.payload
    let res=yield call(cardApi.createCard,title,listId,boardId)
    yield put(createCardSuccess(res.data.card))
}
function* deleteCardWorker(action)
{
    console.log("deleteCardWoker",action.payload)
    yield call(cardApi.deleteCard,action.payload._id)
    yield put(deleteCardSuccess(action.payload))
}
function* updateCardTitleWorker(action)
{
    console.log("updatecardtitle",action.payload)
    let {id,title}=action.payload
    let res=yield call(cardApi.updateCardTitle,id,title)
    yield put(updateCardTitleSuccess(res.data.card))
}
function* updateOrderCardWorker(action)
{
    let res=yield call(cardApi.updateOrderCard,action.payload)
    yield put(updateOrderCardSuccess(res.data.cards))
    console.log("response",res.data)
}
function* updateDueDateCardWorker(action)
{
    console.log("update due date",action.payload)
    let {card,due_date}=action.payload
    yield call(cardApi.updateDueDate,card._id,due_date)
    yield put(updateDueDateCardSuccess({card,due_date}))
}
function* listSaga()
{
    console.log("list saga")
    yield takeEvery("board/createCard",createCardWorker)
    yield takeEvery("board/deleteCard",deleteCardWorker)
    yield takeEvery("board/updateCardTitle",updateCardTitleWorker)
    yield takeEvery("board/updateOrderCard",updateOrderCardWorker)
    yield takeEvery("board/updateDueDateCard",updateDueDateCardWorker)
}
export default listSaga