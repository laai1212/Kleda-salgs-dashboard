import { useState } from "react";
import "./CSS/AnalyticsDashboard.css";

type OrderStatus = "completed" | "processing" | "pending" | "cancelled";
type CartStatus = "active" | "idle";

type Order = {
  id: string;
  customer: string;
  product: string;
  category: string;
  amount: string;
  status: OrderStatus;
  date: string;
};

type Cart = {
  id: string;
  customer: string;
  email: string;
  items: string[];
  value: string;
  updated: string;
  status: CartStatus;
};

type MetricCardProps = {
  title: string;
  value: string;
  change: string;
  changePositive: boolean;
  icon: string;
};

const orders: Order[] = [
  {
    id: "ORD-001",
    customer: "John Smith",
    product: "Classic White T-Shirt",
    category: "Overdeler",
    amount: "Kr 29.99",
    status: "completed",
    date: "2025-11-26",
  },
  {
    id: "ORD-002",
    customer: "Sarah Johnson",
    product: "Slim Fit Jeans",
    category: "Underdeler",
    amount: "Kr 79.99",
    status: "processing",
    date: "2025-11-26",
  },
  {
    id: "ORD-003",
    customer: "Mike Davis",
    product: "Leather Belt",
    category: "Tilbehør",
    amount: "Kr 34.99",
    status: "completed",
    date: "2025-11-25",
  },
  {
    id: "ORD-004",
    customer: "Emily Brown",
    product: "Summer Dress",
    category: "Kjoler",
    amount: "Kr 89.99",
    status: "completed",
    date: "2025-11-25",
  },
  {
    id: "ORD-005",
    customer: "David Wilson",
    product: "Running Sneakers",
    category: "Sko",
    amount: "Kr 119.99",
    status: "pending",
    date: "2025-11-25",
  },
  {
    id: "ORD-006",
    customer: "Anna Lee",
    product: "Wool Coat",
    category: "Yttertøy",
    amount: "Kr 149.99",
    status: "completed",
    date: "2025-11-24",
  },
  {
    id: "ORD-007",
    customer: "James Taylor",
    product: "Cotton Hoodie",
    category: "Overdeler",
    amount: "Kr 54.99",
    status: "cancelled",
    date: "2025-11-24",
  },
];

const carts: Cart[] = [
  {
    id: "CART-101",
    customer: "Alex Thompson",
    email: "alex.t@email.com",
    items: ["Stripet poloskjorte (x2)", "Chinos-bukse (x1)"],
    value: "Kr 149.97",
    updated: "for 5 min siden",
    status: "active",
  },
  {
    id: "CART-102",
    customer: "Sophie Martinez",
    email: "sophie.m@email.com",
    items: ["Skinnveske (x1)", "Silkeskjerf (x1)"],
    value: "Kr 235.98",
    updated: "for 12 min siden",
    status: "active",
  },
  {
    id: "CART-103",
    customer: "Chris Johnson",
    email: "chris.j@email.com",
    items: ["Treningssokker (x3)", "Sports-BH (x2)"],
    value: "Kr 98.95",
    updated: "for 23 min siden",
    status: "active",
  },
  {
    id: "CART-104",
    customer: "Emma Wilson",
    email: "emma.w@email.com",
    items: ["Vinterjakke (x1)", "Strikkelue (x1)"],
    value: "Kr 274.98",
    updated: "for 1 time siden",
    status: "idle",
  },
];

const categories = [
  "Alle kategorier",
  "Overdeler",
  "Underdeler",
  "Tilbehør",
  "Kjoler",
  "Sko",
  "Yttertøy",
  "Treningstøy",
];

export function MetricCard({
  title,
  value,
  change,
  changePositive,
  icon,
}: MetricCardProps) {
  return (
    <div className="metric-card">
      <div className="metric-header">
        <h3>{title}</h3>
        <span className="metric-icon">{icon}</span>
      </div>
      <div className="metric-value">{value}</div>
      <div className={`metric-change ${changePositive ? "positive" : "negative"}`}>
        <span className="metric-change-arrow">↗</span>
        <span>{change}</span>
      </div>
      <div className="metric-description">fra forrige periode</div>
    </div>
  );
}

function statusClass(status: OrderStatus | CartStatus): string {
  return `status-pill status-${status}`;
}

function AnalyticsDashboard() {
  const [activeTab, setActiveTab] = useState<"orders" | "carts">("orders");
  const [selectedCategory, setSelectedCategory] =
    useState<string>("Alle kategorier");

  const filteredOrders = orders.filter(
    (order) =>
      selectedCategory === "Alle kategorier" ||
      order.category === selectedCategory
  );

  return (
    <div className="analytics-wrapper">
      <div className="tabs">
        <button
          className={`tab-button ${activeTab === "orders" ? "tab-active" : ""}`}
          onClick={() => setActiveTab("orders")}
        >
          Nylige ordre
        </button>
        <button
          className={`tab-button ${activeTab === "carts" ? "tab-active" : ""}`}
          onClick={() => setActiveTab("carts")}
        >
          Aktive handlekurver
        </button>
      </div>

      <div className="card">
        {activeTab === "orders" ? (
          <>
            <div className="card-header">
              <h2>Nylige ordre</h2>
              <p>De siste transaksjonene fra markedsplassen din</p>
            </div>
            <div className="filter-row">
              <span className="filter-label">Filtrer etter kategori:</span>
              <select
                className="category-select"
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
              >
                {categories.map((cat) => (
                  <option key={cat} value={cat}>
                    {cat}
                  </option>
                ))}
              </select>
            </div>
            <table className="data-table">
              <thead>
                <tr>
                  <th>Ordre-ID</th>
                  <th>Kunde</th>
                  <th>Produkt</th>
                  <th>Kategori</th>
                  <th>Beløp</th>
                  <th>Status</th>
                  <th>Dato</th>
                </tr>
              </thead>
              <tbody>
                {filteredOrders.map((order) => (
                  <tr key={order.id}>
                    <td>{order.id}</td>
                    <td>{order.customer}</td>
                    <td>{order.product}</td>
                    <td>
                      <span className="category-pill">{order.category}</span>
                    </td>
                    <td>{order.amount}</td>
                    <td>
                      <span className={statusClass(order.status)}>
                        {order.status}
                      </span>
                    </td>
                    <td>{order.date}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </>
        ) : (
          <>
            <div className="card-header">
              <h2>Aktive handlekurver</h2>
              <p>Følg med på hvilke varer kundene har i handlekurvene sine</p>
            </div>
            <table className="data-table">
              <thead>
                <tr>
                  <th>Handlekurv-ID</th>
                  <th>Kunde</th>
                  <th>Varer i handlekurv</th>
                  <th>Verdi på handlekurv</th>
                  <th>Sist oppdatert</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                {carts.map((cart) => (
                  <tr key={cart.id}>
                    <td>{cart.id}</td>
                    <td>
                      <div className="customer-cell">
                        <div>{cart.customer}</div>
                        <div className="customer-email">{cart.email}</div>
                      </div>
                    </td>
                    <td>
                      <ul className="items-list">
                        {cart.items.map((item) => (
                          <li key={item}>{item}</li>
                        ))}
                      </ul>
                    </td>
                    <td>{cart.value}</td>
                    <td>{cart.updated}</td>
                    <td>
                      <span className={statusClass(cart.status)}>
                        {cart.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </>
        )}
      </div>
    </div>
  );
}

export default AnalyticsDashboard;
