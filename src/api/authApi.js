import axiosClient from ".";
const authApi={
    async checkAuth()
    {
        return axiosClient.get("/auth/checkAuth")
    },
    async logout()
    {
        return await axiosClient.get("/auth/logout")
    }
}
export default authApi