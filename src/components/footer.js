import { Link } from "react-router-dom"
import jay from "../images/jayab.png"
export default function Footer() {

    return (
        <>
            <footer>

                <div className="jayfooter">
                    <div className="footerimg">
                        <img src={jay} alt="" />
                    </div>
                    <div className="footerjay">
                        Lorem Ipsum so nice to write adummy text containing a simple tasks projects
                    </div>
                    <div className="footers">
                        <button><i className="fab fa-facebook-f"></i></button>
                        <button><i className="fab fa-twitter"></i></button>
                        <button><i className="fab fa-linkedin"></i></button>
                        <button><i className="fab fa-instagram"></i></button>
                    </div>
                    <div className="footerquick">
                        <div className="footQ">
                            Quick Links
                        </div>
                        <div className="line"></div>
                        <div className="footerlink">
                            <Link to="/" className="links"><div className="foot1">Home</div></Link>
                            <Link to="/about" className="links"><div className="foot1">About Us</div></Link>
                        </div>
                    </div>
                    <div className="footerservice">
                        <div className="footservice">
                            Our Services
                        </div>
                        <div className="line"></div>
                        <div className="footery">
                           <Link to="/contact" className="links"><div className="fot">Contact</div></Link> 
                           <Link to="/ask" className="links"><div className="fot">FAQ</div></Link> 
                           <Link to="#" className="links"><div className="fot">Terms & Condition</div></Link> 
                           <Link to="#" className="links"><div className="fot">Privacy Policy</div></Link> 
                           <Link to="/about" className="links"><div className="fot">About Us</div></Link> 
                        </div>
                    </div>
                    <div className="footerservice">
                        <div className="footservice">
                            Newsletter
                        </div>
                        <div className="line"></div>
                        <div className="footery">
                            <div className="fott">Get offers & news in your inbox</div>
                            <form method="#">
                                <input type="text" placeholder="Email address" />
                                <button><i className="fab fa-telegram-plane" /></button>
                            </form>
                        </div>
                    </div>
                </div>
                <div className="footcopy">
                    <div className="fotcopy">Copyright &copy; 2024 Jayabglobal All right Reserved.</div>
                </div>
            </footer>
        </>
    )
}