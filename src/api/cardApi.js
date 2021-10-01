import axiosClient from ".";
import { createCard, deleteCard, updateCardTitle } from "../services/slices/boardSlice";
const cardApi={
    async createCard(title,listId,boardId)
    {
        return await axiosClient.post("/api/card",{title,listId,boardId})
    },
    async deleteCard(id)
    {
        return await axiosClient.delete(`/api/card/${id}`)
    },
    async updateCardTitle(id,title)
    {
        return await axiosClient.put(`/api/card/${id}`,{title})
    }
}
export default cardApi