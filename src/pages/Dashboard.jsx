import React, { useEffect, useState } from "react";
import { auth } from "../firebase";
import { onAuthStateChanged } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

export default function Dashboard() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (user) => {
      if (!user) navigate("/login");
      else setLoading(false);
    });

    return () => unsub();
  }, [navigate]);

  if (loading) {
    return (
      <div style={{ padding: 30, textAlign: "center", fontSize: 20 }}>
        Loading your dashboard…
      </div>
    );
  }

  return (
    <div
      style={{
        width: "100%",         // ⬅ FULL WIDTH
        minHeight: "100vh",
        padding: "40px 40px",  // ⬅ SPACE FROM SIDES BUT STILL WIDE
        fontFamily: "Inter, sans-serif",
        background: "var(--bg2)"
      }}
    >
      {/* HERO FULL WIDTH */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.35 }}
        style={{
          width: "100%",                                     // ⬅ FULL WIDTH
          background: "linear-gradient(135deg,#6a5af9,#7b5cff)",
          padding: "40px 50px",
          borderRadius: "25px",
          color: "white",
          marginBottom: "40px",
          boxShadow: "0 10px 30px rgba(0,0,0,0.15)",
        }}
      >
        <h1 style={{ fontSize: "34px", margin: 0 }}>Welcome back!</h1>
        <p style={{ marginTop: "10px", fontSize: "17px", opacity: 0.9 }}>
          Your dashboard is ready — let’s keep progressing!
        </p>
      </motion.div>

      {/* FULL WIDTH GRID */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
          gap: "25px",
          width: "100%",       // ⬅ FULL WIDTH GRID
          marginBottom: "40px",
        }}
      >
        {[
          { title: "Daily Streak", value: "7 Days " },
          { title: "Aptitude Solved", value: "120 Questions" },
          { title: "Coding Score", value: "86%" },
          { title: "Interview Prep", value: "Level 3" },
          { title: "Resume Strength", value: "80%" },
          { title: "Companies Applied", value: "5" },
        ].map((card, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            style={{
              background: "white",
              padding: "30px",
              borderRadius: "22px",
              boxShadow: "0 6px 20px rgba(0,0,0,0.06)",
            }}
          >
            <h3 style={{ fontSize: "18px", marginBottom: "10px" }}>
              {card.title}
            </h3>
            <div
              style={{
                fontSize: "24px",
                fontWeight: 700,
                color: "#6a5af9",
              }}
            >
              {card.value}
            </div>
          </motion.div>
        ))}
      </div>

      {/* PROGRESS SECTION — ALSO FULL WIDTH */}
      <div
        style={{
          width: "100%",                     // ⬅ FULL WIDTH
          background: "white",
          padding: "35px",
          borderRadius: "22px",
          boxShadow: "0 6px 20px rgba(0,0,0,0.06)",
          marginBottom: "40px",
        }}
      >
        <h2 style={{ marginBottom: "20px" }}>Your Progress</h2>

        {[
          { label: "Aptitude", pct: 60 },
          { label: "Coding Skills", pct: 45 },
          { label: "Interview Prep", pct: 30 },
        ].map((p, i) => (
          <div key={i} style={{ marginBottom: "22px" }}>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                marginBottom: 8,
                fontSize: 15,
              }}
            >
              <span>{p.label}</span>
              <span>{p.pct}%</span>
            </div>
            <div
              style={{
                height: "12px",
                background: "#eee",
                borderRadius: "6px",
              }}
            >
              <div
                style={{
                  width: `${p.pct}%`,
                  height: "100%",
                  background: "linear-gradient(90deg,#6a5af9,#7b5cff)",
                  borderRadius: "6px",
                }}
              />
            </div>
          </div>
        ))}
      </div>

      {/* TARGETS FULL WIDTH */}
      <div
        style={{
          width: "100%",
          background: "white",
          padding: "32px",
          borderRadius: "22px",
          boxShadow: "0 6px 20px rgba(0,0,0,0.06)",
          marginBottom: "40px",
        }}
      >
        <h2>Upcoming Targets</h2>
        <ul style={{ marginTop: 15, lineHeight: "1.8", fontSize: "16px" }}>
          <li>Finish 20 aptitude questions today</li>
          <li>Practice 2 medium-level coding problems</li>
          <li>Revise OOP & DBMS concepts</li>
          <li>Update resume’s project section</li>
        </ul>
      </div>
    </div>
  );
}
