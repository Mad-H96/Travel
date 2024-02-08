import Hero from "../components/hero"
import aboutImg from "../assets/8.jpg"
import Aboutus from "../components/aboutus"


const About = () => {
    return (
      <>

    <Hero

    hName = "hero"
    hImg = {aboutImg}
    hTitle = "About"
    aBtn= "hide"
    hImgCls = "cSize"
    />

    <Aboutus/>
      
      </>
    )
  }
  
  export default About