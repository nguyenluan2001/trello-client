import styled from "styled-components";
export const Container=styled.div`
background-image:url('https://www.reactkanban.com/static/images/postits-1920.c6070a.jpg');
background-size:cover;
background-position:center;
width:100vw;
height:100vh;
`
export const Logo=styled.div`
display:flex;
align-items:center;
.site-name{
    color:white;
    font-size:2rem;
    font-weight:bold;
    margin-left:10px;
}
img{
    width:80px;
    height:80px;
}
`
export const SignInType=styled.div`
padding:0;
display:flex;
a{
    text-decoration:none;
}
.signIn-item{
    padding:0.5rem;
    font-weight:bold;
    border-radius:5px;
}
.twitter{
    background:rgb(29,161,242);
    color:white;
}
.google{
    background:white;
    color:black;
}
a+a{
    margin-left:10px;
}
`
export const Content=styled.div`
padding-left:5%;
padding-top:5%;
`