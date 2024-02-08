import "./destination.css"
import { Component } from "react"
import Destinationdata from "./destinationdata"
import img1 from '../assets/m1.jpg'
import img2 from '../assets/m2.jpg'
import img3 from '../assets/i3.jpg'
import img4 from '../assets/i4.jpg'

const Destination = () => {
  return (
    <>
<div className="destination">
  <div>
    <h1>Popular Destinations</h1>
    <p>Tours give you the opportunity to see a lot, Within a time frame</p>
    </div>  
<br />


<Destinationdata
className="des-text"

heading="White Sand Beaches, maldives"
text="The Maldives, an idyllic tropical paradise in the Indian Ocean, is an 
archipelago of 26 atolls known for its breathtaking turquoise waters, pristine
 white-sand beaches, and vibrant coral reefs. It's a haven for honeymooners, divers,
  and sun-seekers, offering luxurious overwater bungalows, world-class diving spots 
  teeming with marine life, and a serene, laid-back atmosphere. The Maldives captivates
   with its natural beauty, rich marine biodiversity, and an inviting blend of 
   relaxation and adventure."

   image1={img1}
   image2={img2}

/>

<Destinationdata
className="des-text-reverse"

heading="Visit Wonderful Landscapes, Swisterland"
text="Switzerland, a land of stunning alpine landscapes, is famed for its majestic mountains,
picturesque lakes, and charming villages. Renowned for precision engineering, Swiss watches, 
and delectable chocolates, it's a blend of natural beauty and technological innovation. With a 
rich cultural tapestry, including multilingualism and a deep appreciation for the arts, Switzerland 
offers outdoor adventures like skiing, hiking, and mountaineering alongside a high quality of life and 
a strong commitment to sustainability and neutrality."

   image3={img3}
   image4={img4}

/>
    
    </div>
    </>
  )
}

export default Destination