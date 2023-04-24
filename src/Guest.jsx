import React,{useState} from "react"
import accountlogo from './accountlogo.png';

export const Guest =(props) =>{
    const [name, setName] = useState(' ');

    const handleSubmit =(e) => {
        e.preventDefault();
        console.log(name);
        
    }

    return(
        <>
        <form className="guest-form" onSubmit={handleSubmit}>
        
        <img src={accountlogo} alt="account-logo" className="account-logo" />
      
        <label htmlFor="guest">Full Name </label>
            <input Text={Text}
            name="name" 
            placeholder="Full Name" 
            id="name" />
            <button className="continuebutton" 
            onClick={() => {window.location.href='/mainpage'}}
            type="submit">
          Contiune
        </button>
        <button
          className="account"
          onClick={() => {window.location.href='/login'}}
        >
         Already have an account?
        </button>
         <button
          className="account"
          onClick={() => {window.location.href='/register'}}
        >
          Don't have an account yet?
        </button>
        </form>
        </>
        
    )
}