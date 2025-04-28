import React from "react";
import "./Footer.css";
import youtube_icon from "../../assets/youtube_icon.png";
import twitter_icon from "../../assets/twitter_icon.png";
import instagram_icon from "../../assets/instagram_icon.png";
import facebook_icon from "../../assets/facebook_icon.png";
const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-icons">
        <img src={youtube_icon} alt="" srcSet="" />
        <img src={twitter_icon} alt="" srcSet="" />
        <img src={instagram_icon} alt="" srcSet="" />
        <img src={facebook_icon} alt="" srcSet="" />
      </div>
      <ul>
        <li>
          <a href="#">FAQ</a>
        </li>
        <li>
          <a href="#">Help Centre</a>
        </li>
        <li>
          <a href="#">Account</a>
        </li>
        <li>
          <a href="#">Investor Relations</a>
        </li>
        <li>
          <a href="#">Jobs</a>
        </li>
        <li>
          <a href="#">Ways to Watch</a>
        </li>
        <li>
          <a href="#">Terms of Use</a>
        </li>
        <li>
          <a href="#">Privacy</a>
        </li>
        <li>
          <a href="#">Cookie Preferences</a>
        </li>
        <li>
          <a href="#">Corporate Information</a>
        </li>
        <li>
          <a href="#">Contact Us</a>
        </li>
        <li>
          <a href="#">Speed Test</a>
        </li>
        <li>
          <a href="#">Legal Notices</a>
        </li>
        <li>
          <a href="#">Only on Netflix</a>
        </li>
      </ul>
      <p className="copyright-text">&copy; 2025 Netflix, Inc.</p>
    </div>
  );
};

export default Footer;
