import React,{useState} from "react"
import accountlogo from './accountlogo.png';

export const Guest =(props) =>{
    const [name, setName] = useState(' ');

    const handleSubmit =(e) => {
        e.preventDeafut();
    }

    return(
        <>
        <form className="guest-form" onSubmit={handleSubmit}>
        
        <img src={accountlogo} alt="account-logo" className="account-logo" />
      
        <label htmlFor="guest">Full Name </label>
            <input Text={Text}name="name" placeholder="Full Name" id="name" />
            <button>Continue</button>
        </form>
        </>
        
    )
}