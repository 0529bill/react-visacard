import React, { Dispatch, useRef } from "react";
import visa_background from "@assets/visa_background.jpeg";
import visa from "@assets/visa.png";
import visa_cvc from "@assets/visa_cvc.png";
import { SwitchTransition, CSSTransition } from "react-transition-group";
import { SelectState } from "@utils/reducers";

import "./VisaPage.css";

interface VisaPageState {
  state: SelectState;
  cardSide: boolean;
  setCardSide: Dispatch<React.SetStateAction<boolean>>;
}

function VisaPage(props: VisaPageState) {
  console.log("visaPage_-CardSide", props.cardSide);
  console.log("VPS", props.state);
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

  //   Array.from({ length: 19 }).forEach((_, index) => {
  //     if ([4, 9, 14].includes(index)) {
  //       visaCardNum.push(<span className="visapage_cardNum_space">&nbsp; </span>);
  //     } else {
  //       console.log("indexTest", index);
  //       console.log("stateTest", props.state.card_num.length);
  //       visaCardNum.push(
  //         <SwitchTransition>
  //           <CSSTransition
  //             classNames="slide-up"
  //             addEndListener={(node, done) =>
  //               node.addEventListener("transitionend", done, false)
  //             }
  //           >
  //             <span>
  //               {index < props.state.card_num.length
  //                 ? props.state.card_num[index]
  //                 : "#"}
  //             </span>
  //           </CSSTransition>
  //         </SwitchTransition>
  //       );
  //     }
  //   });
  console.log("VCN", visaCardNum);
  return (
    <>
      <div
        className={`visapage_container ${props.cardSide ? "" : "flipped"}`}
        onClick={() => props.setCardSide((t) => !t)}
      >
        <div className="visapageDiv visapage_front ">
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
          <div className="visapage_cardNum">{visaCardNum}</div>
          <div className="visapage_cardHolder">
            <div className="visapage_cardHolder_title">Card Holder</div>
            <div>
              {props.state.card_holder ? props.state.card_holder : "Full Name"}
            </div>
          </div>
          <div className="visapage_expireDate">
            <div className="visapage_expireDate_title">Expires</div>
            <div>
              {props.state.expiration_month && props.state.expiration_year
                ? `${props.state.expiration_month}/${props.state.expiration_year}`
                : "MM/YY"}
            </div>
          </div>
        </div>
        <div className="visapageDiv visapage_back">
          <img
            className="visapage_background"
            src={visa_background}
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