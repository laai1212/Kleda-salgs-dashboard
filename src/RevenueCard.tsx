import React from "react";
import "./CSS/RevenueCard.css";

export default function RevenueCard() {
/*Egen data inne i komponenten */
  const total = 45231.89;
  const currency = "NOK";
  const changePct = 20.1;

  function formatCurrency(value: number, currency: string) {
    return new Intl.NumberFormat("nb-NO", {
      style: "currency",
      currency,
    }).format(value);
  }

  const formattedTotal = formatCurrency(total, currency);
  const changeText = `▲ ${changePct.toFixed(1)} %`;

  return (
    <div className="kort">
      <div className="kort-tittel">Total omsetning</div>

      <div className="kort-rad">
        <div className="kort-beloep">{formattedTotal}</div>
        <div className="kort-endring-positiv">{changeText}</div>
      </div>

      <div className="kort-tekst-under">sammenlignet med forrige måned</div>
    </div>
  );
}
