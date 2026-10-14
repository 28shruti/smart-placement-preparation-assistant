import React, { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";
import { useNavigate } from "react-router-dom";

export default function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSignup = async (e) => {
    e.preventDefault();
    setError("");

    try {
      await createUserWithEmailAndPassword(auth, email, password);
      navigate("/login"); // redirect to login page
    } catch (err) {
      setError("Firebase: " + err.message);
    }
  };

  return (
    <div
      style={{
        paddingTop: "50px",
        paddingBottom: "40px",
        display: "flex",
        justifyContent: "center",
        background: "linear-gradient(180deg,var(--bg1),var(--bg2))",
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
        }}
      >
        <h2
          style={{
            textAlign: "center",
            marginBottom: 25,
            fontSize: "26px",
            fontWeight: 700,
          }}
        >
          Create Account
        </h2>

        {error && (
          <p style={{ color: "red", marginBottom: 10, textAlign: "center" }}>
            {error}
          </p>
        )}

        <form onSubmit={handleSignup}>
          <label>Email</label>
          <input
            type="email"
            required
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={{
              width: "100%",
              padding: "12px 14px",
              marginBottom: 18,
              borderRadius: "10px",
              border: "1.4px solid #d1d5db",
              background: "#fff",
            }}
          />

          <label>Password</label>
          <input
            type="password"
            required
            placeholder="Create a password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={{
              width: "100%",
              padding: "12px 14px",
              marginBottom: 22,
              borderRadius: "10px",
              border: "1.4px solid #d1d5db",
              background: "#fff",
            }}
          />

          <button
            type="submit"
            style={{
              width: "100%",
              padding: "12px 0",
              borderRadius: "10px",
              background: "#4b7bec",
              border: "none",
              color: "#fff",
              fontSize: "16px",
              fontWeight: 600,
              cursor: "pointer",
            }}
          >
            Sign Up
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
          Already have an account?{" "}
          <a href="/login" style={{ color: "#4b7bec", fontWeight: 600 }}>
            Login
          </a>
        </p>
      </div>
    </div>
  );
}
