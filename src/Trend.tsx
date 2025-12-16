import React from "react";
import "./CSS/Trend.css";



export interface TrendItem {
  name: string;
  category: string;
  growth: string;
  revenue: string;
  units: string;
  insight: string;
}


/* data */

const popularItems: TrendItem[] = [
  {
    name: "Classic White T-Shirt",
    category: "Overdeler",
    growth: "+45%",
    revenue: "Kr 10,260",
    units: "342 enheter",
    insight: "Høy etterspørsel, jevne salg",
  },
  {
    name: "Denim Jacket",
    category: "Yttertøy",
    growth: "+38%",
    revenue: "Kr 19,620",
    units: "218 enheter",
    insight: "Sesongtrend, premium prisnivå",
  },
  {
    name: "Running Sneakers",
    category: "Sko",
    growth: "+32%",
    revenue: "Kr 18,900",
    units: "189 enheter",
    insight: "Ny lansering, sterke anmeldelser",
  },
  {
    name: "Leather Belt",
    category: "Tilbehør",
    growth: "+28%",
    revenue: "Kr 4,680",
    units: "156 enheter",
    insight: "Viktig basisprodukt, stabil etterspørsel",
  },
];

const underperformingItems: TrendItem[] = [
  {
    name: "Cargo Shorts",
    category: "Underdeler",
    growth: "-42%",
    revenue: "Kr 690",
    units: "23 enheter",
    insight: "Sesongen er over, stilen endrer seg",
  },
  {
    name: "Neon Tank Top",
    category: "Overdeler",
    growth: "-38%",
    revenue: "Kr 360",
    units: "18 enheter",
    insight: "Trenden avtar, begrenset appell",
  },
  {
    name: "Pleated Skirt",
    category: "Underdeler",
    growth: "-35%",
    revenue: "Kr 750",
    units: "15 enheter",
    insight: "Lav etterspørsel, problemer med størrelser",
  },
  {
    name: "Velvet Blazer",
    category: "Yttertøy",
    growth: "-31%",
    revenue: "Kr 1,440",
    units: "12 enheter",
    insight: "Sesongbasert vare, høy prislapp",
  },
];

interface TrendCardProps {
  item: TrendItem;
  positive: boolean;
}

const TrendCard: React.FC<TrendCardProps> = ({ item, positive }) => {
  const handleClick = () => {
    console.log("Clicked:", item.name);
  };

  return (
    <div
      className={
        "trend-card " +
        (positive ? "trend-card-positive" : "trend-card-negative")
      }
      onClick={handleClick}
    >
      <div className="trend-card-header">
        <h4 className="trend-card-name">{item.name}</h4>
        <div className="trend-card-numbers">
          <div className="trend-card-revenue">{item.revenue}</div>
          <div className="trend-card-units">{item.units}</div>
        </div>
      </div>

      <div className="trend-card-meta">
        <span className="trend-chip">{item.category}</span>
        <span
          className={
            "trend-growth " +
            (positive ? "trend-growth-positive" : "trend-growth-negative")
          }
        >
          {item.growth}
        </span>
      </div>

      <div className="trend-card-insight">
        <span className="trend-insight-label">Innsikt:</span>{" "}
        <span className="trend-insight-text">{item.insight}</span>
      </div>
    </div>
  );
};

/* main */
const Trend: React.FC = () => {
  return (
    <div className="trend-section">
      <h2 className="trend-title">Produktresultater og trender</h2>
      <p className="trend-subtitle">
        Se og sammenlign hvilke produkter som presterer best og dårligst
      </p>

      <div className="trend-layout">
        {/* venstre del*/}
        <div className="trend-column">
          <div className="trend-group-header">
            <div className="trend-group-header-left">
              <span className="trend-icon trend-icon-up">↗</span>
              <span className="trend-group-title">Mest populære produkter</span>
            </div>
          </div>

          <div className="trend-card-list">
            {popularItems.map((item) => (
              <TrendCard key={item.name} item={item} positive={true} />
            ))}
          </div>
        </div>

        {/* høyre del */}
        <div className="trend-column">
          <div className="trend-group-header">
            <div className="trend-group-header-left">
              <span className="trend-icon trend-icon-down">↘</span>
              <span className="trend-group-title">
                Produkter som presterer dårlig
              </span>
            </div>
          </div>

          <div className="trend-card-list">
            {underperformingItems.map((item) => (
              <TrendCard key={item.name} item={item} positive={false} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Trend;
