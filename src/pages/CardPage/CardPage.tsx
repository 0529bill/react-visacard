import React from "react";
import { useNavigate } from "react-router-dom";

import "./CardPage.css";

function CardPage() {
  let navigate = useNavigate();
  return (
    <>
      <div>CardName</div>
      <div>CardHolder</div>
      <button onClick={() => navigate("../react-card")}>start</button>
    </>
  );
}

export default CardPage;
