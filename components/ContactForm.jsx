import styles from "../styles/ContactForm.module.css";

export default function ContactForm() {
  return (
    <form className={styles.contact__form}>
      <div className={styles.contact__form__box}>
        <label htmlFor="name">Name</label>
        <input type="text" name="name" id="name" />
      </div>

      <div className={styles.contact__form__box}>
        <label htmlFor="email">Email</label>
        <input type="email" name="email" id="email" />
      </div>

      <div className={styles.contact__form__box}>
        <label htmlFor="email">Your story</label>
        <textarea name="text" id="text"></textarea>
      </div>

      <button type="submit" className="cta">
        Submit
      </button>
    </form>
  );
}
