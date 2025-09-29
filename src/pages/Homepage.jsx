import { Link } from "react-router-dom";
import PageNav from "../components/PageNav";
import Footer from "../components/Footer";
import styles from "./Homepage.module.css";
import RotatingImages from "../components/RotatingImages";

export default function Homepage() {
  return (
    <>
      <header>
        <PageNav />
      </header>
      <section>
        <div>
          <h1>Ramil G. Villahermosa</h1>
          <h2>Frontend Web Developer</h2>
          <p>
            Creating responsive and user-friendly websites with moder
            technologies
          </p>
        </div>
        <RotatingImages />
      </section>
      <footer>
        <Footer />
      </footer>
    </>
  );
}
