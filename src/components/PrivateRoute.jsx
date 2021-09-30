import React,{useEffect} from 'react'
import { Redirect, Route } from 'react-router'
import authApi from '../api/authApi'
import {useDispatch,useSelector} from "react-redux"
import {getCurrentUser} from "../services/slices/authSlice"
import {useHistory} from "react-router-dom"
function PrivateRoute({component:Component,...rest}) {
    const dispatch=useDispatch()
    const history=useHistory()
    const auth=useSelector(state=>state.auth)
    useEffect(()=>{
        async function checkAuthFunc()
        {
            let res=await authApi.checkAuth()
            if(res?.data?.user)
            {
             dispatch(getCurrentUser(res.data.user))   
            }
            else
            {
                history.push("/signin")
            }
        }
        checkAuthFunc()
    },[])
    return (
        <Route
        {...rest}
        render={(props)=>{
            return auth?.isLogged
            ?<Component {...props}></Component>
            :<Redirect to="/signin"></Redirect>
        }}
        >
            
        </Route>
    )
}

export default PrivateRoute
