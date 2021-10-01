import axiosClient from ".";
import { deleteList, updateListTitle, updateOrderList } from "../services/slices/boardSlice";
const listApi={
    async createList(title,boardId)
    {
        return await axiosClient.post("/api/list",{title,boardId})
    },
    async deleteList(id)
    {
        return await axiosClient.delete(`/api/list/${id}`)
    },
    async updateOrderList(lists)
    {
        return await axiosClient.post('/api/list/updateOrderList',{lists})
    },
    async updateListTitle(id,title)
    {
        return await axiosClient.put(`/api/list/${id}`,{title})
    }
    

}
export default listApi