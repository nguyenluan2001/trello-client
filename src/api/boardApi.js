import axiosClient from ".";
const boardApi={
    async createBoard(title)
    {
        return await axiosClient.post("/api/board",{title})
    },
    async getBoards()
    {
        return await axiosClient.get("/api/board")
    }

}
export default boardApi