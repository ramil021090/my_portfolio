import React from "react";
import { Link } from "react-router-dom";
import styles from "./ProfilePic.module.css";
export default function ProfilePic() {
  return (
    <div>
      <Link>
        <img
          src="/profilePic.jpg"
          alt="profilePic"
          className={styles.profile}
        />
      </Link>
    </div>
  );
}
