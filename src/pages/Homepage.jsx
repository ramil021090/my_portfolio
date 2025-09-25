import { Link } from "react-router-dom";
import PageNav from "../components/PageNav";
import Footer from "../components/Footer";
import styles from "./Homepage.module.css";

export default function Homepage() {
  return (
    <>
      <div className={styles.header}>
        <PageNav />
      </div>
      <header className={styles.container}>
        <h1>Ramil G. Villahermosa</h1>
        <h2>Frontend Web Developer</h2>
        <p>
          Creating responsive and user-friendly websites with moder technologies
        </p>
      </header>
      <footer>
        <Footer />
      </footer>
    </>
  );
}
