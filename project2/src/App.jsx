import './App.css'
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Home from './components/Home/Home.jsx';
import Navbar from './components/Navbar/Navbar.jsx';
import Footer from './components/Footer/Footer.jsx';
import Aboutus from './components/about us/About.jsx';
import Contact from './components/contact/Contact.jsx';
import Villas from './components/Villas/Villas.jsx';
import SingleVilla from './components/Villas/SingleVilla.jsx';

export default function App() {
  return (
    <>
   <Router>
    <Navbar/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/aboutus' element={<Aboutus/>}/>
      <Route path='/contact' element={<Contact/>}/>
      <Route path='/villas' element={<Villas/>}/>
      <Route path='/villa/:id' element={<SingleVilla/>}/>
    </Routes>
    <Footer/>
   </Router>
    </>
  )
}

