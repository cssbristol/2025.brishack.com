import "../css/FAQ.css";

function FAQ() {
    return (
        <div className="faq-section" id="faq">
            <div className="faq-heading">Frequently Asked Questions</div>
            <div className="faq-grid">
                <div className="faq-item">
                    <div className="questions">I don't study a STEM discipline, can I participate?</div>
                    <div className="answers arial">
                        BrisHack is open to all! If you have even basic technological knowledge, we'd love to see what you
                        make. Alternatively, if you lack technological prowess but have an awesome idea, perhaps you can
                        join a team and be their ideas-person (we'd love to see med-students join us!)
                    </div>
                </div>
                <div className="faq-item">
                    <div className="questions">I'm inexperienced as a programmer, can I still participate?</div>
                    <div className="answers arial">
                        Of course! Participating in a Hackathon is a great way to get more experience; you can either join a
                        team of more experienced participants and learn from them, or participate yourself and grow from the
                        challenge, and hopefully even gain an awesome portfolio piece by the end of the Hackathon.
                    </div>
                </div>
                <div className="faq-item">
                    <div className="questions">Is there a participation fee?</div>
                    <div className="answers arial">
                        No, BrisHack is completely free to attend! Thanks to our sponsors, we provide food, drinks, and swag!
                    </div>
                </div>
                <div className="faq-item">
                    <div className="questions">Will food be provided?</div>
                    <div className="answers arial">
                        Yup! There will be pizzas !! Just make sure to let us know if you have any
                        dietary requirements!
                    </div>
                </div>
            </div>
        </div>
    );
}

export default FAQ;
