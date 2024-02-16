import { useState } from "react";
import { Link } from "react-router-dom";
export default function Header() {

    const [show, setShow] = useState(false);
    return (
        <>
            <header>
                <div className="jay">
                    <div className="jay1">
                        <Link to="/" className="links">Jayab<span className="glo">global </span> </Link>
                    </div>
                    <div className="jay2">
                        <button onClick={() => setShow(!show)}><i className="fa fa-bars" /></button>
                    </div>
                    {show &&
                        <div className="jay3">
                            <div className="jaymenu">
                                <Link to="/" className="link"> <div className="jaymenu1">Home</div></Link>
                                <Link to="/about" className="link"> <div className="jaymenu1">About US</div></Link>
                                <Link to="/ask" className="link"> <div className="jaymenu1">FAQ</div></Link>
                                <Link to="/contact" className="link"> <div className="jaymenu1">Contact</div></Link>
                                
                            </div>
                        </div>
                    }
                </div>
            </header>
        </>
    )
}