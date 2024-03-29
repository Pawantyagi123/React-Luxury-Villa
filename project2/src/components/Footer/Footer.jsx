import {Link, useLocation} from "react-router-dom";

export default function Footer() {
  const location = useLocation();
  const isHomePage = location.pathname === '/';
  return (
    <>
    <footer className={isHomePage ? 'homePage_footer otherPage_footer' : "otherPage_footer"}>
<div className="container">
  <h4>LUXURY RENTAL</h4>
  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit odio error impedit quibusdam. Impedit, ad porro amet quae velit ut, soluta dignissimos magni quisquam omnis doloribus rerum reiciendis odit dolores.</p>
  <ul>
    <li>
      <Link to={'/'}>Home</Link>
    </li>
    <li>
      <Link to={'/termsandcond'}>Terms And Condition</Link>
    </li>
    <li>
      <Link to={'/contact'}>Contact</Link>
    </li>
  </ul>
</div>
<div className="container">
  <h4>Connect with us</h4>
  <p>+9499300600</p>
  <p>tyagi2002@gmail.com</p>
  <p>&copy;All Rights Reserved By CodeWithPawan</p>
</div>

    </footer>
    </>
  )
}
