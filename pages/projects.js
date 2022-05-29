import AppHead from '../components/AppHead'
import ContactSection from '../components/ContactSection'
import Footer from '../components/Footer'
import Header from '../components/Header'
import Loader from '../components/Loader'
import WorkSection from '../components/WorkSection'

export default function Work() {
    return (
        <>
            <Loader text="Projects" chinese="项目" />
            <AppHead />
            <Header />
            <WorkSection />
            <ContactSection />
            <Footer />
        </>
    )
}
