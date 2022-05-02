import AppHead from '../components/AppHead'
import ContactForm from '../components/ContactForm'
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
                        <ContactForm />
                    </div>
                </div>
            </section>
            <Footer />
        </>
    )
}
