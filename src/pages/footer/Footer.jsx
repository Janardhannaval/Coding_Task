import React from "react";
import "./FooterStyle.css";
export default function Footer() {
  return (
    <footer className="container">
      <div className="footerSection">
      <div className="head">
        <div className="row">
          <div className="col-lg-4">
            <div className="footerHeader">
              <h4>About us</h4>
              <div className="lineDivider"></div>
            </div>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odio
              unde architecto maxime quis maiores culpa officia accusantium
              quia? Exercitationem, officiis fugit expedita voluptatum
              quibusdam, omnis consequatur iusto nobis dicta soluta ratione
              itaque dolorum ea labore!
            </p>
          </div>
          <div className="col-lg-4">
            {" "}
            <div className="footerHeader">
              <h4>Get In Touch</h4>
              <div className="lineDivider"></div>
            </div>
            <div>
              <div className="address">
                <p>Address:</p>
                <p>66 South Sheet Windows 6 wonderland </p>
              </div>
              <div className="address">
                <p>Phone:</p>
                <p>'440 875369208 - office '440 3534523789 - Fax</p>
              </div>
              <div className="address">
                <p>Email:</p>
                <p>Dummy@gmail.com</p>
              </div>
            </div>
          </div>

          <div className="col-lg-4">
            {" "}
            <div className="footerHeader">
              <h4>Social Media</h4>
              <div className="lineDivider"></div>
            </div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Inventore, aliquam.
            </p>
            <i class="bi bi-whatsapp socialMediaIcon"></i>
            <i class="bi bi-facebook socialMediaIcon"></i>
            <i class="bi bi-twitter socialMediaIcon"></i>
            <i class="bi bi-instagram socialMediaIcon"></i>
            <i class="bi bi-google socialMediaIcon"></i>
          </div>
        </div>
      </div>
        <button className="footerButton">Copyright and Freepik</button>
      </div>
    </footer>
  );
}
