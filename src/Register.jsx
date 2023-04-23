import React,{useState} from "react"
import accountlogo from './accountlogo.png';

export const Register = (props) => {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email);
  };

return (
    <>
      <form className="register-form" onSubmit={handleSubmit}>
        <img src={accountlogo} alt="account-logo" className="account-logo" />

        <label htmlFor="guest">Full Name </label>
        <input Text={Text}
        name="name" 
        placeholder="Full Name" 
        id="name" />

        <label htmlFor="email">Email </label>
        <input
          type="email"
          placeholder="youremail@email.com"
          id="email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <label htmlFor="password">Password </label>
        <input
          type="password"
          placeholder="password"
          id="password"
          name="password"
          value={pass}
          onChange={(e) => setPass(e.target.value)}
        />
        <button className="signinbutton" 
        onClick={() => {window.location.href='/mainpage'}}
        type="submit">
          Register
        </button>
        <button
          className="account"
          onClick={() => {window.location.href='/login'}}
        >
         Already have an account?
        </button>
        <button className="guest"
        onClick={() => {window.location.href='/guest'}}
        >
          Continue as a Guest?
        </button>
      </form>
    </>
  );
};