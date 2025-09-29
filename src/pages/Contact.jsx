import React from "react";
import PageNav from "../components/PageNav";
import styles from "./Contact.module.css";

export default function Contact() {
  return (
    <div>
      <header>
        <PageNav />
      </header>
      <section>
        <h2>Contact Me</h2>
        <div className={styles.details}>
          <div>
            <h3>Get In Touch</h3>
            <p>
              I'm always open to discussing new projects, creative ideas, or
              opportunities to be part of your vision.
            </p>

            <div>
              <a href="https://www.gmail.com">
                <span>villahermosaramil2019@gmail.com</span>
              </a>
            </div>

            <div>
              <span>+63 9237003163</span>
            </div>

            <div>
              <span>Philippines</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
