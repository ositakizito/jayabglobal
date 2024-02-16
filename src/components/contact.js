import Header from "./header";
import Footer from "./footer";
import phone from "../images/phone.svg";
import gmail from "../images/gmail.svg";
import Locate from "../images/location.svg";
export default function Contact() {

    return (
        <>
        <Header/>
            <section className="sec2">
                <div className="con">Contact Us</div>
                <div className="jaycontact">
                    <div className="jayicon"><img src={Locate} width={40} alt="" /></div>
                    <div className="jaystreet">
                        <div className="jaynum loc">Location</div>
                        <div className="jaynum">1234 North Avenue</div>
                    </div>
                </div>
                <div className="jaycontact">
                    <div className="jayicon"><img src={gmail} width={20} alt="" /></div>
                    <div className="jaystreet">
                        <div className="jaynum loc">Email</div>
                        <div className="jaynum">Ositakizito4@gmail.com</div>
                    </div>
                </div>
                <div className="jaycontact">
                    <div className="jayicon"><img src={phone} width={40} alt="" /></div>
                    <div className="jaystreet">
                        <div className="jaynum loc">Phone</div>
                        <div className="jaynum">07016361129</div>
                    </div>
                </div>
            </section>
          <Footer/>
        </>
    )
}