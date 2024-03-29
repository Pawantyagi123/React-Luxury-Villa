 import { Link, useNavigate } from "react-router-dom";
 import {RxHamburgerMenu} from "react-icons/rx";
import { useState } from "react";


export default function Navbar() {
    const [navHeight, setNavHeight] = useState(false);
    const navigate = useNavigate();
    const gotoHome = ()=> {
        navigate('/');
    }
  return (
    <>
    <nav className={navHeight ? "show nav" : "nav"}>
<div className="logo" onClick={()=> gotoHome()}>
    LUXURY RENTAL
</div>
<ul>
    <li>
        <Link to={"/aboutus"}>ABOUT US</Link>
    </li>
    <li>
        <Link to={"/villas"}>VILLAS</Link>
    </li>
    <li>
        <Link to={"/contact"}>CONTACT</Link>
    </li>
</ul>
<RxHamburgerMenu className="hamburger" onClick={()=> setNavHeight(!navHeight)}/>
    </nav>
    </>
  )
}
