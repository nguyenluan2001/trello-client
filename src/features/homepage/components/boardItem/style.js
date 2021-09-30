import { Link } from "react-router-dom";
import styled from "styled-components";
export const Container=styled.div`
background:rgb(0,102,170);
color:white;
font-weight:bold;
height:150px;
border-radius:10px;
padding:1rem;
box-sizing:border-box;
display:block;
text-decoration:none;
display:flex;
justify-content:flex-start;
align-items:top;
cursor:pointer;
&:hover{
    background:#059;
}
`