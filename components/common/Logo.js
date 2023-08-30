import styles from "./logo.module.css";

const Logo = () => {
  return (
    <>
      <img
        src="/images/nerko-dark.svg"
        alt="Nerko"
        loading="lazy"
        className={styles.word}
      />
      <img
        src="/images/c-logo.svg"
        alt="Nerko"
        loading="lazy"
        className={styles.c}
      />
    </>
  );
};

export default Logo;
