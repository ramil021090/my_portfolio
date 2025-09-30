import React from "react";
import styles from "./RotatingImages.module.css";
export default function RotatingImages() {
  return (
    <>
      <div className={styles.carouselContainer}>
        <div className={styles.carousel}>
          <div className={styles.image}>
            <img src="./logo/css.png" alt="css" />
          </div>
          <div className={styles.image}>
            <img src="./logo/github.png" alt="github" />
          </div>
          <div className={styles.image}>
            <img src="./logo/html.png" alt="html" />
          </div>
          <div className={styles.image}>
            <img src="./logo/react.png" alt="react" />
          </div>
          <div className={styles.image}>
            <img src="./logo/reactnative.png" alt="reactnative" />
          </div>
          <div className={styles.image}>
            <img src="./logo/javascript.png" alt="javascript" />
          </div>
        </div>
      </div>
    </>
  );
}
