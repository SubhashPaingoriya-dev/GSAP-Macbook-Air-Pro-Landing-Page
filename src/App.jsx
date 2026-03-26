import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import ProductViewer from './components/ProductViewer.jsx'
import gsap from 'gsap';
import { ScrollTrigger , SplitText } from 'gsap/all';
import Showcase from './components/Showcase.jsx';
import Features from './components/Features.jsx';
import Footer from './components/Footer.jsx';
gsap.registerPlugin(ScrollTrigger)
gsap.registerPlugin(SplitText) 


const App = () => {
  return (
    <div>
        <Navbar />
        <Hero />
        <ProductViewer />
        <Showcase />
        {/* <Performance />
        <Features />
        <Footer /> */}
    </div>
  )
}

export default App
