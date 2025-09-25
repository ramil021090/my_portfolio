import React from "react";
import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer>
      <div>
        <p>&copy; 2023 Ramil G. Villahermosa. All Rights Reserved.</p>

        <div class="social-links">
          <a href="#">
            <i class="fab fa-facebook"></i>
          </a>
          <a href="#">
            <i class="fab fa-twitter"></i>
          </a>
          <a href="#">
            <i class="fab fa-linkedin"></i>
          </a>
          <a href="#">
            <i class="fab fa-github"></i>
          </a>
        </div>
      </div>
    </footer>
  );
}
