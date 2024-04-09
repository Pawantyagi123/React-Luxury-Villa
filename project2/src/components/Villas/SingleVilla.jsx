import { villas } from "../../villas.js";
import { useParams } from "react-router-dom";

export default function SingleVilla() {
  const { id } = useParams();
  const numericid = Number(id);
  const filterVilla = villas.filter((villa) => villa.id === numericid)[0];
  return (
    <>
      <section id="singleVilla" className="page">
        <div className="container">
          <h3>{filterVilla.name}</h3>
          <div className="images">
            <div className="villaImg">
              <img src={filterVilla.image} alt={filterVilla.name} />
            </div>
            <div className="otherImgs">
              <div>
                <img src={"./public/landing.jpg"} alt="landing" />
                <img src={"./public/people.jpg"} alt="people" />
              </div>
              <div>
                <img src={"./public/people2.jpg"} alt="people2" />
                <img src={"./public/villa10.jpg"} alt="villa" />
              </div>
            </div>
          </div>
          <h4>{filterVilla.location}</h4>
          <p>
            {filterVilla.bedrooms} Bedrooms / {filterVilla.guests} Guests / {""}
            {filterVilla.bathrooms} Bathrooms / {filterVilla.squareMeter}
            {""} Area
          </p>
          <div className="checkin_out">
            <h5>
              Check In <span>9:00 AM</span>
            </h5>
            <h5>
              Check Out <span>11:00 PM</span>
            </h5>
          </div>
          <div className="location">
            <h4>LOCATION</h4>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3615.5944155443667!2d67.12354627605013!3d25.01389403909968!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb346ef1e65505b%3A0xb2b56296fea70ccc!2sMohsin%20Foods!5e0!3m2!1sen!2s!4v1703674502338!5m2!1sen!2s"
              style={{ width: "100%", height: "400px", border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </section>
    </>
  );
}
