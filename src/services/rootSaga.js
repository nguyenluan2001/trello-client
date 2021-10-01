import listBoardSaga from "./sagas/listBoardSaga"
import boardSaga from "./sagas/boardSaga"
import listSaga from "./sagas/listSaga"
import {all} from "redux-saga/effects"
function* rootSaga()
{
    console.log("root saga")
    yield all([listBoardSaga(),boardSaga(),listSaga()])
}
export default rootSaga