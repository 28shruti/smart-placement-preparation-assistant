import React from "react";

export default function Resume() {
  const tips = [
    "Keep it to 1 page for freshers.",
    "Use clear headings and bullet points.",
    "Quantify achievements wherever possible.",
    "Include projects with short, focused descriptions.",
  ];

  const templates = [
    {
      name: "Minimal Modern",
      desc: "Simple, elegant, ATS-friendly 1-page format.",
      file: "/templates/minimal.docx",
      preview: "/templates/minimal.png",
    },
    {
      name: "Corporate Professional",
      desc: "Clean, structured, two-column layout.",
      file: "/templates/corporate.docx",
      preview: "/templates/corporate.png",
    },
    {
      name: "Creative Tech Resume",
      desc: "Stylish layout with strong project focus.",
      file: "/templates/creative-tech.docx",
      preview: "/templates/creative-tech.png",
    },
    {
      name: "FAANG SWE Resume",
      desc: "Powerful, metrics-driven software engineer template.",
      file: "/templates/swe-faang.docx",
      preview: "/templates/swe-faang.png",
    },
    {
      name: "Student Basic Resume",
      desc: "Super simple beginner-friendly template.",
      file: "/templates/student-basic.docx",
      preview: "/templates/student-basic.png",
    },
    {
      name: "Infographic Resume",
      desc: "Aesthetic and modern design placeholders.",
      file: "/templates/infographic.docx",
      preview: "/templates/infographic.png",
    },
  ];

  return (
    <div style={{ padding: "30px" }}>
      <h2 style={{ marginBottom: "20px", fontSize: "28px", fontWeight: 700 }}>
        Resume Builder & Templates
      </h2>

      {/* ---------------- Resume Tips ---------------- */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "20px",
          marginBottom: "40px",
        }}
      >
        {/* Checklist */}
        <div
          className="card"
          style={{
            padding: "20px",
            borderRadius: "16px",
          }}
        >
          <strong style={{ fontSize: "18px" }}>Resume Checklist</strong>
          <ul style={{ marginTop: "12px" }}>
            {tips.map((t, i) => (
              <li
                key={i}
                className="small"
                style={{ marginBottom: "6px", fontSize: "14px" }}
              >
                {t}
              </li>
            ))}
          </ul>
        </div>

        {/* Sample Structure */}
        <div
          className="card"
          style={{
            padding: "20px",
            borderRadius: "16px",
          }}
        >
          <strong style={{ fontSize: "18px" }}>Sample Structure</strong>

          <div style={{ marginTop: "12px", fontSize: "14px" }}>
            <strong>Name</strong> | Student • Email • Phone
          </div>

          <div className="card small" style={{ marginTop: "12px" }}>
            <strong>Education</strong>
            <div className="small">B.Tech — XYZ College — 2025</div>
          </div>

          <div className="card small" style={{ marginTop: "12px" }}>
            <strong>Skills</strong>
            <div className="small">DSA • React • DBMS • Python</div>
          </div>
        </div>
      </div>

      {/* ---------------- Resume Templates ---------------- */}
      <h3 style={{ marginBottom: "15px", fontSize: "24px", fontWeight: 600 }}>
        Resume Templates
      </h3>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
          gap: "24px",
        }}
      >
        {templates.map((temp, index) => (
          <div
            key={index}
            className="card"
            style={{
              padding: "18px",
              borderRadius: "18px",
              boxShadow: "0 6px 18px rgba(0,0,0,0.05)",
              transition: "0.2s",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateY(-4px)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "translateY(0px)";
            }}
          >
            {/* Template Title */}
            <strong style={{ fontSize: "18px" }}>{temp.name}</strong>
            <p className="small" style={{ marginTop: "6px", fontSize: "14px" }}>
              {temp.desc}
            </p>

            {/* Image Preview */}
            <img
              src={temp.preview}
              alt={temp.name}
              style={{
                width: "100%",
                height: "200px",
                objectFit: "cover",
                borderRadius: "12px",
                marginTop: "12px",
                border: "1px solid #ddd",
              }}
            />

            {/* Download Button */}
            <a
              href={temp.file}
              download
              style={{
                marginTop: "15px",
                display: "block",
                padding: "10px 16px",
                borderRadius: "10px",
                background: "linear-gradient(90deg,#6a5af9,#7b5cff)",
                color: "#fff",
                textDecoration: "none",
                fontSize: "14px",
                fontWeight: "600",
                textAlign: "center",
                boxShadow: "0 4px 12px rgba(99,91,255,0.25)",
              }}
            >
              Download Template
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}
