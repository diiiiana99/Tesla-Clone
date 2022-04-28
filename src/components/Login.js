import React, {useState} from 'react'
import {Link} from 'react-router-dom'
import  LanguageOutlinedIcon  from '@material-ui/icons/LanguageOutlined'
import ButtonPrimary from './ButtonPrimary'
import ButtonSecondary from './ButtonSecondary'
import '../styles/Login.css'
// import { auth } from '../src/firebase'
// import { useDispatch } from 'react-redux'
// import {login} from '../features/userSlice'





function Login() {

    

    const [email,setEmail] = useState ("")
    const [password,setPassword] = useState ("")
    // const dispatch = useDispatch()
    // const history= useHistory()

    const signIn = (e) => {
        e.preventDefault ();
    }

    //     auth.signInWithEmailAndPassword (email, password).then((userAuth) => {
    //         dispatch(
    //             login({
    //             email: userAuth.user.email,
    //             uid: userAuth.user.uid,
    //             displayName: userAuth.user.displayName,
    //         })
    //         )
    //         history.push('/teslaaccount')
    //     })
    // }

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
                    <h1>Sign In</h1>
                    <form className="login-form">
                        <label htmlFor="email">Email Address</label> 
                        <input type="email"
                                id="email" 
                                value={email} 
                                onChange={(e)=> setEmail(e.target.value)}/>

                            <label htmlFor="email">Password</label> 
                        <input 
                type="password" 
                id="password" 
                value={password} 
                onChange={(e)=> setPassword(e.target.value)}/>
                <ButtonPrimary name="Sign-In" type="submit" onClick={signIn}/>
                </form>
                        <div className='login-divider'>
                            <hr /> <span>OR</span> <hr />
                        </div>
                        <Link to='/signup'>
                        <ButtonSecondary name="Create Account" />
                        </Link>
                    </div>
                
                </div>
       
  )
}

export default Login

// const Container = styled.div`
// padding: 25px;
// padding-top: 15px;
// height: 100vh;
// display: flex;
// flex-direction: column;
// gap: 70px;
// `
// const Wrap2 = styled.div`
//     display:flex;
//     align-items: center;
//     justify-content: space-between;
//     position: sticky;
//     top: 0;
// `


// const TextContent = styled.div`
// object-fit:contain;
// width: 90px;`
// const Form = styled.div``


