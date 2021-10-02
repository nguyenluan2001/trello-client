import { createSlice,current } from "@reduxjs/toolkit"
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
        },
        deleteBoard:(state,action)=>{
            let newBoards=[...state].filter(item=>item._id!=action.payload)
            return newBoards
        },
        deleteBoardSuccess:(state,action)=>{
        },
        updateBoardTitle:(state,action)=>{},
        updateBoardTitleSuccess:(state,action)=>{
            let newBoards=JSON.parse(JSON.stringify(current(state)))
            newBoards=[...newBoards].map(item=>{
                if(item._id==action.payload._id)
                {
                    item.title=action.payload.title
                    return item
                }
                else
                {
                    return item
                }
            })

            // console.log("state",cloneState)
            console.log("newboard",newBoards)
            // return newBoards
        }
    }
})
export const { addNewBoard,
    addNewBoardSuccess,
    getListBoard,
    getListBoardSuccess,
    deleteBoard,
    deleteBoardSuccess,
    updateBoardTitle,
    updateBoardTitleSuccess
 } = listBoardSlice.actions
export default listBoardSlice.reducer