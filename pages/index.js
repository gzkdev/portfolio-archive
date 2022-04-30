import AppHead from '../components/AppHead'
import Header from '../components/Header'
import HeroSection from '../components/HeroSection'
import Loader from '../components/Loader'

export default function Home() {
  return (
    <>
      <Loader text="Holla 👋🏾" />
      <AppHead />
      <Header />
      <HeroSection />
    </>

  )
}
