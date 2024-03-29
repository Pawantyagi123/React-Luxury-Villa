import { Link } from "react-router-dom";
import { RiFacebookCircleFill } from "react-icons/ri";
import { RiInstagramLine } from "react-icons/ri";
import { RiTwitterFill } from "react-icons/ri";

export default function Contact() {
  return (
    <section id="contact_Mini">
      <div className="super_container">
        <div className="container_1">
          <h3>Let &apos;s Connect</h3>
          <div>
            <p>Phone</p>
            <span>+9499300600</span>
          </div>
          <div>
            <p>Email</p>
            <span>tyagi2002@gmail.com</span>
          </div>
          <div>
            <p>Address</p>
            <span>house No.50 street A-16</span>
          </div>
          <ul>
            <Link to={"/"} target="_blank">
              <RiFacebookCircleFill />
            </Link>
            <Link to={"/"} target="_blank">
              <RiInstagramLine />
            </Link>
            <Link to={"/"} target="_blank">
              <RiTwitterFill />
            </Link>
          </ul>
        </div>
        <div className="container_2">
          <h3>We &apos; d provide top hear from you</h3>
          <form action="">
            <div>
              <input type="text" placeholder="Name"/>
              <input type="email" placeholder="Email"/>
            </div>
            <textarea rows="4" placeholder="Your Message..."></textarea>
            <button type="submit">SEND</button>
          </form>
        </div>
      </div>
    </section>
  );
}
