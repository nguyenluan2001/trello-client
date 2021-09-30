import React from 'react'
import Header from '../../components/header/Header'
import Dashboard from './components/dashboard/Dashboard'
import {Container} from "./style"
import {Switch,Route} from "react-router-dom"
import ManageBoard from './components/manageBoard/ManageBoard'
function Homepage() {
    return (
        <Container> 
            <Header></Header>
            <Switch>
                <Route path="/" exact component={Dashboard}></Route>
                <Route path="/:id" component={ManageBoard}></Route>
            </Switch>
        </Container>
    )
}
export default Homepage
