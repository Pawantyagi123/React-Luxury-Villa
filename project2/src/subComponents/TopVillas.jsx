import { villas } from "../villas.js";
import { Link } from "react-router-dom";
import { RxDot } from "react-icons/rx";
import { IoIosPeople } from "react-icons/io";
import { FaBed } from "react-icons/fa";
import { BiArea } from "react-icons/bi";
import { FaBath } from "react-icons/fa";

export default function TopVillas() {
  return (
    <>
      <section id="topVillas">
        <h1>TOP PICK VILLAS</h1>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit.
          Exercitationem ea voluptatem aspernatur vitae veritatis nesciunt
          nostrum, aperiam, obcaecati, itaque cum odit incidunt veniam tempore?
          Asperiores.
        </p>
        <div className="villasContainer">
          {villas.slice(0, 3).map((element) => {
            return (
              <Link className="card" to={`/villa/${element.id}`} key={element.id}>
                <img src={element.image} alt={element.name} />
                <div className="location_text">
                  <span>{element.location}</span>
                  <span>
                    <RxDot />
                  </span>
                  <span>{element.category}</span>
                </div>
                <div className="title_text">{element.name}</div>
                <div className="specifications">
                  <div className="spec">
                    <IoIosPeople />
                    <span>{element.guests}</span>
                    Guests
                  </div>
                  <div className="spec">
                    <FaBed />
                    <span>{element.bedrooms}</span>
                    Bedrooms
                  </div>
                  <div className="spec">
                  <BiArea />
                    <span>{element.squareMeter}</span>
                    Area
                  </div>
                  <div className="spec">
                    <FaBath />
                    <span>{element.bathrooms}</span>
                    Bathrooms
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </section>
    </>
  );
}
