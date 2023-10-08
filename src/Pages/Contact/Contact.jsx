import { TbBrandNetflix } from "react-icons/tb";
import React from "react";

import ContactForm from "./ContactForm/ContactForm";

import styles from "./Contact.module.css";

const Contact = () => {
  return (
    <div className={styles.container}>
      <h1>Contact us</h1>
      <div className={styles.itemContainer}>
        <div className={styles.brand}>
          <TbBrandNetflix />
          <h4>TextFlix</h4>
        </div>
        <ContactForm />
      </div>
    </div>
  );
};

export default Contact;
