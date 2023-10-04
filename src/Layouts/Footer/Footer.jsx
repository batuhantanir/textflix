import React from "react";
//React router dom
import { Link } from "react-router-dom";
//REACT ICON
import { TbBrandNetflix } from "react-icons/tb";
import {
  AiFillFacebook,
  AiFillInstagram,
  AiFillLinkedin,
  AiFillTwitterSquare,
} from "react-icons/ai";
import { AiOutlineCopyrightCircle } from "react-icons/ai";
//CSS
import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footerContainer}>
      <div>
        <div className={styles.companyName}>
          <TbBrandNetflix />
          <h4>Textflix</h4>
        </div>
        <ul className={styles.nav}>
          <li><Link to='/'>Home</Link></li>
          <li><Link to='/about'>About</Link></li>
          <li><Link to='/contact' >Contact</Link></li>
        </ul>
        <ul className={styles.socialMedia}>
          <li>
            <Link to='https://www.instagram.com/36batu' target="_blank">
              <AiFillInstagram />
            </Link>
          </li>
          <li>
            <Link to='https://www.facebook.com' target="_blank">
              <AiFillFacebook />
            </Link>
          </li>
          <li>
            <Link to='https://www.x.com' target="_blank">
              <AiFillTwitterSquare />
            </Link>
          </li>
          <li>
            <Link to='https://www.linkedin.com/in/batuhan-tanir' target="_blank">
              <AiFillLinkedin />
            </Link>
          </li>
        </ul>
      </div>
      <div className={styles.copyright}>
        <p>
          Copyright <AiOutlineCopyrightCircle /> Batuhan TANIR
        </p>
      </div>
    </footer>
  );
};

export default Footer;
