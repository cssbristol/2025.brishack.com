import "../css/FAQ.css";

function FAQ() {
    return (
        <div className="faq-section" id="faq">
            <div className="faq-heading">Frequently Asked Questions</div>
            <div className="faq-grid">
                <div className="faq-item">
                    <div className="questions">I don't study a STEM discipline, can I participate?</div>
                    <div className="answers exo-2">
                        BrisHack is open to all! If you have even basic technological knowledge, we'd love to see what you make. 
                        Alternatively, if you lack technical skills but have an awesome idea, you can join a team and be their ideas-person!
                    </div>
                </div>
                <div className="faq-item">
                    <div className="questions">Do I need a team to join?</div>
                    <div className="answers exo-2">
                        No! You can participate solo, or we can help you find a team. There will be a team-building session before the event.
                    </div>
                </div>
                <div className="faq-item">
                    <div className="questions">Is there a participation fee?</div>
                    <div className="answers exo-2">
                        No, BrisHack is completely free to attend! Thanks to our sponsors, we provide food, drinks, and swag!
                    </div>
                </div>
                <div className="faq-item">
                    <div className="questions">What should I bring?</div>
                    <div className="answers exo-2">
                        Bring your laptop, charger, and any necessary hardware. If you're staying overnight, a sleeping bag is a good idea.
                    </div>
                </div>
            </div>
        </div>
    );
}

export default FAQ;
