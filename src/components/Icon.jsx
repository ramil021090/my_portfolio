import styles from "./Icon.module.css";

export default function Icon() {
  return (
    <>
      <div className={styles.iconContainer}>
        <div className={styles.icon}>
          <a
            href="https://www.linkedin.com/feed/?legoTrackingToken=c34ZpnFFkTBxr71PqmgCc2UMfmlOrSdjtOoZsC5gr6litOoZp6Zdr6litOoVejAVejRApnhPpnlNpl9JtmUCjAZ9l4BjjR0Zuk9OpmhOjThBpShFtOpQrClQrCBvsClHpmlPnS9LqBYOtChxs6xzrDlxr3RAinhBpShFtOoMfmVLqnhFsSZgt6lDp6BT9z0Kc3RBsCZzkT9D9zROol1Ipl9OpOoZp6Zdr6lisCsCc3RKrSBQqndLk71RrT9D9zAVejAVfmhBt7dBtn5BkCRRjD1RrT9D9DhItm5CpmgZp4BMtmZOpOpejQBkildfk3RVgD9Bp79L9DhItm5CpmgZp4BQrClJpSlP9DhKpnhKqjRAinhLr7cCt6NRompBp3RAinhRrTBxr2oOtChxs6xzrDlxr3RBrm5epmtxs2pEt7tLsCsZp4BMs64CdjoQcz0Pfmh9rCZFsT9BtyoUd3sSdzgRczgNfmh9tioQpmgSc3wMdzByoCcJoCpyoyQQozgQbjwQejAJcC8Ooz8PdzgZp4BQu6lQrCZz"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="/icons/linkedInicon.png"
              alt="linkedIn"
              className={styles.iconImage}
            />
          </a>
        </div>
        <div className={styles.icon}>
          <a
            href="https://www.facebook.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="/icons/facebookicon.png"
              alt="facebook"
              className={styles.iconImage}
            />
          </a>
        </div>
        <div className={styles.icon}>
          <a
            href="https://github.com/ramil021090"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="/icons/githubicon.png"
              alt="github"
              className={styles.iconImage}
            />
          </a>
        </div>
      </div>
    </>
  );
}
