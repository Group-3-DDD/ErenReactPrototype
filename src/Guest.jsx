import React,{useState} from "react"
import accountlogo from './accountlogo.png';

export const Guest =(props) =>{
    const [name, setName] = useState(' ');

    const handleSubmit =(e) => {
        e.preventDefault();
        console.log(name);
        window.location.href = "/mainpage";
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
            <button className="continuebutton" type="submit">
          Contiune
        </button>
        </form>
        </>
        
    )
}