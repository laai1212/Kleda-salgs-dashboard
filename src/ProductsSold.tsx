import React from "react";
import "./CSS/ProductsSold.css";

export default function ProductsSold() {
  /*Egen data inne i komponenten*/
  const count = "3 456";
  const changeText = "▼ 2.4 %";

  return (
    <div className="kort">
      <div className="kort-tittel">Produkter solgt</div>

      <div className="kort-rad">
        <div className="kort-beloep">{count}</div>
        <div className="kort-endring-negativ">{changeText}</div>
      </div>

      <div className="kort-tekst-under">sammenlignet med forrige måned</div>
    </div>
  );
}
