import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import ProductViewer from './components/ProductViewer.jsx'
import gsap from 'gsap';
import { ScrollTrigger , SplitText } from 'gsap/all';
gsap.registerPlugin(ScrollTrigger)
gsap.registerPlugin(SplitText) 


const App = () => {
  return (
    <div>
        <Navbar />
        <Hero />
        <ProductViewer />
    </div>
  )
}

export default App
