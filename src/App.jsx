import Navbar from "./components/navbar.jsx" ;
import {Route, Routes} from "react-router-dom";
import Home from './routs/home.jsx';
import About from './routs/about.jsx';
import Service from './routs/service.jsx';
import Contact from './routs/contact.jsx';
import Footer from "./components/footer.jsx";


function App() {


  return (
    <>
  <Navbar/>
  
  <Routes>

    <Route path='/' element={<Home/>}/>
    <Route path='/about' element={<About/>}/>
    <Route path='/service' element={<Service/>}/>
    <Route path='/contact' element={<Contact/>}/>
    
  </Routes>
  <Footer/>

    </>
  )
}

export default App
