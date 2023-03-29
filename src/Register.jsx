import React,{useState} from "react"
import accountlogo from './accountlogo.png';

export const Register =(props) =>{
   const [email, setEmail] = useState(' ');
    const [pass, setPass] = useState(' ');
    

    const handleSubmit =(e) => {
        e.preventDeafut();
        console.log(email);
}

return(
        <>
        <form className="register-form" onSubmit={handleSubmit}>
        
        <img src={accountlogo} alt="account-logo" className="account-logo" />
        
            <label htmlFor="name">Full Name </label>
            <input Text={Text}name="name" placeholder="Full Name" id="name" />
            <label htmlfor="email">Email </label>
            <input type ="email" placeholder="youremail@email.com" id="email" name="email"/>
            <label htmlfor="password">Password </label>
            <input type ="password" placeholder="password" id="password" name="password"/>
            <button className="signinbutton">Sign In</button>
            <button className="account" onClick={()=>props.onFormSwitch('login')}>Already have an account?</button>
            <button className="guest" onClick={()=>props.onFormSwitch('guest')}>Continue as a Guest?</button>
        </form>
        
        </>
        
    )

}