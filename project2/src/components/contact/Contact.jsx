import { Link } from "react-router-dom"
import { RiFacebookCircleFill } from "react-icons/ri";
import { RiInstagramLine } from "react-icons/ri";
import { RiTwitterFill } from "react-icons/ri";

export default function Contact() {
  return (
    <>
    <section id="contact">
        <h1>CONTACT US</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse placeat perferendis repudiandae voluptates nostrum ipsum assumenda ratione quia rem reiciendis?</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. In, aut dolorum ea totam maxime error iusto, quae, perspiciatis facilis consectetur aspernatur ab ipsam porro ipsa obcaecati officiis dicta a nostrum?</p>
        <div className="container">
            <img src="./public/about (1).jpg" alt="about" />
            <div className="content">
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
        </div>
    </section>
    </>
  )
}
