import {createSlice} from "@reduxjs/toolkit"
const initialState={
    currentUser:{},
    isLogged:false
}
const authSlice=createSlice({
    name:"auth",
    initialState,
    reducers:{
        getCurrentUser:(state,action)=>{
            state.currentUser=action.payload
            state.isLogged=true
        },
        logout:(state)=>{
            state.isLogged=false
        }
    }
})
export const {getCurrentUser,logout}=authSlice.actions
export default authSlice.reducer