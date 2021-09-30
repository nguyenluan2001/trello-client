import styled from "styled-components";
export const Container=styled.div`
background:rgb(238,238,238);
flex:1;

`
export const Content=styled.div`
width:95%;
margin:0px auto;
`
export const ListBoards=styled.div`
display:grid;
grid-template-columns:repeat(4,1fr);
grid-gap:10px 10px;
`
export const CreateList=styled.div`
width:20vw;
height:fit-content;
span{
    box-sizing:border-box;
    background:rgb(0,87,145);
    padding:0.5rem;
    color:rgb(215,217,219);
    display:block;
    width:100%;
    height:100%;
    cursor:pointer;
    border-radius:10px;

}
.input-list-title
{
    display:flex;
    align-items:center;
    form{
        width:100%;
        input{
            width:100%;
            font-size:1.2rem;
        }
    }
    button{
        color:white;
        background:tomato;
        padding:0.3rem;
        border-radius:5px;
        cursor:pointer;
    }
}
`
export const ManageArea=styled.div`
display:flex;
&{
    div + div{
        margin-left:10px;
    }
}
`