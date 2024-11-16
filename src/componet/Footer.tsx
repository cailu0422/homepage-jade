import React from 'react';
import facebookLogo from '../assets/icons/facebook.svg';
import instagramLogo from '../assets/icons/instagram.svg';
import twitterLogo from '../assets/icons/twitter.svg';

const Footer: React.FC<{}> = () => {
  return (
    <footer>
      <a href="#">
        <img src={facebookLogo} alt="facebook" />
      </a>
      <a href="#">
        <img src={instagramLogo} alt="instagram" />
      </a>
      <a href="#">
        <img src={twitterLogo} alt="twitter" />
      </a>
    </footer>
  );
};

export default Footer;
