import React, {useState} from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { Sun, Moon } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Shell({children}) {
  const [theme, setTheme] = useState(localStorage.getItem('spa_theme') || 'light');
  const navigate = useNavigate();

  React.useEffect(()=> {
    document.body.dataset.theme = theme === 'dark' ? 'dark' : 'light';
    localStorage.setItem('spa_theme', theme);
  },[theme]);

  return (
    <div className="app-shell">

      {/* ---------------- NAVBAR ---------------- */}
      <div className="header card">
        <div className="brand">
          <div className="logo">SPA</div>
          <div>
            <div style={{fontWeight:700}}>Smart Placement Assistant</div>
          </div>
        </div>

        <div style={{display:'flex', alignItems:'center', gap:12}}>
          
          {/* NAV LINKS */}
          <nav className="nav">
            <NavLink to="/" end style={{color: "white"}}>Home</NavLink>
            <NavLink to="/DashboardHome">Dashboard</NavLink>
            <NavLink to="/aptitude">Aptitude</NavLink>
            <NavLink to="/coding">Coding</NavLink>
            <NavLink to="/interview">Interview</NavLink>
            <NavLink to="/resume">Resume</NavLink>
            <NavLink to="/tracker">Tracker</NavLink>
          </nav>

          {/* RIGHT BUTTONS */}
          <div style={{display:'flex', gap:8, alignItems:'center'}}>

            {/* LOGIN button styled like Start Practice */}
            <a
              className="cta"
              onClick={() => navigate("/login")}
              style={{
                cursor: "pointer",
                textDecoration: "none",
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                padding: "10px 20px",
                borderRadius: "12px"
              }}
            >
              Login
            </a>

            {/* <button 
              className="btn small" 
              onClick={() => navigate('/tracker')}
            >
              My Progress
            </button> */}

            <button 
              className="btn small" 
              onClick={() => setTheme(t => t === 'dark' ? 'light' : 'dark')}
            >
              {theme === 'dark' ? <Sun size={16}/> : <Moon size={16}/>}
            </button>

          </div>
        </div>
      </div>

      {/* ---------------- PAGE CONTENT ---------------- */}
      <main className="container">
        <AnimatePresence mode="wait">
          <motion.div
            initial={{opacity:0, y:10}}
            animate={{opacity:1, y:0}}
            exit={{opacity:0, y:-8}}
            transition={{duration:0.35}}
          >
            {children}
          </motion.div>
        </AnimatePresence>
      </main>

      {/* ---------------- FOOTER ---------------- */}
      {/* <div className="footer small">
        Made with ❤️ • Frontend only demo • Built for college project
      </div> */}

    </div>
  );
}
