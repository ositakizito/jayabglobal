import Footer from "./footer";
import Header from "./header";
import she from "../images/she.png";
export default function About() {


    return (
        <>
            <Header />

            <section className="sec1">
                <div className="con">About Us</div>
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
            <Footer />
        </>
    )
}