import styles from "../styles/HeroSection.module.css";

export default function HeroSection() {
  return (
    <section className={styles.hero}>
      <div className="container">
        <div className={styles.hero__container}>
          <h1 className={styles.hero__heading}>
            <span>I&apos;m Godswill Ezihe</span>
            <span>I build Software that runs on web browsers</span>
          </h1>
          <p>
            I&apos;m a Front-end software engineer currently based in Nigeria.
            My focus is on building scalable, accessible and performant web
            applications that people love to interact with. Although I`m not a
            professional designer, sometimes you will find me tinkering on
            Figma. My love for Front-end engineering lies in learning and
            building applications people will actually love to use.
          </p>
          <a className="cta" href="mailto:ezihegodswill01@gmail.com">
            Get in touch
          </a>
        </div>
      </div>
    </section>
  );
}
