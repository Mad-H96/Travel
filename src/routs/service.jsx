import Hero from "../components/hero"
import aboutImg from "../assets/6.jpg"
import RecentTrips from "../components/recentTrips"

const Service = () => {
    return (
      <>

    <Hero
    
    hName = "hero"
    hImg = {aboutImg}
    hTitle = "Service"
    aBtn= "hide"
    hImgCls = "cSize"
    />
      <RecentTrips/>
      </>
    )
  }
  
  export default Service