import AppHead from '../components/AppHead'
import Footer from '../components/Footer'
import Header from '../components/Header'
import styles from "../styles/Contact.module.css"
import Loader from '../components/Loader'

export default function contact() {
    return (
        <>
            <Loader text="Contact" />
            <AppHead />
            <Header />
            <section>
                <div className="container">
                    <form>
                        <span className={styles.contact__title}>Contact</span>
                        <h2>Jake</h2>
                    </form>
                </div>
            </section>
            <Footer />
        </>
    )
}
