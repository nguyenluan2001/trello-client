import { Link } from "react-router-dom";
import styled from "styled-components";
export const Container=styled.div`
background:rgb(85,85,85);
height:fit-content;
padding:.5rem;
display:flex;
justify-content:space-between;
align-items:center;
width:100vw;
position:fixed;
box-sizing:border-box;
`
export const Logo=styled(Link)`
display:flex;
align-items:center;
text-decoration:none;
img{
    width:40px;
}
.site-name{
    font-size:1.5rem;
    font-weight:bold;
    color:white;
    margin-left:10px;
}
`
export const Action=styled.div`
display:flex;
align-items:center;
img{
    width:30px;
}
svg{
color:white;
font-size:1.5rem;
margin-left:10px;
cursor:pointer;
}
`