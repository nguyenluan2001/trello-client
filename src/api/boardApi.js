import axiosClient from ".";
const boardApi={
    async createBoard(title)
    {
        return await axiosClient.post("/api/board",{title})
    },
    async getBoards()
    {
        return await axiosClient.get("/api/board")
    },
    async deleteBoard(id)
    {
        return await axiosClient.delete(`/api/board/${id}`)
    },
    async updateTitle(id,title)
    {
        return await axiosClient.put(`/api/board/${id}`,{title})
    }

}
export default boardApi