import React from "react";
import styles from "./Icon.module.css";

export default function Icon() {
  return (
    <>
      <div className={styles.iconContainer}>
        <div className={styles.icon}>
          <img
            src="/icons/linkedInicon.png"
            alt="linkedIn"
            className={styles.iconImage}
          />
        </div>
        <div className={styles.icon}>
          <img
            src="/icons/facebookicon.png"
            alt="facebook"
            className={styles.iconImage}
          />
        </div>
        <div className={styles.icon}>
          <img
            src="/icons/githubicon.png"
            alt="github"
            className={styles.iconImage}
          />
        </div>
      </div>
    </>
  );
}
