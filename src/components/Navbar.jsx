import React, { useEffect, useState } from 'react'
import {useNavigate} from 'react-router-dom'
import './Navbar.css'

const Navbar = () => {

    const [show, setShow] = useState(false);
    const history = useNavigate();

    const transition = () => {
        if (window.scrollY > 100) {
            setShow(true);
        } else {
            setShow(false);
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', transition);

        return () => window.removeEventListener('scroll', transition);
    }, [])

    return (
        <div className={`navbar ${show ? 'nav-black' : ''}`}>
            <div className='nav-content'>
                {/* <img onClick={() => history('/')} className='netflix-logo' src='https://upload.wikimedia.org/wikipedia/commons/7/7a/Logonetflix.png' alt='netflix' /> */}
                <p onClick={() => history('/')} className='netflix-logo'>ANIFLIX</p>
                <img onClick={() => history('/profile')} className='net-avatar' src='https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png' alt='avatar' />
            </div>
        </div>
    )
}

export default Navbar