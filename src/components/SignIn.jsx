import React, { useRef } from 'react'
import { auth } from '../firebase';
import './SignIn.css'

const SignIn = () => {

  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  const register = (e) => {
    e.preventDefault();

    auth.createUserWithEmailAndPassword(
      emailRef.current.value,
      passwordRef.current.value
    ).then((authUser) => {
      console.log(authUser);
    }).catch(error => {
      console.log(error);
    });
  }

  const signIn = (e) => {
    e.preventDefault();

    auth.signInWithEmailAndPassword(
      emailRef.current.value,
      passwordRef.current.value
    ).then((authUser) => {
      console.log(authUser);
    }).catch(error => {
      console.log(error);
    });
  }

  return (
    <div className='signin'>
      <form>
        <h1>Sign In</h1>
        <input ref={emailRef} type="email" placeholder='Email' />
        <input ref={passwordRef} type="password" placeholder='Password' />
        <button type='submit' onClick={signIn}>Sign In</button>
        <h4><span className='signup-grey'>New To Netflix? </span><span className='signup-white' onClick={register}>Sign Up Now!</span></h4>
      </form>
    </div>
  )
}

export default SignIn