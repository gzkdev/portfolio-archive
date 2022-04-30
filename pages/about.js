import AboutSection from '../components/AboutSection'
import AppHead from '../components/AppHead'
import ContactSection from '../components/ContactSection'
import Footer from '../components/Footer'
import Header from '../components/Header'
import Loader from '../components/Loader'

export default function About() {
    return (
        <>
            <Loader text="About" />
            <AppHead />
            <Header />
            <AboutSection />
            <ContactSection />
            <Footer />
        </>
    )
}
