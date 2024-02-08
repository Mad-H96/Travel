import './recentTrips.css'


const TripsData = (props) => {
  return (
    <>
    <div className='t-card'>

        <div className="img">
        <img src={props.image} alt="image" />
        </div>
        <h4>{props.heading}</h4>
        <p>{props.para}</p>

    </div>
    </>
  )
}

export default TripsData