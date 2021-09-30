import { configureStore,getDefaultMiddleware,combineReducers } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import rootSaga from "./rootSaga"
import ListBoardReducer from "./slices/listBoardSlice"
import AuthReducer from "./slices/authSlice"
import BoardReducer from "./slices/boardSlice"
let sagaMiddleware = createSagaMiddleware();
const middleware = [...getDefaultMiddleware({ thunk: false }), sagaMiddleware];
let rootReducer=combineReducers({
    "listBoard":ListBoardReducer,
    "board":BoardReducer,
    "auth":AuthReducer
})
const store=configureStore({
    reducer:rootReducer,
    middleware
})

sagaMiddleware.run(rootSaga);
export {store}