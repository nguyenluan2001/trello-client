import styled from "styled-components";
export const Container=styled.div`
position:absolute;
background:white;
z-index:5;
top:120%;
border-radius:5px;
`
export const Buttons=styled.div`
button{
    border:none;
    padding:0.5rem;
    font-weight:bold;
    width:45%;
    border-radius:5px;
    cursor:pointer;
}
.save{
    background:rgb(90,172,68);
    color:white;
}
.cancel{
    background:rgb(239,239,239);
}
display:flex;
justify-content:space-between;
padding:5%;

`