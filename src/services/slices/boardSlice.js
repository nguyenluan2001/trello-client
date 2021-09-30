import {createSlice} from "@reduxjs/toolkit"
const initialState={}
const boardSlice=createSlice({
    name:"board",
    initialState,
    reducers:{
        getBoard:(state,action)=>{
            return action.payload
        }
    }

})
export const {getBoard}=boardSlice.actions
export default boardSlice.reducer