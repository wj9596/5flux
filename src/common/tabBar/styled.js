import styled from "styled-components";

export const TabBarWrapper = styled.div`
width:100%;
height:.4rem;
position:fixed;
left:0;
bottom:0;
border-top:1px solid #ccc;
background:#000;
display:flex;
justify-content: space-around;
align-items: center;
ul,li{
    width:100%;
    height:100%;
    display:flex;
    justify-content:center;
    align-items:center;
}
a{
   display:flex;
   width:100%;
   height:100%;
   flex-direction:column;
   justify-content:center;
   align-items:center; 
   font-size:.1rem;
}
i{
    font-size:.208333rem;
}
.active{
    color:#fff;
}

`