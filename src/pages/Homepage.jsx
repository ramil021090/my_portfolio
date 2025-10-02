import { Link } from "react-router-dom";
import PageNav from "../components/PageNav";
import Footer from "../components/Footer";
import Icon from "../components/Icon";
import RotatingImages from "../components/RotatingImages";
import styles from "./Homepage.module.css";

export default function Homepage() {
  return (
    <>
      <header>
        <PageNav />
      </header>
      <div className={styles.icon}>
        <Icon />
      </div>
      <section className={styles.container}>
        <h1 className={styles.name}>Ramil G. Villahermosa</h1>
        <h2 className={styles.title}>Frontend Web Developer</h2>
        <p>
          Creating responsive and user-friendly websites with modern
          technologies
        </p>
        <RotatingImages />
      </section>
      <button className={styles.button}>
        <h4>Get in touch</h4>
      </button>
      <footer>
        <Footer />
      </footer>
    </>
  );
}
