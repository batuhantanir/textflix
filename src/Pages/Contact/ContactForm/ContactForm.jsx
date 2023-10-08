import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";

import styles from "./ContactForm.module.css";

const ContactForm = () => {
  const formik = useFormik({
    initialValues: {
      fullName: "",
      email: "",
      message: "",
    },
    validationSchema: Yup.object({
      fullName: Yup.string().required("Required"),
      email: Yup.string().email("Invalid email address").required("Required"),
      message: Yup.string().required("Required"),
    }),
    onSubmit: (values,e) => {
      console.log("Form submitted:", values);
      // Handle form submission here
    },
  });
  return (
    <form className={styles.container} onSubmit={formik.handleSubmit}>
      <div className={styles.input} id={styles.fullName}>
        <label htmlFor="fullName">Full name:</label>
        <input
          type="text"
          id="fullName"
          name="fullName"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.fullName}
        />
        {formik.touched.fullName && formik.errors.fullName ? (
          <div>{formik.errors.fullName}</div>
        ) : null}
      </div>

      <div className={styles.input} id={styles.email}>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.email}
        />
        {formik.touched.email && formik.errors.email ? (
          <div>{formik.errors.email}</div>
        ) : null}
      </div>

      <div className={styles.input} id={styles.message}>
        <label htmlFor="message">Message:</label>
        <textarea
          id="message"
          name="message"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.message}
        />
        {formik.touched.message && formik.errors.message ? (
          <div>{formik.errors.message}</div>
        ) : null}
      </div>

      <button className={styles.submit} type="submit">Submit</button>
    </form>
  );
};

export default ContactForm;
