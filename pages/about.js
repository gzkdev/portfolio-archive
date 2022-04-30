import AppHead from '../components/AppHead'
import Header from '../components/Header'
import Loader from '../components/Loader'

export default function About() {
    return (
        <>
            <Loader text="About" />
            <AppHead />
            <Header />
        </>
    )
}
