import PageNav from "../components/PageNav";
import Footer from "../components/Footer";

import styles from "./Skills.module.css";

export default function Skills() {
  return (
    <>
      <div className={styles.header}>
        <PageNav />
      </div>
      <section className={styles.section}>
        <h2>Skills & Expertise</h2>
        <div className={styles.expertiseContainer}>
          <div className={styles.expertise}>
            <div className={styles.expertiseLogo}>
              <h3>HTML/CSS</h3>
              <span>
                <img src="/logo/html.png" alt="html" />
                <img src="/logo/css.png" alt="css" />
              </span>
            </div>
            <p>
              Creating semantic HTML structure and beautiful CSS designs with
              responsive layouts.
            </p>
          </div>

          <div className={styles.expertise}>
            <div className={styles.expertiseLogo}>
              <h3>JavaScript</h3>
              <span>
                <img src="/logo/javascript.png" alt="javascript" />
              </span>
            </div>

            <p>
              Building interactive web applications with modern JavaScript
              (ES6+) features.
            </p>
          </div>

          <div className={styles.expertise}>
            <div className={styles.expertiseLogo}>
              <h3>React & React Native</h3>
              <span>
                <img src="/logo/react.png" alt="react" />
                <img src="/logo/reactNative.png" alt="reactNative" />
              </span>
            </div>
            <p>
              Developing dynamic user interfaces and mobile applications with
              React ecosystem.
            </p>
          </div>

          <div className={styles.expertise}>
            <div className={styles.expertiseLogo}>
              <h3>Responsive Design</h3>
              <span>
                <img src="/logo/responsive.jpg" alt="responsive" />
              </span>
            </div>

            <p>
              Creating websites that work flawlessly on all device sizes and
              screen resolutions.
            </p>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
