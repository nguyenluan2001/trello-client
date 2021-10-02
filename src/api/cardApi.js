import axiosClient from ".";
import { createCard, deleteCard, updateCardTitle, updateOrderCard } from "../services/slices/boardSlice";
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
    },
    async updateOrderCard(cards)
    {
        return await axiosClient.post("/api/card/updateOrderCard",{cards})
    }
}
export default cardApi