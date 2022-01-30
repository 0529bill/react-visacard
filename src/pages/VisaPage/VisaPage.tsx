import React, { Dispatch, useRef } from "react";
import visa_background from "@assets/visa_background.jpeg";
import visa from "@assets/visa.png";
import visa_cvc from "@assets/visa_cvc.png";
import road_visa from "@assets/road_visa.jpeg";
import { SelectState } from "@utils/reducers";

import "./VisaPage.css";

interface VisaPageState {
  state: SelectState;
  cardSide: boolean;
  setCardSide: Dispatch<React.SetStateAction<boolean>>;
}

function VisaPage(props: VisaPageState) {
  let visaCardNum: Array<JSX.Element | string> = [];

  Array.from({ length: 16 }).forEach((_, index) => {
    if (index < props.state.card_num.length) {
      visaCardNum.push(props.state.card_num[index]);
    } else {
      visaCardNum.push("#");
    }
    if (index == 15) {
      visaCardNum.splice(4, 0, " ");
      visaCardNum.splice(9, 0, " ");
      visaCardNum.splice(14, 0, " ");
    }
  });

  return (
    <>
      <div
        className={`visapage_container ${props.cardSide ? "" : "flipped"}`}
        onClick={() => props.setCardSide((t) => !t)}
      >
        <div className="visapageDiv visapage_front ">
          <img
            className="visapage_background"
            src={props.state.selected ? props.state.selected : road_visa}
            alt="visapage_background"
          />
          <div>
            <img className="visapage_visaIcon" src={visa} alt="visa" />
          </div>
          <div>
            <img className="visapage_visaCvc" src={visa_cvc} alt="visa_cvc" />
          </div>
          <div className="visapage_cardNum">{visaCardNum}</div>
          <div className="visapage_cardHolder">
            <div className="visapage_cardHolder_title">Card Holder</div>
            <div className="visapage_cardHolder_text">
              {props.state.card_holder_first || props.state.card_holder_second
                ? props.state.card_holder_first +
                  " " +
                  props.state.card_holder_second
                : "Full Name"}
            </div>
          </div>
          <div className="visapage_expireDate">
            <div className="visapage_expireDate_title">Expires</div>
            <div>
              {props.state.expiration_month || props.state.expiration_year
                ? `${props.state.expiration_month}/${props.state.expiration_year}`
                : "MM/YY"}
            </div>
          </div>
        </div>
        <div className="visapageDiv visapage_back">
          <img
            className="visapage_background"
            src={props.state.selected ? props.state.selected : road_visa}
            alt="visapage_background"
          />
          <div className="visapage_blackStrip" />
          <div className="visapage_cvcNum">
            <div className="visapage_cvcNum_title">
              {props.state.card_cvc ? props.state.card_cvc : "CVC"}
            </div>
          </div>
          <div className="visapage_whiteStrip" />
          <div>
            <img className="visapage_visaIcon_back" src={visa} alt="visa" />
          </div>
          <div>
            <img
              className="visapage_visaCvc_back"
              src={visa_cvc}
              alt="visa_cvc"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default VisaPage;
