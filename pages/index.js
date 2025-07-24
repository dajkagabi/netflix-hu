import Head from 'next/head'
import Header from '../components/Header'
import HeroSection from '../components/HeroSection'
import PopularReasons from '../components/PopularReasons'
import MovieRow from '../components/MovieRow'
import FAQSection from '../components/FAQSection'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <div className="min-h-screen bg-black">
      <Head>
        <title>Netflix Magyarország</title>
      </Head>

      <Header />
      <HeroSection />
      <MovieRow />
      <PopularReasons />
      <FAQSection />
      <Footer />
    </div>
  )
}