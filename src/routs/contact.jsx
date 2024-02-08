import Hero from "../components/hero"
import aboutImg from "../assets/7.jpg"
import ContactFrm from "../components/contactFrm"

const Contact = () => {
    return (
      <>

    <Hero
    
    hName = "hero"
    hImg = {aboutImg}
    hTitle = "Contact"
    aBtn= "hide"
    hImgCls = "cSize"

    />
      <ContactFrm/>
      </>
    )
  }
  
  export default Contact