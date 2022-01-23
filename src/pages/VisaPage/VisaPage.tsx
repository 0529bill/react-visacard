import React from "react";
import visa_background from "@assets/visa_background.jpeg";
import visa from "@assets/visa.png";
import visa_cvc from "@assets/visa_cvc.png";

import "./VisaPage.css";

function VisaPage() {
  return (
    <>
      <div className="visapage_container">
        <img
          className="visapage_background"
          src={visa_background}
          alt="visapage_background"
        />
        <div>
          <img className="visapage_visaIcon" src={visa} alt="visa" />
        </div>
        <div>
          <img className="visapage_visaCvc" src={visa_cvc} alt="visa_cvc" />
        </div>
        <div className="visapage_cardNum">##### ##### ####</div>
      </div>
    </>
  );
}

export default VisaPage;
