import "./App.css";

function App() {
  return (
    <div className="app">
      <header className="app-header">
        <h1>Kleda Dashboard</h1>
        <p>Oversikt over nøkkeltall for butikkene</p>
      </header>

      <main className="app-main">
        <section className="metrics-grid">
          <div className="metric-card">
            <h2>Visninger</h2>
            <p className="metric-value">12 340</p>
            <p className="metric-sub">Siste 30 dager</p>
          </div>

          <div className="metric-card">
            <h2>Salg</h2>
            <p className="metric-value">342</p>
            <p className="metric-sub">Fullførte ordre</p>
          </div>

          <div className="metric-card">
            <h2>Omsetning</h2>
            <p className="metric-value">124 000 kr</p>
            <p className="metric-sub">Estimert brutto</p>
          </div>

          <div className="metric-card">
            <h2>Konverteringsrate</h2>
            <p className="metric-value">2,8%</p>
            <p className="metric-sub">Besøk → kjøp</p>
          </div>
        </section>

        <section className="chart-placeholder">
          <h2>Salg over tid</h2>
          <p>Her kan vi senere legge inn en faktisk graf.</p>
          <div className="chart-box">[Graf placeholder]</div>
        </section>
      </main>
    </div>
  );
}

export default App;
