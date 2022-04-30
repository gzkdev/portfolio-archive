import styles from "../styles/ContactSection.module.css";

export default function ContactSection() {
  return (
    <section>
      <div className="container">
        <div className={styles.contact__container}>
          <span className={styles.contact__title}>Contact</span>
          <h2 className={styles.contact__heading}>Get in touch</h2>
          <p>
            Whether you have a project You want me to work on or you wanna say
            hi, feel free to reach out to me by clicking the blue button below.
          </p>
          <a href="mailto:ezihegodswill01@gmail.com" className="cta">
            Contact me
          </a>
        </div>
      </div>
    </section>
  );
}
