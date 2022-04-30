import AppHead from '../components/AppHead'
import ContactSection from '../components/ContactSection'
import Header from '../components/Header'
import HeroSection from '../components/HeroSection'
import Loader from '../components/Loader'
import ProjectsSection from '../components/ProjectsSection'

export default function Home() {
  return (
    <>
      <Loader text="Holla 👋🏾" />
      <AppHead />
      <Header />
      <HeroSection />
      <ProjectsSection />
      <ContactSection />
    </>

  )
}
