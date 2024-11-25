import React from 'react';
import "./Profile.css";
import { useNavigate } from 'react-router-dom';

const Profile = () => {
    const navigate = useNavigate();
  return (
    <>
        <div className="profile-container">
            <h1 className='pro-head'>Your Profile</h1>

            <div className="profile-pic">
                <img src="https://static.vecteezy.com/system/resources/thumbnails/019/900/322/small/happy-young-cute-illustration-face-profile-png.png" alt="profile" srcset="" />
            </div>

            <div className="profile-details">
                <label htmlFor='name'>Name :</label>
                <p>Hashir Ansari</p>
                <label htmlFor='email'>Email :</label>
                <p>hashir123@gmail.com</p>
                <label htmlFor='phoneNo'>Phone No. : </label>
                <p>+91 4569744488</p>
            </div>
            
            <div className="pro-btn">
                <button onClick={()=>navigate(-1)}>Go Back</button>
            </div>
        </div>
    </>
  )
}

export default Profile