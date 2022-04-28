import React from 'react'
import styled from 'styled-components'
import Fade from 'react-reveal/Fade'
import {Link} from 'react-router-dom'



function Section({title,description,leftBtnText,rightBtnText, backgroundImg, button}) {
  return (
    <Wrap bgImage={backgroundImg}>
        <Fade bottom>
        <ItemText>
            <h1>{title}</h1>
            <p>{description}<span>{button}</span></p>
            
        </ItemText>
        </Fade>
        <Buttons>
            <Fade bottom>
        <ButtonGroup>
            <Link to='/teslaaccount'>
            <LeftButton> 
                
                {leftBtnText}
            </LeftButton>
            </Link>
                {rightBtnText && 
            <RightButton>
                {rightBtnText}
            </RightButton>
                }

        </ButtonGroup>
        </Fade>
        <DownArrow src="/images/down-arrow.svg"/>
        </Buttons>


    </Wrap>
  )
}

export default Section

const Wrap = styled.div`
    width: 100vw;
    height: 100vh;
    background-size:cover;
    background-position:center;
    background-repeat:no-repeat;
    background-image: url('/images/model-s.jpg');
    display:flex;
    flex-direction:column;
    justify-content:space-between;
    align-item: center;
    background-image: ${props =>  `url("/images/${props.bgImage}")`};
    place-items:center;

`
const ItemText = styled.div `
    padding-top:15vh;
    text-align:center;

    span {
        padding-bottom: 4px;
        padding-top: 15px;
        border-bottom: 1px solid black;
        color: #393C41;
        cursor:pointer;
        text-align:center;


    }
    span:hover {
        
    }

   
`

const ButtonGroup = styled.div `
    display: flex;
    margin-bottom:30px;
        @media (max-width: 768px) {
        flex-direction:column;
}

`

const LeftButton = styled.div `
background-color:rgba(23, 26, 32, 0.8);
height: 40px;
width: 256px;
color:white;
display:flex;
justify-content: center;
align-items: center;
border-radius: 100px;
opacity: 0.85;
text-transform: uppercase;
font-size: 12px;
cursor:pointer;
transform: scale(1.4)
transition: 0.5s ease-in-out;
margin: 8px;
`

const RightButton = styled(LeftButton)`

background: white;
opacity: 0.65;
color: black;
transform: scale(1.2)
transition: 0.5s ease-in-out;
`

const DownArrow = styled.img`
height: 40px;
animation: animateDown infinite 1.5s;

`
const Buttons = styled.div`

`