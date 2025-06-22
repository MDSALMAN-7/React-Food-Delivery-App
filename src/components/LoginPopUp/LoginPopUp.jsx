import { useState } from 'react';
import './LoginPopUp.css';
import { assets } from '../../assets/assets';

export function LoginPopUp({setShowLogin}){

    const [currentState,setCurrentState]=useState("Log In");

    return(
        <div className='login-popup'>
            <form className="login-popup-container">
                <div className="login-popup-title">
                    <h2>{currentState}</h2>
                    <img onClick={()=>setShowLogin(false)} src={assets.cross_icon} alt="" />
                </div>
                <div className="login-popup-input">
                    {currentState==="Log In"?<></>:<input type="text" placeholder='your name' required />}
                    
                    <input type="email" placeholder='your email' required />
                    <input type="password" placeholder='password' required />
                </div>
                <button>{currentState==="Sing Up"?"Create Account":"Login"}</button>
                <div className="login-popup-condition">
                    <input type="checkbox" required />
                    <p>By contining, i agree to the terms of use terms of use & privacy policy</p>
                </div>
                {currentState==="Log In"
                ?<p>Create a new account? <span onClick={()=>setCurrentState("Sign Up")}>Click here</span></p>
                :<p>Alreadry have an account? <span onClick={()=>setCurrentState("Login")}>Login here</span></p>
                }
                
            </form>
        </div>
    )
}