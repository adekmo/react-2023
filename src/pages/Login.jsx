import React, { useState } from 'react'
import SignIn from '../components/SignIn';
import './Login.css'

const Login = () => {

    const [sign, setSign] = useState(false);

    return (
        <div className='login'>
        <div className='login-bg'>
            {/* <img className='login-logo' src='https://upload.wikimedia.org/wikipedia/commons/7/7a/Logonetflix.png' alt='' /> */}
            <p className='login-logo'>ANIFLIX</p>
            <button onClick={() => setSign(true)} className='login-btn'>Sign In</button>
            <div className='login-gradient' />
        </div>

        <div className='login-body'>
            {sign ? (<SignIn />) : (<>
                <h1>The Latest, and Most Popular Anime.</h1>
                <h2>Watch anywhere, watch anytime</h2>
                <h3>Ready to watch? Enter your email ti create or restart your membership</h3>

                <div className='input'>
                    <form>
                        <input type="email" placeholder='Email Address' />
                        <button onClick={() => setSign(true)} className='btn-started'>GET STARTED</button>
                    </form>
                </div>
            </>)}
        </div>
    </div>
    )
}

export default Login