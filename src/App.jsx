import Cta from "./components/Cta"
import Features from "./components/Features"
import Footer from "./components/Footer"
import Header from "./components/Header"
import Hero from './components/Hero'
import Newsletter from "./components/Newsletter"
import Testimonials from "./components/Testimonials"
import Testimony from "./Testimonies.json"

function App() {
 
  return (
    <div className='bg-FDarkBlue2 min-h-screen'>
      <Header />
      <Hero />
      <Features />
      <Cta />
      <Testimonials testimonies={Testimony} />
      <Newsletter />
      <Footer />
    </div>
  )
}

export default App
