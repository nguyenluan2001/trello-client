import styled from "styled-components";
export const Container=styled.div`
width:300px;
color:white;
margin-right:10px;
button.new-task{
    display:block;
    margin:0px auto;
    // width:20%;
    padding:0.5rem;
    font-size:1.2rem;
    text-align:center;
    background:rgb(0,82,136);
    color:white;
    border:none;
    margin-top:10px;
    cursor:pointer;
    border-radius:5px;

}
`
export const Content=styled.div`
background:rgb(37,71,103);
border-radius:10px;
width:100%;
`
export const Header=styled.div`
padding:0.5rem;
font-weight:bold;
font-size:1.2rem;
.wp-list-title
{
    display:flex;
    align-items:center;
    justify-content:space-between;
    .list-title{
        cursor:pointer;
        width:100%;
    }
    svg{
        cursor:pointer;
    }

}
.edit-list-title
{ 
    display:flex;
    align-items:center;
    justify-content:space-between;
    input{
        width:100%;
        font-size:1.2rem;
    }
    .cancel-edit-list{
        color:white;
        background:tomato;
        padding:0.3rem;
        border-radius:5px;
        cursor:pointer;
    }

}
`
export const CreateTask=styled.div`
    display:flex;
    padding:0.5rem;
    box-sizing:border-box;
    width:100%;
    form
    {
        width:100%;
     input{
         width:100%;
         font-size:1.2rem;
     }
    }
    .cancle-create-task{
        color:white;
        background:tomato;
        padding:0.3rem;
        border-radius:5px;
        cursor:pointer;
    }

`
export const ListCard=styled.div`
padding:0.5rem 0rem;
`