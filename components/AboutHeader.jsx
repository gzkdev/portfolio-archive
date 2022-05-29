import styles from "../styles/About.module.css";

export default function AboutHeader({ data }) {
  return (
    <div className="about__intro">
      <div className={styles.about__thumbnail}></div>
      <h3 className={styles.about__name}>Godswill Ezihe</h3>
      <div className={styles.about__details}>
        <small>Frontend software engineer</small>
        <button>
          Follow <span>You&apos;ve been tricked! 😅</span>
        </button>
      </div>
      <p className={styles.about__essay}>
        First of all, I&apos;m human then a software engineer. I love to learn,
        break and build stuff on the web. Curiosity killed the cat but it turned
        me into a software engineer.
      </p>
      <div className={styles.about__list__container}>
        <span className={styles.about__title}>{data.title}</span>
        <ul className={styles.about__opportunities}>
          {data.list.map((item) => (
            <>
              <li>{item}</li>
            </>
          ))}
        </ul>
      </div>
    </div>
  );
}
