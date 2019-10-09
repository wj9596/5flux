import styled from 'styled-components';

export const AddCartWrapper = styled.div`
width:100%;
height:0.4rem;
background:#fff;
display:flex;
position:fixed;
left:0;
bottom:0;
z-index:10;
border-top:1px solid #ccc;
border-bottom:1px solid #ccc;
flex-flow: row wrap;
align-items: center;
.lg{
    display:flex;
    flex-direction:column;
    justify-content:space-between;
    /* width:56px; */
    border-left:1px solid #ccc;
    align-items:center;
    color:#666;
    padding:0.0417rem 0;
    flex-grow:1;
    .logo1{
        width:20px;
        height:20px;
        img{
            width:100%;
            height:100%;
        }
    }
}
a .lg{
    padding:0.0417rem 0.0833rem;
}
.span{
    flex-grow:3;
    border-left:1px solid #ccc;
    text-align:center;
    line-height:48px;
    font-size:0.1167rem;
    color:#fff;
    height:100%;
}
.wuda{
    background:#ccb27f;
}
.goum{
    background:#9b885f;
}
a{
    display:inline-block;
    color:#fff;
}
.am-button::before {
     border: none; 
}
.am-button {
    border-radius:none;
}
`