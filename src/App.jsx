import { useState } from "react";
import "./App.css";

function App() {
  const [bug, setBug] = useState("");
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);

  const analyzeBug = () => {
    if (!bug.trim()) {
      alert("Please enter a bug report.");
      return;
    }

    setLoading(true);
    setResult(null);

    setTimeout(() => {
      setResult({
        evidence: [
          "src/auth.js — authentication token restoration",
          "tests/auth.test.js — refresh authentication test failed",
          "Recent commit — authentication storage logic changed"
        ],
        rootCause:
          "The authentication token is not restored from persistent storage before the dashboard initializes.",
        fix:
          "Restore the saved authentication token before initializing the authenticated application state.",
        regression:
          "Add a regression test that refreshes the application and verifies that the authenticated session remains active.",
        verification: "3/3 regression tests passed"
      });

      setLoading(false);
    }, 1500);
  };

  return (
    <div className="app">
      <header>
        <h1>RootCause AI</h1>
        <p>From Bug Report to Verified Fix</p>
      </header>

      <main>
        <div className="card">
          <h2>🐞 Bug Report</h2>

          <textarea
            value={bug}
            onChange={(e) => setBug(e.target.value)}
            placeholder="Describe the software bug..."
          />

          <button onClick={analyzeBug}>
            {loading ? "Analyzing..." : "Analyze Bug"}
          </button>
        </div>

        {result && (
          <>
            <div className="card">
              <h2>🔎 Evidence</h2>
              {result.evidence.map((item, i) => (
                <p key={i}>• {item}</p>
              ))}
            </div>

            <div className="card">
              <h2>🎯 Root Cause</h2>
              <p>{result.rootCause}</p>
            </div>

            <div className="card">
              <h2>🔧 Proposed Fix</h2>
              <p>{result.fix}</p>
            </div>

            <div className="card">
              <h2>🧪 Regression Test</h2>
              <p>{result.regression}</p>
            </div>

            <div className="card verification">
              <h2>✅ Verification</h2>
              <p>{result.verification}</p>
            </div>
          </>
        )}
      </main>
    </div>
  );
}

export default App;