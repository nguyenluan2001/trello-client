import styled from "styled-components";
export const Container=styled.div`
background:rgb(238,238,238);
flex:1;
// overflow-x:scroll;
// height:100vh;
min-width:200vw;
`
export const Content=styled.div`
// width:95%;
margin:0px auto;
padding:20px;
`
export const WrapTopContent=styled.div`
height:${({topContentHeight})=>topContentHeight+"px"};
`
export const TopContent=styled.div`
display:flex;
justify-content:space-between;
width:95vw;
position:fixed;
padding
`
export const Title=styled.div`
width:80%;
p.title{
    font-size:1.5rem;
    margin:0;
    font-weight:bold;
    cursor:pointer;
}
`
export const EditTitle=styled.div`
display:flex;
form{
    width:100%;
    input{
        width:100%;
        // padding:0.5rem;
        font-size:1.5rem;
    }
}
`
export const BoardSetting=styled.ul`
list-style-type:none;
margin:0;
display:flex;
align-items:center;
li{
    border-radius:5px;
    background:rgb(0,102,170);
    color:white;
    cursor:pointer;
    &:hover{
        background:rgb(37,71,103);
    }
}
li:not(li:last-child){
    padding:0.5rem 0.5rem;
}
li + li{
    margin-left:10px;
}
li:last-child{
    position:relative;
    & > div:first-child{
        width:100%;
        height:100%;
        padding:0.5rem 0.5rem;

    }
}
`
export const ConfirmDelete=styled.div`
position:absolute;
background:white;
color:black;
top:100%;
left:0;
right:0;
padding:0.3rem;
text-align:center;
border-radius:5px;
height:fit-content;
span{
    font-weight:bold;
    margin-bottom:0.3rem;
    display:block;
}
.delete-btn{
    background:tomato;
    padding:0.2rem 0rem; 
    color:white;
    border-radius:5px;
    margin-bottom:0.3rem;
    &:hover{
        background:#983928;
    }
}
.cancel-btn{
    background:rgb(90,172,68);
    padding:0.2rem 0rem; 
    color:white;
    border-radius:5px;
    &:hover{
        background:rgb(66 120 51);
    }
}
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
// &{
//     div + div{
//         margin-left:10px;
//     }
// }
`
