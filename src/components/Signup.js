import React, {useState} from 'react'
import {Link} from 'react-router-dom'
import  LanguageOutlinedIcon  from '@material-ui/icons/LanguageOutlined'
import ButtonPrimary from './ButtonPrimary'
import ButtonSecondary from './ButtonSecondary'
import '../styles/Signup.css'

function Signup() {
    const [email,setEmail] = useState ("")
    const [password,setPassword] = useState ("")
  return (
    <div className="login">
        <div className="login-header">
            <div className="login-title">
                <Link to='/'>
                <img src ="/images/logo.svg" alt =""/>
                </Link>
            </div>
            <div className="login-language">
                <LanguageOutlinedIcon/> <span>en-US</span>
                </div>
            </div>
                <div className="login-info">
                    <h1>Sign Up</h1>
                    <form className="login-form">
                        <label htmlFor="name">Select Country</label> 
                        <input type="name"
                                id="name" 
                                value={email} 
                                onChange={(e)=> setEmail(e.target.value)}/>

                            <label htmlFor="email">Select Language</label> 
                        <input 
                type="last name" 
                id="last name" 
                value={password} 
                onChange={(e)=> setPassword(e.target.value)}/>
                 <label htmlFor="email">First Name</label> 
                        <input 
                type="last name" 
                id="last name" 
                value={password} 
                onChange={(e)=> setPassword(e.target.value)}/>
                 <label htmlFor="email">Last Name</label> 
                        <input 
                type="last name" 
                id="last name" 
                value={password} 
                onChange={(e)=> setPassword(e.target.value)}/>
                <label htmlFor="email">Email Address</label> 
                        <input 
                type="last name" 
                id="last name" 
                value={password} 
                onChange={(e)=> setPassword(e.target.value)}/><label htmlFor="email">Password</label> 
                <input 
        type="last name" 
        id="last name" 
        value={password} 
        onChange={(e)=> setPassword(e.target.value)}/>
                </form>
                        
                        <Link to='/signup'>
                        <ButtonSecondary name="Create Account" />
                        </Link>
                        <div className='login-divider'>
                            <hr /> <span>OR</span> <hr />
                        </div>
                        <ButtonPrimary name="Sign-In" type="submit" />
                
                    </div>
                
                </div>
  )
}

export default Signup
