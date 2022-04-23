import React, { useRef } from "react";
import styles from "./Form.module.scss";
import emailjs from "@emailjs/browser";
import AppContext from "../../context";

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
    <AppContext.Consumer>
      {(context) => (
        <form ref={form} className={styles.form} onSubmit={handleSubmit}>
          <label className={styles.form__label}>Name</label>
          <input
            className={
              !context.menuOpened
                ? styles.form__input
                : styles.form__input__notActive
            }
            type="text"
            name="from"
            placeholder="Your name"
            required
          />
          <label className={styles.form__label}>Email</label>
          <input
            className={
              !context.menuOpened
                ? styles.form__input
                : styles.form__input__notActive
            }
            type="email"
            name="email"
            placeholder="Your email"
            required
          />
          <label className={styles.form__label}>Subject</label>
          <input
            className={
              !context.menuOpened
                ? styles.form__input
                : styles.form__input__notActive
            }
            type="subject"
            name="subject"
            placeholder="Subject of message"
          />
          <label className={styles.form__label}>Message</label>
          <textarea
            className={
              !context.menuOpened
                ? styles.form__textarea
                : styles.form__textarea__notActive
            }
            name="message"
            placeholder="Your message"
            maxLength="360"
            required
          />
          <input className={styles.form__btn} type="submit" value="Send" />
        </form>
      )}
    </AppContext.Consumer>
  );
}
