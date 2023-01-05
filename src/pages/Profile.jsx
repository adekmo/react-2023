import React from 'react'
import Navbar from '../components/Navbar'
import { useSelector } from 'react-redux';
import './Profile.css'
import { selectUser } from '../features/userSlice';
import { auth } from '../firebase';

const Profile = () => {
    const user = useSelector(selectUser);
  return (
    <div className='profile'>
        <Navbar />

        <div className="profile-body">
            <h1>Edit Profile</h1>
            <div className="profile-info">
                <img src="https://images.pexels.com/photos/4808517/pexels-photo-4808517.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="avatar" />
                {/* <p>ANIFLIX</p> */}
                <div className="profile-details">
                    <h2>{user.email}</h2>
                    <div className="profile-plan">
                        <h3>Plans</h3>
                        <button onClick={() => auth.signOut()} className='profile-signout'>Sign Out</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Profile