import React from "react";
import "./Footer.css";
import logo from "../../assets/Logo Icon.png";
export default function Footer() {
  return (
    <div>
    
        <div className="row footer-container">
          <div className="col-lg-3 col-md-4">
            <div className="d-flex gap-3">
              <img src={logo} alt="" />
              <h3>Comforty</h3>
            </div>
            <p className="mt-3">
              Vivamus tristique odio sit amet velit semper, eu posuere turpis
              interdum. Cras egestas puruss
            </p>
          <div>
            <i class="bi bi-twitter"></i>
            <i class="bi bi-facebook ms-2"></i>
            <i class="bi bi-twitter ms-2"></i>
            <i class="bi bi-whatsapp ms-2"></i>
            <i class="bi bi-twitter ms-2"></i>
          </div>
          </div>
          <div className="col-lg-3 col-md-4">
            <h4 className="text-secondary">Category</h4>
            <p>Sofa</p>
            <p>Armchair</p>
            <p>Wing Chair</p>
            <p>Desk Chair</p>
            <p>wooden Chair</p>
            <p>Park Bench</p>
          </div>
          <div className="col-lg-3 col-md-4">
            <h4 className="text-secondary">Support</h4>
            <p>Help & Support</p>
            <p>Privacy Policy</p>
            <p>Tearms & Conditions</p>
            <p>Help</p>
          </div>
          <div className="col-lg-3 col-md-6">
            <h4 className="text-secondary">Newsletter</h4>
            <div className="d-flex">
                <input type="text" placeholder="your email" className="form-control" />
                <button className="s-button ms-3">Subscribe</button>
            </div>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam tincidunt erat enim.</p>
          </div>
        </div>

        {/* end footer */}
        <hr />
        <div className="end-footer">
            <h6 className="text-secondary">@ 2021 - Blogy - Designed & Develop by Zakirsoft</h6>
            <div className="d-flex gap-3 mb-2">
            <i class="bi bi-facebook ms-2"></i>
            <i class="bi bi-twitter ms-2"></i>
            <i class="bi bi-whatsapp ms-2"></i>
            </div>
        </div>
      </div>
  );
}
