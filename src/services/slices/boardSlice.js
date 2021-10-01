import { createSlice } from "@reduxjs/toolkit"
const initialState = {}
const boardSlice = createSlice({
    name: "board",
    initialState,
    reducers: {
        // ==== BOARD ====
        getBoard: (state, action) => {
            return action.payload
        },
        // ==== LIST =====
        createList: (state, action) => {

        },
        createListSuccess: (state, action) => {
            state.lists.push(action.payload)
        },
        updateOrderList: (state, action) => { },
        updateOrderSuccess: (state, action) => { },
        updateListTitle:(state,action)=>{},
        updateListTitleSuccess:(state,action)=>{
            let cloneLists=[...state.lists]
            cloneLists=cloneLists.map(item=>{
                if(item._id==action.payload._id)
                {
                    // item.cards=item.cards?.length>0?item.cards:[]
                    // item.cards.push(action.payload)
                    item.title=action.payload.title
                    return item
                }
                else
                {
                    return item
                }
            })
            state.lists=cloneLists
        },
        deleteList: (state, action) => { },
        deleteListSuccess: (state, action) => {
            console.log("deletelist ok")
            let newLists = [...state.lists].filter(item => item._id != action.payload._id)
            state.lists = newLists
        },
        // ===== CARD ====
        createCard: (state, action) => { },
        createCardSuccess: (state, action) => {
            let cloneLists=[...state.lists]
            cloneLists=cloneLists.map(item=>{
                if(item._id==action.payload.listId)
                {
                    item.cards=item.cards?.length>0?item.cards:[]
                    item.cards.push(action.payload)
                    return item
                }
                else
                {
                    return item
                }
            })
            state.lists=cloneLists
        },
        deleteCard:(state,action)=>{},
        deleteCardSuccess:(state,action)=>{
            let cloneLists=[...state.lists]
            cloneLists=cloneLists.map(item=>{
                if(item._id==action.payload.listId)
                {
                    // item.cards=item.cards?.length>0?item.cards:[]
                    // item.cards.push(action.payload)
                    let index=item?.cards.findIndex(card=>card._id==action.payload._id)
                    item.cards.splice(index,1)
                    return item
                }
                else
                {
                    return item
                }
            })
            state.lists=cloneLists
        },
        updateCardTitle:(state,action)=>{},
        updateCardTitleSuccess:(state,action)=>{
            let cloneLists=[...state.lists]
            cloneLists=cloneLists.map(item=>{
                if(item._id==action.payload.listId)
                {
                    let index=item?.cards.findIndex(card=>card._id==action.payload._id)
                    item.cards[index].title=action.payload.title
                    return item
                }
                else
                {
                    return item
                }
            })
            state.lists=cloneLists
        }
    }

})
export const { getBoard,
    createList, createListSuccess,
    updateOrderList, updateOrderSuccess,
    updateListTitle,updateListTitleSuccess,
    deleteList, deleteListSuccess,
    createCard,createCardSuccess,
    deleteCard,deleteCardSuccess,
    updateCardTitle,updateCardTitleSuccess
} = boardSlice.actions
export default boardSlice.reducer