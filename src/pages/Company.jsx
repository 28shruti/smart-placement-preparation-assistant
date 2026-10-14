import React, { useState } from "react";

export default function Company() {
  const [company, setCompany] = useState("");
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);
  const [locked, setLocked] = useState(false); // prevents double API calls

  async function handleSearch() {
    if (locked || !company.trim()) return;
    setLocked(true);
    setLoading(true);
    setResult(null);

    try {
      const response = await fetch("http://localhost:5000/company-ai", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ company }),
      });

      const data = await response.json();
      setResult(data);
    } catch (err) {
      console.error("❌ Fetch error:", err);
    }

    setLoading(false);
    setLocked(false);
  }

  return (
    <div
      style={{
        minHeight: "100vh",
        padding: "40px 30px",
        fontFamily: "Inter, sans-serif",
        background: "linear-gradient(180deg,var(--bg1),var(--bg2))",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      {/* HEADER */}
      <h1
        style={{
          fontSize: "2.5rem",
          fontWeight: "700",
          marginBottom: 10,
          color: "#333",
        }}
      >
         AI Company Prep Assistant
      </h1>

      <p
        style={{
          opacity: 0.8,
          maxWidth: 700,
          textAlign: "center",
          fontSize: "1rem",
          marginBottom: 35,
          lineHeight: 1.5,
        }}
      >
        Enter a company name and instantly get curated study material, courses, certifications,
        interview prep questions and job leads — beautifully organized for you.
      </p>

      {/* SEARCH BAR CARD */}
      <div
        style={{
          background: "rgba(255,255,255,0.75)",
          backdropFilter: "blur(12px)",
          padding: "25px 30px",
          width: "100%",
          maxWidth: 600,
          borderRadius: 18,
          boxShadow: "0 8px 30px rgba(0,0,0,0.08)",
          border: "1px solid rgba(255,255,255,0.5)",
        }}
      >
        <input
          type="text"
          placeholder="Type company name…"
          value={company}
          onChange={(e) => setCompany(e.target.value)}
          style={{
            width: "100%",
            padding: "16px 18px",
            borderRadius: 14,
            border: "1px solid #ddd",
            fontSize: 16,
            background: "#fff",
            marginBottom: 14,
            outline: "none",
          }}
        />

        <button
          onClick={handleSearch}
          style={{
            width: "100%",
            padding: "14px 0",
            background: "linear-gradient(90deg,var(--accent),var(--accent2))",
            color: "white",
            borderRadius: 14,
            border: "none",
            fontWeight: "600",
            fontSize: 17,
            cursor: "pointer",
            transition: "0.2s",
            boxShadow: "0 4px 14px rgba(0, 102, 255, 0.3)",
          }}
          onMouseOver={(e) => (e.target.style.transform = "scale(1.03)")}
          onMouseOut={(e) => (e.target.style.transform = "scale(1)")}
        >
          {loading ? "Fetching…" : "Generate Prep Guide"}
        </button>
      </div>

      {/* RESULTS */}
      {result && (
        <div
          style={{
            marginTop: 40,
            width: "100%",
            maxWidth: 1000,
            background: "rgba(255,255,255,0.8)",
            padding: "25px 30px",
            borderRadius: 20,
            boxShadow: "0 8px 35px rgba(0,0,0,0.09)",
            border: "1px solid rgba(255,255,255,0.5)",
          }}
        >
          {result.error ? (
            <p style={{ color: "red", fontWeight: 600 }}>{result.error}</p>
          ) : (
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: 25,
              }}
            >
              {Object.entries(result).map(([section, items]) => (
                <div
                  key={section}
                  style={{
                    background: "white",
                    borderRadius: 16,
                    padding: "18px 20px",
                    border: "1px solid #eee",
                    boxShadow: "0 4px 20px rgba(0,0,0,0.05)",
                  }}
                >
                  <h2
                    style={{
                      color: "#b633ff",
                      fontSize: 18,
                      fontWeight: 600,
                      marginBottom: 10,
                      textTransform: "capitalize",
                    }}
                  >
                    {section.replace(/_/g, " ")}
                  </h2>

                  {Array.isArray(items) && items.length > 0 ? (
                    <ul style={{ paddingLeft: 20, margin: 0, lineHeight: 1.6 }}>
                      {items.map((i, idx) => (
                        <li key={idx}>{i}</li>
                      ))}
                    </ul>
                  ) : (
                    <p style={{ opacity: 0.6 }}>No data available.</p>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
}
