import Tick from "../../assets/thank-you-icon/Vector (4).png";
import "./thank-you.css";

export default function ThankYou({showModal}) {  
  return (
    <section className="thank-you">
      <section className="thank-you-container">
        <aside>
          {<img src={Tick} alt="tick" className={showModal ? "show" : ""}/>}
          <h3>Thank you for your Donation</h3>
          <p>
            Your donation will go a long way in providing education for orphans
            in need.
          </p>
        </aside>
      </section>
    </section>
  );
}
