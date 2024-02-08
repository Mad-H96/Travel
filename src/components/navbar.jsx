import "./navbar.css";
import { Menuitems } from "./menuitems";
import { Component } from "react";

 class Navbar extends Component {


    state = {clicked:false};
    handleClick = () => {
        this.setState({clicked : !this.state.clicked})
    }


render(){

  return (
    <>
    <nav className="navbarItems">
         <h1 className="navbarLogo">Trip<span className="logoSpan">Tip</span></h1>

            <div className="menuIcons" onClick={this.handleClick}>

                    <i className={this.state.clicked ? "fas fa-times" : "fas fa-bars"}></i>
            </div>

         <ul className={this.state.clicked ? "navbarList active" : "navbarList"}>

        {Menuitems.map((item, index) => {
            return (
                <>
                <li key={index}><a  className={item.cName} href={item.url}><i className={item.icon}></i>{item.title}</a></li>
                </>
            )
        })}

        <button>Sign Up</button>
         </ul>
    </nav>
    </>
  )
}

}

export default Navbar