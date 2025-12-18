import "./CSS/ConversionRateCard.css";

export default function ConversionRateCard() {
  return (
    <div className="cr-card">
      <div className="cr-header">
        <h3>Konverteringsrate</h3>
        <span className="cr-icon">↗</span>
      </div>

      <div className="cr-value">3.24%</div>

      <div className="cr-change cr-positive">
        <span className="cr-change-arrow">↗</span>
        <span>+0.8%</span>
      </div>

      <div className="cr-description">Sammenlignet med forrige periode</div>
    </div>
  );
}

