import React,{useState} from "react"
import accountlogo from './accountlogo.png';

export const Login =(props) =>{
    const [email, setEmail] = useState(' ');
    const [pass, setPass] = useState(' ');

    const handleSubmit =(e) => {
        e.preventDeafut();
        console.log(email);
    }

    return(
        <>
        <form className="login-form" onSubmit={handleSubmit}>
        
        <img src={accountlogo} alt="account-logo" className="account-logo" />
      
            <label htmalfor="email">Email </label>
            <input type ="email" placeholder="youremail@email.com" id="email" name="email"/>
            <label htamlfor="password">Password </label>
            <input type ="password" placeholder="password" id="password" name="password"/>
            <button className="loginbutton" onClick={()=>props.onFormSwitch('mainpage')}>Log In</button>
            <button className="no-account" onClick={()=>props.onFormSwitch('register')}>Dont have an account?</button>
            <button className="guest" onClick={()=>props.onFormSwitch('guest')}>Continue as a Guest?</button>
        </form>
        </>
        
    )
}