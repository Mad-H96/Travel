import Destination from "../components/destination"
import Footer from "../components/footer"
import Hero from "../components/hero"
import RecentTrips from "../components/recentTrips"


const Home = () => {
  return (
    <>
    <Hero
    
    hName = "hero"
    hImg = "https://wallpaperaccess.com/full/1431622.jpg"
    hTitle = "Your Journey Your Story"
    HText = "Find & Visit Your Dream Destinations"
    btnLink ="Travel Plan"
    aBtn = "show"

    />

    <Destination/>
    <RecentTrips/>
    
    </>
  )
}

export default Home