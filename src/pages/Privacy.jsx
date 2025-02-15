import { useState, useEffect } from "react";
import "../css/Privacy.css";
import Navbar from "../components/Navbar";
import Particle from "../components/Particle";
import Footer from "../components/Footer";

function Privacy() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="privacy-page">
      <Particle />
      <Navbar />
      <div className={`privacy-container ${isVisible ? "fade-in" : ""}`}>
        <div className="privacy-text-wrapper">
          <h1>Brishack Privacy Policy</h1>
          <p>
            <strong>Effective Date:</strong> 21 January 2025
          </p>
          <p>
            <strong>Last Updated:</strong> 21 January 2025
          </p>
          <h2>1. Introduction</h2>
          <p>
            Welcome to Brishack, an event organised by the{" "}
            <strong>Computer Science Society (CSS)</strong>, the{" "}
            <strong>
              Bristol Electrical and Electronic Engineering Society (BEEES)
            </strong>{" "}
            and the <strong>Bristol Blockchain Society (BBS)</strong> ("we,"
            "our," or "us"). We are committed to protecting your privacy and
            ensuring compliance with the UK General Data Protection Regulation
            (UK GDPR) and the Data Protection Act 2018. This Privacy Policy
            explains how we handle your personal data when you participate in
            Brishack.
          </p>

          <h2>2. Data We Collect</h2>
          <p>
            We do not collect personal data through our website, except for the
            following:
          </p>
          <ul>
            <li>
              <strong>Google Fonts:</strong> Our website uses Google Fonts,
              which may collect anonymized usage data as per Google’s{" "}
              <a
                href="https://developers.google.com/fonts/faq/privacy"
                target="_blank"
              >
                privacy policy
              </a>
              .
            </li>
            <li>
              <strong>Microsoft Forms Applications:</strong> If you apply to
              participate in Brishack, we collect and process:
              <ul>
                <li>Full name</li>
                <li>Email address</li>
                <li>Student username</li>
                <li>Contact number</li>
              </ul>
            </li>
          </ul>

          <h2>3. How We Use Your Data</h2>
          <p>
            We collect this information solely for the purpose of organizing and
            managing Brishack, including:
          </p>
          <ul>
            <li>Processing applications for participation.</li>
            <li>Communicating important event-related information.</li>
            <li>Ensuring event security and logistics.</li>
          </ul>

          <h2>4. Data Storage and Retention</h2>
          <p>
            Your personal data will be stored securely and will only be
            accessible to the event organisers. We will retain your data only
            for the duration of Brishack and will delete it no later than
            <strong>30 April 2025</strong>.
          </p>

          <h2>5. Data Sharing and Third Parties</h2>
          <p>
            We do not share your personal data with third parties except where
            required by law. Microsoft Forms may process your data as per
            Microsoft’s and the University’s privacy policies.
          </p>

          <h2>6. Legal Basis for Processing </h2>
          <p>
            Under UK GDPR, we process your personal data based on your consent,
            which you provide when submitting your application via Microsoft
            Forms.
          </p>

          <h2>7. Your Rights</h2>
          <p>You have the following rights regarding your personal data:</p>
          <ul>
            <li>
              <strong>Access:</strong> Request a copy of the data we hold about
              you.
            </li>
            <li>
              <strong>Rectification:</strong> Request correction of any
              inaccurate or incomplete data.
            </li>
            <li>
              <strong>Erasure:</strong> Request deletion of your data before the
              scheduled retention period ends.
            </li>
          </ul>
          <p>
            To exercise your rights, please contact us at{" "}
            <a href="mailto:committee@beees.org.uk">committee@beees.org.uk</a>{" "}
            or{" "}
            <a href="mailto:cs-society@bristol.ac.uk">
              cs-society@bristol.ac.uk
            </a>
            .
          </p>
          <h2>8. Security Measures</h2>
          <p>
            We implement appropriate technical and organisational measures to
            protect your personal data from unauthorised access, loss, or
            misuse.
          </p>

          <h2>9. Governing Law</h2>
          <p>
            This Privacy Policy is governed by and construed in accordance with
            English law, and any disputes will be subject to the jurisdiction of
            the courts of England and Wales.
          </p>

          <h2>10. Updates to This Policy</h2>
          <p>
            We may update this Privacy Policy from time to time. Any changes
            will be posted on our website with an updated effective date.
          </p>

          <h2>11. Contact Us</h2>
          <p>
            If you have any questions about this Privacy Policy, please contact
            us at{" "}
            <a href="mailto:committee@beees.org.uk">committee@beees.org.uk</a>{" "}
            or{" "}
            <a href="mailto:cs-society@bristol.ac.uk">
              cs-society@bristol.ac.uk
            </a>
            .
          </p>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
}

export default Privacy;
