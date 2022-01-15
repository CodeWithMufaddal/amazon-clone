import React, { useState } from 'react'
import './Login.css'
import { Link, useHistory } from "react-router-dom";
import { auth } from './firebase.js';

function Login() {

   const history = useHistory();
   const [Name, setName] = useState('');
   const [email, setEmail] = useState('');
   const [password, setPassword] = useState('');

   const signIn = e => {
      e.preventDefault();

      auth
         .signInWithEmailAndPassword(email, password)
         .then(auth => {
            history.push('/')
         })
         .catch(error => alert(error.message))
   }

   const register = e => {
      e.preventDefault();

      auth
         .createUserWithEmailAndPassword(email, password)
         .then((auth) => {
            // it successfully created a new user with email and password
            console.log(auth)
            if (auth) {
               history.push('/')

            }
         })
         .catch(error => alert(error.message))
   }

   return (
      <div className="login">
         <Link to='/'>
            <img
               className="login__logo"
               src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png'
            />
         </Link>
         <div className="login__container">
            <h1>Sign-in</h1>
            <form>
               <h5>Name</h5>
               <input type='text' value={Name} onChange={e => setName(e.target.value)} />
               <h5>E-mail</h5>
               <input type='email' value={email} onChange={e => setEmail(e.target.value)} />
               <h5>Password</h5>
               <input type='password' value={password} onChange={e => setPassword(e.target.value)} />
               <button type='submit' onClick={signIn}
                  className="btn login__signInButton"  >Sign in</button>
            </form>
            <p>
               By Sign in you agree to the 'AMAZON FACK CLONE' <a href="#">Conditions of use & Sale</a>. Please
               see Our <a href="#">Privacy Notice</a>, our <a href="#">Cookies Notice </a>
               and Our Interest-Based Ads
            </p>
            <button onClick={register}
               className="btn login__registerButton">Create Your Amazon Account</button>

         </div>
      </div>
   )
}

export default Login