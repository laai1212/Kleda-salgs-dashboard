import { useState } from "react";
import "./CSS/App.css";

import SalesOverview from "./SalesOverview";
import LoggInn from "./LoggInn";
import AnalyticsDashboard from "./AnalyticsDashboard";
import ConversionRateCard from "./ConversionRateCard";
import { Returns } from "./Returns";
import "./CSS/Returns.css";
import { Orders } from "./Orders";
import "./CSS/Orders.css";
import Trend from "./Trend";
import { Customers } from "./Customers";
import "./CSS/Customers.css";
import RevenueCard from "./RevenueCard";
import ProductsSold from "./ProductsSold";

type TimeRange = "7" | "30";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [timeRange, setTimeRange] = useState<TimeRange>("7");

  if (!isLoggedIn) {
    return <LoggInn onLoginSuccess={() => setIsLoggedIn(true)} />;
  }

  return (
    <div className="app-root">
      {/* Topp-linje med periodevelger helt til høyre */}
      <div className="app-header">
        <div className="app-header-spacer" />
        <div className="time-range-wrapper">
          <select
            className="time-range-select"
            value={timeRange}
            onChange={(e) => setTimeRange(e.target.value as TimeRange)}
          >
            <option value="7">Siste 7 dager</option>
            <option value="30">Siste 30 dager</option>
          </select>
        </div>
      </div>

      <div className="kort-container">
        {/* RAD 1: Omsetning + Ordrer + Customers */}
        <div className="kpi-rad">
          <RevenueCard />
          <Orders />
          <Customers />
        </div>

        {/* RAD 2: Produkter solgt + Conversion Rate + Returandel */}
        <div className="kpi-rad">
          <ProductsSold />
          <ConversionRateCard />
          <Returns />
        </div>
      </div>

      {/* Sender valgt periode videre til salgsoversikten */}
      <SalesOverview timeRange={timeRange} />

      <Trend />
      <AnalyticsDashboard />
    </div>
  );
}

export default App;
