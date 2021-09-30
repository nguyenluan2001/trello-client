import { createSlice } from "@reduxjs/toolkit"
const initialState = []
const listBoardSlice = createSlice({
    name: "listBoard",
    initialState,
    reducers: {
        getListBoard:(state,action)=>{

        },
        getListBoardSuccess:(state,action)=>{
           return  action.payload
        },
        addNewBoard: (state, action) => {
        },
        addNewBoardSuccess: (state, action) => {
            state.push(action.payload)
        }
    }
})
export const { addNewBoard,addNewBoardSuccess,getListBoard,getListBoardSuccess } = listBoardSlice.actions
export default listBoardSlice.reducer