import she from "../images/she.png";


import Header from "./header";
import Footer from "./footer";
export default function Home() {

    return (
        <>
           <Header/>
            <section className="sec">
                <div className="jayhome">
                    <div className="jayhome1">Earn & Advertise</div>
                    <div className="jayhome2">Get paid for a short Task Get paid for a short Task</div>
                    <div className="jayhome3">Lorem ipsum have you had of many ways eat in private
                        had of many ways people eat in private had of many ways people eat ineat in privatehad of many ways people eat in private had of many?</div>
                    <button className="jaybtn">Get Started</button>
                </div>
            </section>
            <section className="sec1">
                <div className="jayabout">
                    <img src={she} alt="" />
                    <div className="jayabout1">ABOUT US</div>
                    <div className="jayabout2">Your Gateway To Success And Affordable</div>
                    <div className="jayabout3">Lorem ipsum have you had of many ways people eat in private had of many ways people
                        eat in private had of many ways people eat in privatehad of
                        many ways people eat in private had of many ways people eat in privatehad of many ways</div>
                    <button className="jaybtn">KNOW MORE</button>
                </div>
            </section>
          <Footer/>
        </>
    )
}