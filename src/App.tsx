import { useState } from "react";

export default function App() {
  const [query, setQuery] = useState("");
  const [results] = useState([
    "Antonio Marchello – Milano (2000 ricerche)",
    "Antonio Marchello – Roma (1500 ricerche)",
    "Antonio Marchello – Buenos Aires (800 ricerche)",
  ]);
  const [top10] = useState([
    "Elon Musk",
    "Apple Inc.",
    "Intelligenza Artificiale",
    "Lionel Messi",
    "COP 29",
    "Taylor Swift",
    "Google",
    "Nvidia",
    "Netflix",
    "Formula 1",
  ]);

  return (
    <div style={{ display: "flex", minHeight: "100vh", fontFamily: "Arial" }}>
      <div
        style={{
          width: "250px",
          padding: "20px",
          borderRight: "1px solid #ddd",
          backgroundColor: "#f9f9f9",
        }}
      >
        <h2>WeURL</h2>
        <input
          style={{ width: "100%", padding: "8px", marginTop: "10px" }}
          placeholder="Cerca persone, aziende..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <h4 style={{ marginTop: "20px" }}>Periodo</h4>
        <button>Oggi</button>
        <button>Ultima settimana</button>
        <button>Ultimo mese</button>
        <h4 style={{ marginTop: "20px" }}>Località</h4>
        <input placeholder="Scegli località" style={{ width: "100%" }} />
        <h4 style={{ marginTop: "20px" }}>Top 10 Oggi</h4>
        <ol>
          {top10.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ol>
        <button style={{ marginTop: "10px" }}>Vedi Top 100 →</button>
      </div>
      <div style={{ flex: 1, padding: "20px" }}>
        <h1>Risultati per: {query || "[Nessuna ricerca]"}</h1>
        {results.map((res, i) => (
          <div
            key={i}
            style={{
              marginTop: "10px",
              padding: "10px",
              border: "1px solid #ccc",
              borderRadius: "8px",
            }}
          >
            {res}
          </div>
        ))}
      </div>
    </div>
  );
}
