import React, { useState } from 'react'
import {Link} from 'react-router-dom'
import styled from "styled-components"
import MenuIcon from '@material-ui/icons/Menu';
import CloseIcon from '@material-ui/icons/Close';
// import {Link} from 'react-scroll'
import {Fade} from 'react-reveal'



function Header() { 
    const [open,setOpen] = useState(false)

  
    return (
    <Container>
        <Link to='/'>

            <img src ="/images/logo.svg" alt =""/>
       
        </Link>
        <Menu>
        
       <Link activeClass="active" to='/'spy={true} smooth={true}> Model S</Link>
               
           
       <Link activeClass="active" to='home' spy={true} smooth={true}> Model Y</Link>           
                <Link to= '/'> Model 3</Link>
        
                <Link to= '/'> Model X</Link>

        </Menu>
        <RightMenu> 
        <Link to= '/'> Shop</Link>
        <Link to= '/login'> Tesla Account</Link>
            <CustomMenu onClick={() => setOpen(true)} />

        </RightMenu>
        <Sidebar show={open}>
            <CloseWrapper>
                <CloseButton  onClick={() => setOpen(false)} />
            </CloseWrapper>
            <Fade left>
            <li><a href="#"></a>Model S</li>
            <li><a href="#"></a>Model Y</li>
            <li><a href="#"></a>Model 3</li>
            <li><a href="#"></a>Model X</li>
            <li><a href="#">Existing Inverntory</a></li>
            <li><a href="#"></a>Used Inverntory </li>
            <li><a href="#"></a>Trade-In</li>
            <li><a href="#"></a>CyberTruck</li>
            <li><a href="#"></a>Roadaster</li>
            <li><a href="#"></a>Semi</li>
            <li><a href="#"></a>Charging</li>
            </Fade>
        </Sidebar>
    </Container>
  )
}

export default Header

const Container = styled.div`
    min-height:60px;
    position:fixed;
    display:flex;
    align-items:center;
    padding:0 20px;
    top: 0;
    left: 0; 
    right: 0;
    justify-content:space-between;
    z-index: 1;

`

const Menu = styled.div `
    display:flex;
    align-items:center;
    justify-content:center;
    flex:1;
     
    
    a {a
        font-weight: 600; 
        text-transform: uppercase;
        padding: 0 10px;
        flex-wrap: no-wrap;
    }
    @media (max-width: 768px) {
        display:none;
}
`
const RightMenu= styled.div `
display:flex;
align-items: center;
a {
    font-weight: 600;
    text-transform:uppercase;
    padding: 0 10px;
    flex-wrap: no-wrap;
}
`
const CustomMenu = styled(MenuIcon)`
    cursor:pointer;

`
const Sidebar = styled.div`
position: fixed;
top: 0;
bottom: 0;
right: 0;
background:white;
width: 300px;
z-index: 16;
list-style: none;
padding: 20px;
display:flex;
flex-direction: column;
text-align:start;
transform: ${props => props.show ? 'translateX(0)': 'translateX(100%)'};
transition: transform 0.4s ease-in;

li{
    padding: 15px 0;
    border-bottom: 1px solid rgba(0, 0, 0, 0.2);
 
}

`
const CloseButton = styled(CloseIcon)`
    cursor:pointer;
`
const CloseWrapper = styled.div`
    display:flex;
    justify-content:flex-end;

`