import React from 'react';
import { BsLinkedin } from 'react-icons/bs';
import { FaGithub } from 'react-icons/fa';
import { FaFacebookF } from 'react-icons/fa'

const HeaderSocials = () => {
  return (
    <div className="header__socials">
      <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer" ><BsLinkedin /></a>
      <a href="https://github.com/Asumu22" target="_blank" rel="noreferrer" ><FaGithub /></a>
      <a href="https://facebook.com/ebesong.as" target="_blank" rel="noreferrer" ><FaFacebookF /></a>
    </div>
  )
}

export default HeaderSocials