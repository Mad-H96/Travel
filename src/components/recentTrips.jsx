import './recentTrips.css'
import TripsData from './recentTripsData'
import trip1 from '../assets/m2.jpg'
import trip2 from '../assets/t6.jpg'
import trip4 from '../assets/t4.jpg'


const RecentTrips = () => {
  return (
    <>
    <div className="trip">

        <h1>Recent Trips</h1>
        <p>You can discover unique destinations using google maps</p>

        <div className='tripcard'>

            <TripsData
            
            image={trip1}
            heading="Trip to Maldives"
            para="
            The Maldives, an archipelago nation in the Indian Ocean, 
            is renowned for its stunning turquoise waters, powdery white 
            beaches, and vibrant coral reefs. Comprising 26 atolls and over 
            1,000 coral islands, it's a tropical paradise ideal for diving, 
            snorkeling, and luxury getaways. The nation's overwater bungalows, 
            rich marine life, and crystalline lagoons make it a top destination 
            for relaxation and aquatic adventures."
            />

            <TripsData
            
            image={trip2}
            heading="Trip to Japan"
            para="
            Japan, an East Asian island nation, is a captivating blend of ancient
            traditions and cutting-edge modernity. From its iconic cherry blossoms
            and revered temples to bustling cities and technological innovations, 
            Japan offers a rich cultural tapestry. Its cuisine, including sushi and 
            ramen, is celebrated worldwide. With a deep respect for heritage and a
            penchant for innovation, Japan remains a unique fusion of the past and
            the future."
            />


            <TripsData
            
            image={trip4}
            heading="Trip to Italy"
            para="
            Italy, a European gem, boasts a rich tapestry of art, history, and culinary
            delights. Home to iconic landmarks like the Colosseum, leaning tower of
            Pisa, and the art treasures of Florence, Italy is a cultural haven. Its 
            diverse regions offer breathtaking landscapes, from the rolling hills of
            Tuscany to the stunning Amalfi Coast. Renowned for pasta, pizza, and
            gelato, Italian cuisine is a savory delight. With a blend of ancient
            history and modern sophistication, Italy captures the heart of all
            who visit."
            />

        </div>
    </div> 
    </>
  )
}

export default RecentTrips