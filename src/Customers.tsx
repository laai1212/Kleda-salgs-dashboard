import React from "react";

type CustomersProps = {
  count?: number;       /* antall kunder */
  changePct?: number;   /* endring i % */
  subtitle?: string;    /* tekst under */
  onClick?: () => void;
};

export const Customers: React.FC<CustomersProps> = ({
  count = 892,
  changePct = 8.2,
  subtitle = "Sammenlignet med forrige periode",
  onClick,
}) => {
  const isPositive = changePct >= 0;

  return (
    <div className="customers-card" onClick={onClick}>
      <div className="customers-top">
        <span className="customers-title">Kunder</span>
        <span className="customers-icon" aria-hidden="true">
          👥
        </span>
      </div>

      <div className="customers-main">
        <span className="customers-value">
          {count.toLocaleString("nb-NO")}
        </span>

        <span
          className={
            "customers-change " + (isPositive ? "pos" : "neg")
          }
        >
          <span className="customers-arrow">
            {isPositive ? "↗" : "↘"}
          </span>
          {isPositive ? "+" : ""}
          {changePct.toFixed(1)}%
        </span>
      </div>

      <div className="customers-subtitle">{subtitle}</div>
    </div>
  );
};
