import { Component } from "react"
import "./destination.css"

class Destinationdata extends Component{
render(){
    return(
        
        <div className="first-des">
        <div className={this.props.className}>
        
        <p> <h2>{this.props.heading}</h2> <br/>{this.props.text}</p>
  
          <br/>
  
          <div className="img-dev">
  
          <img src={this.props.image1} />
          <img src={this.props.image2} />
  
          </div>

          <div className="img-dev">
  
          <img src={this.props.image3} />
          <img src={this.props.image4} />

  </div>
  
        </div>
      </div>


    )
    }
}


export default Destinationdata