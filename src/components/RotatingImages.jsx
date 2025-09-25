import React from "react";
import styles from "RotatingImages.module.css";
export default function RotatingImages() {
  return (
    <div>
      <div className={styles.container}>
        <ul className={styles.imageContainer}>
          <li className={styles.image}>
            <img src="/logo/vscode.jpg" alt="vscode" />
          </li>
          <li className={styles.image}>
            <img src="/logo/github.png" alt="github" />
          </li>
          <li className={styles.image}>
            <img src="/logo/html.png" alt="html" />
          </li>
          <li className={styles.image}>
            <img src="/logo/javascript.png" alt="javascript" />
          </li>
          <li className={styles.image}>
            <img src="/logo/react.png" alt="react" />
          </li>
          <li className={styles.image}>
            <img src="/logo/reactNative.png" alt="reactNative" />
          </li>
        </ul>
      </div>
    </div>
  );
}
