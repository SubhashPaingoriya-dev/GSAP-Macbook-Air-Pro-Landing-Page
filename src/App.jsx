import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import ProductViewer from './components/ProductViewer.jsx'
import gsap from 'gsap';
import { ScrollTrigger , SplitText } from 'gsap/all';
import Showcase from './components/Showcase.jsx';
gsap.registerPlugin(ScrollTrigger)
gsap.registerPlugin(SplitText) 


const App = () => {
  return (
    <div>
        <Navbar />
        <Hero />
        <ProductViewer />
        <Showcase />
    </div>
  )
}

export default App
