import React from 'react';
import './Footer.css'; // Import CSS file for styling
import { FaFacebook, FaTwitter, FaInstagram, FaTiktok, FaLinkedin } from 'react-icons/fa'; // Fixed TikTok icon import

const Footer = () => {
  return (
    <footer className="footer">
      
        <div className="introF">
          <p>Connect with us on our socials</p>
        </div>

      <div className="social-icons">
        <a href="https://www.facebook.com/profile.php?id=61566820949001#" target="_blank" rel="noopener noreferrer" className="social-icon">
          <FaFacebook />
          <span>Facebook</span>
        </a>
        <a href="https://x.com/flourishhub4" target="_blank" rel="noopener noreferrer" className="social-icon">
          <FaTwitter />
          <span>Twitter</span>
        </a>
        <a href="https://www.instagram.com/flourish_hub_uganda/" target="_blank" rel="noopener noreferrer" className="social-icon">
          <FaInstagram />
          <span>Instagram</span>
        </a>
        <a href="https://www.tiktok.com/@flourish.hub0?is_from_webapp=1&sender_device=pc" target="_blank" rel="noopener noreferrer" className="social-icon">
          <FaTiktok />
          <span>TikTok</span>
        </a>
        <a href="https://www.linkedin.com/company/flourish-hub/" target="_blank" rel="noopener noreferrer" className="social-icon">
          <FaLinkedin />
          <span>LinkedIn</span>
        </a>

        {/* email  */}
        {/* <a href="mailto:contact@example.com" className="social-icon">
          <MdContactMail />
          <span>Email</span>
        </a> */}
      </div>
    </footer>
  );
};

export default Footer;
