import React, { useState } from 'react';
import './App.css';

function App() {
  const [query, setQuery] = useState('');
  const [results] = useState([
    "Antonio Marchello – Milano (2000 ricerche)",
    "Antonio Marchello – Roma (1500 ricerche)",
    "Antonio Marchello – Buenos Aires (800 ricerche)"
  ]);
  const [top10] = useState([
    "Elon Musk", "Apple Inc.", "Intelligenza Artificiale", "Lionel Messi", "COP 29",
    "Taylor Swift", "Google", "Nvidia", "Netflix", "Formula 1"
  ]);

  return (
    <div className="container">
      <aside className="sidebar">
        <h2>WeURL</h2>
        <input
          className="input"
          placeholder="Cerca persone, aziende..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <h4>Periodo</h4>
        <button>Oggi</button>
        <button>Ultima settimana</button>
        <button>Ultimo mese</button>
        <h4>Località</h4>
        <input className="input" placeholder="Scegli località" />
        <h4>Top 10 Oggi</h4>
        <ol>{top10.map((item, i) => <li key={i}>{item}</li>)}</ol>
        <button>Vedi Top 100 →</button>
      </aside>
      <main className="results">
        <h1>Risultati per: {query || "[Nessuna ricerca]"}</h1>
        {results.map((r, i) => (
          <div key={i} className="result-card">{r}</div>
        ))}
      </main>
    </div>
  );
}

export default App;
