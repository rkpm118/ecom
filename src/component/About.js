 
import HeroSection from './HeroSection'
import { useProductData } from '../context/product'

function About() {
  let x=useProductData()
  return (
    <> 
    <h1>{x}</h1>
    <HeroSection name="E Commerce"/>
    </>
    
  )
}

export default About