import { useMemo, useState } from "react";
import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Tooltip,
  Legend,
  BarElement,
} from "chart.js";
import { Line, Bar } from "react-chartjs-2";
import "./CSS/SalesOverview.css";

/* Registrerer alt vi trenger fra Chart.js */
ChartJS.register(
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Tooltip,
  Legend,
  BarElement
);

/* visningstype */
type ViewType = "daily" | "monthly";
type TimeRange = "7" | "30";

/* Faste og realistiske tall */
const DAILY_VALUES_7: number[] = [
  2400,
  2750,
  2600,
  3100,
  2800,
  2950,
  3050,
];

const DAILY_VALUES_30: number[] = [
  2400,
  2750,
  2600,
  3100,
  2800,
  2950,
  3050,
  2500,
  2850,
  2700,
  3000,
  2650,
  2900,
  3100,
  2550,
  2750,
  2600,
  2950,
  2850,
  3050,
  2500,
  2700,
  2800,
  3000,
  2650,
  2900,
  3100,
  2550,
  2750,
  2950,
];

/* Lager etiketter for de siste N dagene */
function hentSisteXDagerLabels(antallDager: number): string[] {
  const labels: string[] = [];
  const today = new Date();

  for (let i = antallDager - 1; i >= 0; i--) {
    const d = new Date();
    d.setDate(today.getDate() - i);

    const label = d.toLocaleDateString("nb-NO", {
      day: "numeric",
      month: "short",
    });

    labels.push(label);
  }

  return labels;
}

/* Lager daglige verdier for valgt periode (7 eller 30 dager) */
function hentDagligeVerdier(timeRange: TimeRange): number[] {
  if (timeRange === "7") {
    return DAILY_VALUES_7;
  }
  return DAILY_VALUES_30;
}

/* månedlig visning */

const MONTHLY_LABELS: string[] = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "Mai",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Okt",
  "Nov",
  "Des",
];

/* Månedlige tall i NOK */
const MONTHLY_VALUES: number[] = [
  28000,
  31000,
  34000,
  41200,
  39000,
  44500,
  43000,
  44000,
  45500,
  48500,
  47000,
  52000,
];

type SalesOverviewProps = {
  timeRange: TimeRange;
};

export default function SalesOverview({ timeRange }: SalesOverviewProps) {
  /* Hvilken visning som er valgt, daglig eller månedlig */
  const [view, setView] = useState<ViewType>("daily");

  /* Data for daglig (avhenger nå av timeRange) */
  const dailyData = useMemo(
    () => ({
      labels: hentSisteXDagerLabels(timeRange === "7" ? 7 : 30),
      datasets: [
        {
          label: "Daglig salg",
          data: hentDagligeVerdier(timeRange),
          borderColor: " #f24a67", /* rød linje */
          backgroundColor: "rgba(239, 68, 68, 0.15)",
          borderWidth: 3,
          pointRadius: 4,
          tension: 0.4, 
        },
      ],
    }),
    [timeRange]
  );

  /* Data for månedlig (stolpediagram) */
  const monthlyData = useMemo(
    () => ({
      labels: MONTHLY_LABELS,
      datasets: [
        {
          label: "Månedlig salg",
          data: MONTHLY_VALUES,
          backgroundColor: " #f24a67", /* fargevalg for stolpe */
          borderRadius: 6,
        },
      ],
    }),
    []
  );

  /* Innstillinger for daglig-grafen */
  const dailyOptions: any = {
    responsive: true,
    interaction: {
      mode: "index",
      intersect: false,
    },
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        enabled: true,
        callbacks: {
          label: (ctx: any) => {
            const value = ctx.parsed.y as number;
            return `Salg: ${value.toLocaleString("nb-NO")} NOK`;
          },
        },
      },
    },
    scales: {
      y: {
        ticks: {
          color: "#6b7280",
          callback: (value: any) =>
            `kr ${Number(value).toLocaleString("nb-NO")}`,
        },
        grid: {
          color: "#e5e7eb",
        },
      },
      x: {
        ticks: {
          color: "#6b7280",
        },
        grid: {
          color: "#f3f4f6",
        },
      },
    },
  };

  /* Innstillinger for månedlig-grafen (stolper) */
  const monthlyOptions: any = {
    responsive: true,
    interaction: {
      mode: "index",
      intersect: false,
    },
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        enabled: true,
        callbacks: {
          label: (ctx: any) => {
            const value = ctx.parsed.y as number;
            return `Salg: ${value.toLocaleString("nb-NO")} NOK`;
          },
        },
      },
    },
    scales: {
      y: {
        ticks: {
          color: "#6b7280",
          callback: (value: any) => {
            const v = Number(value);
            return `kr ${v / 1000}k`;
          },
        },
        grid: {
          color: "#e5e7eb",
        },
      },
      x: {
        ticks: {
          color: "#6b7280",
        },
        grid: {
          color: "#f3f4f6",
        },
      },
    },
  };

  return (
    <div className="sales-card">
      <h2 className="sales-title">Salgsoversikt</h2>

      <p className="sales-subtitle">
        {view === "daily"
          ? "Daglig salg for den valgte perioden"
          : "Månedlig salg for den valgte perioden"}
      </p>

      {/* Knapper for å bytte mellom daglig visning og månedlig visning */}
      <div className="sales-tabs">
        <button
          type="button"
          className={`sales-tab ${view === "daily" ? "sales-tab-active" : ""}`}
          onClick={() => setView("daily")}
        >
          Daglig visning
        </button>

        <button
          type="button"
          className={`sales-tab ${view === "monthly" ? "sales-tab-active" : ""}`}
          onClick={() => setView("monthly")}
        >
          Månedlig visning
        </button>
      </div>

      {/* Viser linjegraf eller stolpediagram avhengig av valgt visning */}
      {view === "daily" ? (
        <Line data={dailyData} options={dailyOptions} />
      ) : (
        <Bar data={monthlyData} options={monthlyOptions} />
      )}
    </div>
  );
}
