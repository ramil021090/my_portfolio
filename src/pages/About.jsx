import PageNav from "../components/PageNav";
import Footer from "../components/Footer";
import ProfilePic from "../components/ProfilePic";
import styles from "./About.module.css";

export default function About() {
  return (
    <>
      <div className={styles.header}>
        <PageNav />
      </div>
      <section>
        <h2>About Me</h2>
        <div className={styles.profileContainer}>
          <div className={styles.profile}>
            <ProfilePic />

            <div>
              <span>
                <strong>Age:</strong> 35 years old
              </span>
            </div>
            <div>
              <span>
                <strong>Status:</strong> Single
              </span>
            </div>
            <div>
              <span>
                <strong>Education:</strong> Samson Polytechnical College
              </span>
            </div>
            <div>
              <span>
                <strong>Course:</strong> Computer Programming NCIV
              </span>
            </div>
            <div>
              <span>
                <strong>Year:</strong> 2017
              </span>
            </div>
          </div>

          <div className={styles.description}>
            <p>
              I am a passionate web developer with expertise in HTML, CSS,
              JavaScript, TypeScript, React, and React Native. I specialize in
              creating responsive and user-friendly websites that provide
              excellent user experiences.
            </p>
            <p>
              I am continuously learning new technologies and improving my
              coding skills to stay current with industry trends. I enjoy
              collaborative projects and am always open to new opportunities in
              the tech field.
            </p>
            <p>
              My strengths include creativity, problem-solving, and teamwork.
              I'm excited to connect with fellow developers and professionals in
              the tech industry.
            </p>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
