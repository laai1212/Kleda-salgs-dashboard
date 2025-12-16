import { useState } from "react";
import "./CSS/LoggInn.css";
import KledaLogo from "./assets/KledaLogo.png";
 
type LoggInnProps = {
  onLoginSuccess: () => void;
};
 
/* eneste innloggings mail og passord som logger inn til dashbord */
const GYLDIG_EPOST = "demo@kleda.no";
const GYLDIG_PASSORD = "dittPassord123";
 
export default function LoggInn({ onLoginSuccess }: LoggInnProps) {
  const [epost, setEpost] = useState("");
  const [passord, setPassord] = useState("");
  const [feil, setFeil] = useState("");
 
  function handleSubmit(event: React.FormEvent) {
  event.preventDefault();
 
  /* gjør epost ikke sensitiv for store/små bokstaver */
  const normalisertEpost = epost.trim().toLowerCase();
 
  if (normalisertEpost === GYLDIG_EPOST && passord === GYLDIG_PASSORD) {
    setFeil("");          /* fjerner feil melding */
    onLoginSuccess();     /* sier ifra til App.tsx at personen er innlogget */
  } else {
    setFeil("Feil brukernavn eller passord");
  }
}
 
  return (
    <div className="login-container">
      <div className="login-box">
        <img src={KledaLogo} alt="Kleda logo" className="logo" />
 
        <h2 className="login-title">Logg inn</h2>
 
        <form onSubmit={handleSubmit}>
          <label>Brukernavn</label>
          <input
            type="email"
            placeholder="din@mail.com"
            value={epost}
            onChange={(e) => setEpost(e.target.value)}
          />
 
          <label>Passord</label>
          <input
            type="password"
            placeholder="DittPassord123"
            value={passord}
            onChange={(e) => setPassord(e.target.value)}
          />
 
          {feil && <p className="login-error">{feil}</p>}
 
          <button type="submit" className="login-button">
            Logg inn
          </button>
        </form>
      </div>
    </div>
  );
}