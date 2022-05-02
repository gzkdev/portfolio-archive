import AppHead from '../components/AppHead'
import Footer from '../components/Footer'
import Header from '../components/Header'
import Loader from '../components/Loader'
import styles from "../styles/Contact.module.css"

export default function Contact() {
    return (
        <>
            <Loader text="Contact" />
            <AppHead />
            <Header />
            <section>
                <div className="container">
                    <div className={styles.contact__container}>
                        <span className={styles.contact__title}>Contact</span>
                        <h2>Have a project you want to talk about? Let me know</h2>
                        <form>
                            <div className={styles.contact__form__box}>
                                <label htmlFor="name">Name</label>
                                <input type="text" name="name" id="name" />
                            </div>

                            <div className={styles.contact__form__box}>
                                <label htmlFor="email">Email </label>
                                <input type="email" name="email" id="email" />
                            </div>

                            <div className={styles.contact__form__box}>
                                <label htmlFor="email">Your story </label>
                                <textarea name="text" id="text" ></textarea>
                            </div>

                            <button type="submit" className="cta">Submit</button>

                        </form>
                    </div>
                </div>
            </section>
            <Footer />
        </>
    )
}
