import styled from "styled-components";
export const Container=styled.div`

background:rgb(221,221,221);
color:hsl(240,13%,30%);
font-weight:bold;
height:150px;
border-radius:10px;
padding:1rem;
box-sizing:border-box;
display:block;
text-decoration:none;
display:flex;
justify-content:center;
align-items:center;
&:hover{
    background:#ccc;
}
form{
    height:100%;
    width:100%;
    input{
        width:100%;
        font-size:1.2rem;
    }
    .buttons{
        text-align:center;
        margin-top:10px;
        button{
            color:white;
            padding:0.5rem;
            border-radius:5px;
            font-weight:bold;
            border:none;
        }
        button+button{
            margin-left:10px;
        }
        .create{
            background:rgb(90,172,68);
        }
        .cancel{
            background:tomato;
        }
    }

}
`