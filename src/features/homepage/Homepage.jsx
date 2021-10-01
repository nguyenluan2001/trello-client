import React,{useRef,useState} from 'react'
import Header from '../../components/header/Header'
import Dashboard from './components/dashboard/Dashboard'
import {Container} from "./style"
import {Switch,Route} from "react-router-dom"
import ManageBoard from './components/manageBoard/ManageBoard'
function Homepage() {
    const [headerHeight,setHeaderHeight]=useState(0)
    function getRef(element)
    {
        console.log(element)
        let height=element?.clientHeight
        setHeaderHeight(height)
    }
    return (
        <Container> 
            <Header getRef={getRef} headerHeight={headerHeight}></Header>
            <Switch>
                <Route path="/" exact component={Dashboard}></Route>
                <Route path="/:id" component={ManageBoard}></Route>
            </Switch>
        </Container>
    )
}
export default Homepage
