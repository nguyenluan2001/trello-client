import React from 'react'
import { Container, Logo, SignInType, Content } from "./styte"
import { useSelector } from "react-redux"
import { Redirect } from 'react-router'
function SignIn() {
    const auth = useSelector(state => state.auth)

    return (
        <>
       {  !auth?.isLogged
       ?   <Container>
                <Content>

                    <Logo>
                        <img src="https://store.suitecrm.com/assets/img/addons/kanban-view/logo.png?1477652376" alt="" />
                        <p className="site-name">REACTKABAN</p>
                    </Logo>
                    <SignInType>
                        <a href="" className="signIn-item twitter">
                            <img src="" alt="" />
                            <span>Sign in with Twitter </span>
                        </a>
                        <a href={process.env.REACT_APP_BACKEND_URL + "/auth/google"} className="signIn-item google">
                            <img src="" alt="" />
                            <span>Sign in with Google </span>
                        </a>
                    </SignInType>
                </Content>

            </Container>
        :<Redirect to="/"></Redirect>    
        }
        </>
    )
}

export default SignIn
