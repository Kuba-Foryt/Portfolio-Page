import React from "react";
import styles from "./Contact.module.scss";
import Heading from "../Heading/Heading";
import Social from "../Social/Social";
import { Form } from "../Form/Form.js";

class Contact extends React.Component {
  render() {
    return (
      <section id="contact" className={styles.contact}>
        <Heading text="get in" span="touch" behind="contact" />
        <Form />
        <Social header={false} />
        <p className={styles.contact__footer}>&copy; 2022 kuba foryt</p>
      </section>
    );
  }
}

export default Contact;
