import React, { useRef } from "react";
import styles from "./Form.module.scss";
import emailjs from "@emailjs/browser";

export function Form() {
  const form = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_gmailkub",
        "template_mpo6jc9",
        form.current,
        "user_QlNjQwwc7YRaga5VNsi3a"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <form ref={form} className={styles.form} onSubmit={handleSubmit}>
      <label className={styles.form__label}>Name</label>
      <input
        className={styles.form__input}
        type="text"
        name="from"
        placeholder="Your name"
        required
      />
      <label className={styles.form__label}>Email</label>
      <input
        className={styles.form__input}
        type="email"
        name="email"
        placeholder="Your email"
        required
      />
      <label className={styles.form__label}>Message</label>
      <textarea
        className={styles.form__textarea}
        name="message"
        placeholder="Your message"
        maxLength="300"
        required
      />
      <input className={styles.form__btn} type="submit" value="Send" />
    </form>
  );
}
