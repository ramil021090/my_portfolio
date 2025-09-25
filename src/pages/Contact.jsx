import React from "react";
import PageNav from "../components/PageNav";
import styles from "./Contact.module.css";

export default function Contact() {
  return (
    <div>
      <section>
        <PageNav />
        <h2>Contact Me</h2>
        <div>
          <div>
            <h3>Get In Touch</h3>
            <p>
              I'm always open to discussing new projects, creative ideas, or
              opportunities to be part of your vision.
            </p>

            <div>
              <span>email@example.com</span>
            </div>

            <div>
              <span>+63 912 345 6789</span>
            </div>

            <div>
              <span>Philippines</span>
            </div>
          </div>

          <div>
            <h3>Send Message</h3>
            <div>
              <div>
                <label>Name</label>
                {/* <input type="text" id="name" placeholder="Your Name"> */}
              </div>

              <div>
                <label for="email">Email</label>
                {/* <input type="email" id="email" placeholder="Your Email"> */}
              </div>

              <div>
                <label for="message">Message</label>
                <textarea id="message" placeholder="Your Message"></textarea>
              </div>

              <button type="submit" class="btn">
                Send Message
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
