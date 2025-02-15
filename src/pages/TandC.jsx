import "../css/TandC.css";
import Particle from "../components/Particle";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function TandC() {
  return (
    <div className="tandc-page">
      <Particle />
      <Navbar />
      <div className="tandc-container">
        <div className="tandc-text-wrapper">
          <h1 className="tandc-heading">Terms & Conditions</h1>
          <div className="section-divider"></div>

          <ol>
            <li>
              This website, <a href="https://brishack.io/">brishack.io</a> (the
              'Website') is provided by Bristol Electrical and Electronic
              Engineering Society ('BEEES') and the University of Bristol
              Computer Science Society ('CSS'), both affiliated with the
              University of Bristol Students' Union ('Bristol SU'). The use of
              the Website is governed by these Terms and Conditions and such
              other documents referred to herein. By using the Website you
              signify that you have read, understand, and agree to be bound by
              these Terms and Conditions. If you do not agree, please do not use
              the Website. "We", "Our" or "Us" means Bristol SU, and "You" or
              "Your" means the person accessing or using the Website.
            </li>

            <li>
              We reserve the right to change these Terms and Conditions from
              time to time. Any substantial changes will be notified by posting
              a prominent notice on the Website.
            </li>

            <li>
              This Website and any information or other material contained in it
              are made available to you strictly on the basis that you accept it
              on an <strong>'as is'</strong> and <strong>'as available'</strong>{" "}
              basis. As such, we make no warranties, representations or
              undertakings in relation to
              <ul>
                <li>
                  any of the content of the Website (including, without
                  limitation, any as to the quality, accuracy, completeness or
                  fitness for any particular purpose of such content)
                </li>
                <li>
                  any content of any other third party website referred to or
                  accessed by hypertext link through the Website
                </li>
              </ul>
            </li>

            <li>
              You should ensure that you have appropriate protection against
              viruses and other security arrangements in place whilst using the
              Internet. We make no guarantees that the Website is free from
              computer viruses. It is strongly recommended that you check for
              such viruses before downloading the Website or its contents
            </li>

            <li>
              Links to third party websites are for your convenience only. Such
              websites are operated and controlled by third parties and their
              inclusion does not imply any endorsement or approval by Us of such
              websites in any way.
            </li>
            <li>
              Where you rely on any information or other material contained in
              this Website, you do so entirely at your own risk and you accept
              that all warranties, conditions and undertakings, express or
              implied, whether by common law, statute, trade usage, course of
              dealings or otherwise in respect of this Website are excluded to
              the fullest extent permitted by law.
              <br />
              We exclude all liability whatever, to the fullest extent permitted
              by law, in respect of any loss or damage resulting or arising from
              any non-availability or use of this Website or of any other
              Website linked to it, or from reliance on the contents of this
              Website or any material or content accessed through it.
            </li>

            <li>
              For the avoidance of doubt we own or are licensed to use all
              intellectual property rights in and to this website and all
              technical infrastructure relating to it. This Website is protected
              by Copyright and the Copyright, Trademarks, logos and Intellectual
              Property rights for the content of this Website are the property
              of BEEES and CSS. Any use, printing or copying of materials on
              this Website, other than in the course of browsing, is strictly
              prohibited. Any framing of this Website is prohibited.
              <br />
              You may view or download any part of the Site for private
              purposes, but you are not permitted, without our express
              permission, to:
              <ul>
                <li>
                  store the Website, or any part of the Website, for any other
                  purpose;
                </li>
                <li>
                  print copies of the Website, or any part of the Website, for
                  any other purpose;
                </li>
                <li>
                  reproduce, copy or transmit the Website, or any part of the
                  Website, in any way, for any other purpose or in any other
                  medium
                </li>
              </ul>
            </li>
            <li>
              All other rights which are not specifically granted are reserved.
            </li>
            <li>
              If you supply personal details to us through this Website then you
              consent to our maintaining, recording, holding and using such
              personal data in accordance with our Privacy Policy
            </li>
            <li>
              You agree that the Website is available for your personal,
              non-commercial use only. You agree that no materials of any kind
              submitted by You, will violate or infringe upon the rights of any
              third party, including copyright, trademark, privacy, publicity or
              other personal or proprietary rights; or contain libelous,
              defamatory or otherwise unlawful material.
            </li>
            <li>
              If you have complaints about content appearing on this Website,
              please email
              <a href="mailto:cs-society@bristol.ac.uk">
                {" "}
                cs-society@bristol.ac.uk
              </a>{" "}
              or
              <a href="mailto:webmaster@beees.org.uk">
                {" "}
                webmaster@beees.org.uk
              </a>
              .
            </li>

            <li>
              This website has been designed and these terms of use shall be
              governed by and construed in accordance with English law. Any
              dispute arising out of the accessing or use of this Website shall
              be subject to the jurisdiction of the English courts sitting in
              England.
            </li>
          </ol>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default TandC;
