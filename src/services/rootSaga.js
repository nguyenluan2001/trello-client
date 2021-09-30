import listBoardSaga from "./sagas/listBoardSaga"
import {all} from "redux-saga/effects"
function* rootSaga()
{
    console.log("root saga")
    yield all([listBoardSaga()])
}
export default rootSaga