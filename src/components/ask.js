import { useState } from "react";
import Header from "./header";
import Footer from "./footer";

export default function Ask() {
    const [ask, setAsk] = useState(false);
    const [ask1, setAsk1] = useState(false);
    const [ask2, setAsk2] = useState(false);
    return (
        <>
            <Header />
            <section className="faq">
                <div className="faq1">
                    Frequently Asked Question
                </div>
                <div className="fask">
                    <div className="faq2">
                        <div className="faq3">How can i become a member?</div>
                        <button className="faq4" onClick={() => setAsk(!ask)}><i className="fa fa-chevron-down"></i></button>
                    </div>
                    {ask &&
                        <div className="faq5">Yes, this is how its always to be as an upcoming develope, Yes, this is how its always to be as an upcoming developer, Yes, this is how its always to be as an upcoming develope,
                        </div>
                    }
                </div>
                <div className="fask">
                    <div className="faq2">
                        <div className="faq3">How can i become a member?</div>
                        <button className="faq4" onClick={() => setAsk1(!ask1)}><i className="fa fa-chevron-down"></i></button>
                    </div>
                    {ask1 &&
                        <div className="faq5">Yes, this is how its always to be as an upcoming develope, Yes, this is how its always to be as an upcoming developer, Yes, this is how its always to be as an upcoming develope,
                        </div>
                    }
                </div>
                <div className="fask">
                    <div className="faq2">
                        <div className="faq3">How can i become a member?</div>
                        <button className="faq4" onClick={() => setAsk2(!ask2)}><i className="fa fa-chevron-down"></i></button>
                    </div>
                    {ask2 &&
                        <div className="faq5">Yes, this is how its always to be as an upcoming develope, Yes, this is how its always to be as an upcoming developer, Yes, this is how its always to be as an upcoming develope,
                        </div>
                    }
                </div>


            </section>
            <Footer/>
        </>
    )
}