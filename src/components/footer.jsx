import React from "react";
import '../style/home.css';
import {FaMobileAlt} from 'react-icons/fa';
import {BsGeoAltFill, BsTelephone, BsFacebook} from 'react-icons/bs'

const Footer = () => {
    return (
<footer className="text-center text-lg-start bg-light text-muted">
  <section
    className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom"
  >
    <div className="me-5 flex justify-content-center">
    </div>

  </section>
  <section className="">
    <div className="container text-center text-md-start mt-5">
      <div className="row mt-3">
        <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
          <h6 className="text-uppercase fw-bold mb-4">
            <i className="fas fa-gem me-3"></i>Il Mercante dei Sogni
          </h6>
          <p>
            Bomboniere<br/>Lista nozze<br/>Oggettistica

          </p>
        </div>
        <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
        <h6 className="text-uppercase fw-bold mb-4">
            Dove siamo
          </h6>
          <p><BsGeoAltFill/> Via Nazionale Torrette, 82, 83013 Mercogliano AV</p>


         
        </div>
        <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
        <h6 className="text-uppercase fw-bold mb-4">
            Social
          </h6>
          <BsFacebook /><a href="https://www.facebook.com/ilmercante.deisogni.7" target="_blank" rel="noopener noreferrer">  Facebook</a>
        </div>
        <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
          <h6 className="text-uppercase fw-bold mb-4">
            Contatti
          </h6>
          <p><FaMobileAlt /> + 39 335 7588425</p>
          <p><BsTelephone /> + 39 0825 683101</p>
        </div>
      </div>
    </div>
  </section>

  <div className="text-center p-4">
    © 2021 Copyright:
    <a className="text-reset fw-bold" href="https://mdbootstrap.com/"> ilmercantedeisogni.it</a>
  </div>
</footer>
    );
}

export default Footer;