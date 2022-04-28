import React from 'react'
import styled from 'styled-components'
import Section from './Section'
import {Link} from 'react-scroll'






function Home() {
return (
    <>
        <Container>
            <Link>
            <Section
            id="home"
            title="Model S"
            description="Order Online For "
            button= "Touchless Delivery"
            backgroundImg="model-s.jpg"
            leftBtnText="Custom Order"
            rightBtnText='Existing Inverntory'
            /> 
            </Link>
            <Link>
            <Section
                id="home"
                title="Model Y"
                description="Order Online For "
                button= "Touchless Delivery"
                backgroundImg="model-y.jpg"
                leftBtnText="Custom Order"
                rightBtnText='Existing Inverntory'
            />  
            </Link>
            <Link>
            <Section
                activeClass="active" to='/home' spy={true} smooth={true}
                title="Model 3"
                description="Order Online For "
                button= "Touchless Delivery"
                backgroundImg="model-3.jpg"
                leftBtnText="Custom Order"
                rightBtnText='Existing Inverntory'
                />  
                </Link>
            <Section
                title="Model X"
                description="Order Online For "
                button= "Touchless Delivery"
                backgroundImg="model-x.jpg"
                leftBtnText="Custom Order"
                rightBtnText='Existing Inverntory'
                />    
            <Section
                title="Lower Cost Solar Panels in America"
                description="Money-back guarantee"
                backgroundImg="solar-roof.jpg"
                leftBtnText="Order Now"
                rightBtnText='Learn Now'
                />   
                  <Section
                title="Accessories"
                description="Money-back guarantee"
                backgroundImg="accessories.jpg"
                leftBtnText="Order Now"
                />   
            
        </Container>
    </>
    )
}

export default Home

const Container = styled.div `
height: 100vh;`
