import styled from "styled-components";
export const Container=styled.div`
color:black;
// margin-bottom:10px;
padding:0.2rem 0.5rem;
position:relative;
`
export const Content=styled.div`
background:rgb(251,251,251);
border-radius:10px;
cursor:pointer;
span{
    padding:0.5rem 0.5rem;
    display:block;
    height:100%;
    width:100%;
}
form{
    // width:100%;
    input{
        border-radius:10px;
        width:100%;
        padding:0.5rem 0.5rem;
        box-sizing:border-box;
        font-size:1rem;
        border:none;
        outline:2px solid yellow;

    }
}
`
export const Setting=styled.ul`
list-style-type:none;
margin:0;
padding:0;
position:absolute;
left:100%;
top:0;
z-index:10;
img{
    width:20px;
}
li{
    display:flex;
    align-items:center;
    justify-content:center;
    background:rgb(204,212,217);
    padding:0.2rem 0.5rem;
    margin-bottom:5px;
    border-radius:5px;
    &:hover{
        background:rgb(251,251,251);
    }
}

`