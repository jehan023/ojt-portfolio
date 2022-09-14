import React from 'react'

import DP from '../images/JHpic.JPG';
import { Image } from 'react-bootstrap';
import { FaFacebook, FaInstagram, FaGithub } from 'react-icons/fa';
import { TbBrandGmail } from "react-icons/tb";

function Profile() {
    return (
        <div className='profile-container'>
            <Image src={DP} alt='profile pic' className='profile-image' roundedCircle />

            <div className='px-4 py-2'>
                <p className='fw-bold h3 profile-name'>Jehan L. Hadjisaid</p>
                <p className='profile-course'>Bachelor of Science in Computer Engineering</p>
                <p className='profile-course'>2019-05283-MN-0</p>
                <div className='contact-links d-flex'>
                    <a href='https://www.facebook.com/Jehan.023/' target="_blank" rel="noreferrer"><FaFacebook /> </a>
                    <a href='https://www.instagram.com/jehanhadji23/' target="_blank" rel="noreferrer"><FaInstagram /> </a>
                    <a href='mailto:jehanhadjisaid.023@gmail.com' target="_blank" rel="noreferrer"><TbBrandGmail /> </a>
                    <a href='https://github.com/jehan023' target="_blank" rel="noreferrer"><FaGithub /> </a>
                </div>
            </div>

        </div>
    );
}

export default Profile;