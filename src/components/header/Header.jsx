import React from 'react'
import { Container, Logo, Action } from "./style"
import { FaSignOutAlt } from "react-icons/fa"
import authApi from '../../api/authApi'
import {useHistory} from "react-router-dom"
import {useSelector,useDispatch} from "react-redux"
import { logout } from '../../services/slices/authSlice'
function Header() {
    const history=useHistory()
    const auth=useSelector(state=>state.auth)
    const dispatch=useDispatch()
    async function handleLogout()
    {
        let message=await authApi.logout()
        dispatch(logout())
        history.push("/signin")
        console.log(11111)
    }
    return (
        <Container>
            <Logo to="/">
                <img src="https://store.suitecrm.com/assets/img/addons/kanban-view/logo.png?1477652376" alt="" />
                <span className="site-name">REACT KANBAN</span>
            </Logo>
            <Action>
                <img src={auth.currentUser.avatar} alt="" />
                <FaSignOutAlt onClick={()=>handleLogout()}></FaSignOutAlt>
            </Action>
        </Container>
    )
}

export default Header