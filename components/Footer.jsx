import React from 'react';
import { AiFillInstagram, AiOutlineGithub,AiOutlineLinkedin} from 'react-icons/ai';

const Footer = () => {
  return (
    <div className="footer-container">
      <p> © 2022 Ease Listening All rights reserverd</p>
      <p className="icons">
      <div>
        <a href='https://github.com/Blackwolf143'>
        <AiOutlineGithub color='green'/>
        </a>
      </div>
      <div>
        <a href='hhttps://www.linkedin.com/in/avinash-kumar-a76a171a2/'>
        <AiOutlineLinkedin color='blue'/>
        </a>
      </div>
      <div>
        <a href='https://www.instagram.com/avinashkumarsingh4074/' >
        <AiFillInstagram  color='red'/>
        </a>
      </div>
      </p>
    </div>
  )
}

export default Footer