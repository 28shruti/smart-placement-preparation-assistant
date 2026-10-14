import React, { useState } from "react";
import { auth } from "../firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  async function handleLogin(e) {
    e.preventDefault();
    setLoading(true);
    setErrorMsg("");

    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate("/dashboard"); // redirect after login
    } catch (err) {
      console.error(err);
      setErrorMsg(err.message);
    }

    setLoading(false);
  }

  return (
    <div
      style={{
        paddingTop: "50px",
        paddingBottom: "40px",
        display: "flex",
        justifyContent: "center",
        background: "linear-gradient(180deg,var(--bg1),var(--bg2))",
        minHeight: "auto",
        fontFamily: "Inter, sans-serif",
      }}
    >
      <div
        style={{
          width: "92%",
          maxWidth: "400px",
          background: "rgba(255, 255, 255, 0.9)",
          padding: "35px 32px",
          borderRadius: "18px",
          border: "1px solid #e5e7eb",
          boxShadow: "0 12px 28px rgba(0, 0, 0, 0.06)",
          backdropFilter: "blur(6px)",
        }}
      >
        <h2
          style={{
            textAlign: "center",
            margin: 0,
            marginBottom: 25,
            fontSize: "26px",
            fontWeight: 700,
            color: "#222",
          }}
        >
          Welcome!
        </h2>

        {errorMsg && (
          <p style={{ color: "red", marginBottom: 15, fontSize: 14 }}>
            {errorMsg}
          </p>
        )}

        <form onSubmit={handleLogin}>
          <label style={{ fontSize: 14, color: "#444" }}>Email</label>
          <input
            type="email"
            required
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={{
              width: "100%",
              padding: "12px 14px",
              marginTop: 6,
              marginBottom: 18,
              borderRadius: "10px",
              border: "1.4px solid #d1d5db",
              fontSize: 15,
              background: "#fff",
              outline: "none",
            }}
          />

          <label style={{ fontSize: 14, color: "#444" }}>Password</label>
          <input
            type="password"
            required
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={{
              width: "100%",
              padding: "12px 14px",
              marginTop: 6,
              marginBottom: 22,
              borderRadius: "10px",
              border: "1.4px solid #d1d5db",
              fontSize: 15,
              background: "#fff",
              outline: "none",
            }}
          />

          <button
            type="submit"
            disabled={loading}
            className="cta"
            style={{
              width: "100%",
              padding: "12px 0",
              borderRadius: "10px",
              border: "none",
              fontSize: "16px",
              fontWeight: 600,
              cursor: "pointer",
              transition: ".2s",
            }}
          >
            {loading ? "Logging in…" : "Login"}
          </button>
        </form>

        <p
          style={{
            textAlign: "center",
            marginTop: 18,
            fontSize: 14,
            color: "#555",
          }}
        >
          Don't have an account?{" "}
          <a href="/signup" style={{ color: "#4b7bec", fontWeight: 600 }}>
            Sign up
          </a>
        </p>
      </div>
    </div>
  );
}
