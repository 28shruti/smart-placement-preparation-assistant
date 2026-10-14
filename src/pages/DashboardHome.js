import React from 'react';
import StatCard from '../components/StatCard';
import { motion } from 'framer-motion';
import { useNavigate } from "react-router-dom";


export default function Home(){
    const navigate = useNavigate();

    

  return (
    <div className="grid">
      <div>
        <div className="card hero">
          <div className="left">
            <h1 style={{margin:0}}>Crack placements with confidence</h1>
            <p className="small">Personalized practice, mock quizzes, coding drills and interview flashcards — all in one interactive UI.</p>
           <div style={{marginTop:12, display:'flex', gap:12}}>
  <a className="cta" href="/aptitude">Start Practice</a>

  <button className="cta" onClick={() => navigate("/company")}>
  AI Recommendations
</button>


</div>

            <div className="section">
              <div style={{display:'grid',gridTemplateColumns:'repeat(3,1fr)',gap:12}}>
                <div className="card small">
                  <strong>Daily Quiz</strong>
                  <div className="small">10 questions • 10 mins</div>
                </div>
                <div className="card small">
                  <strong>Coding Drills</strong>
                  <div className="small">Topic-wise practice</div>
                </div>
                <div className="card small">
                  <strong>Mock Interviews</strong>
                  <div className="small">HR + Technical</div>
                </div>
              </div>
            </div>
          </div>
          <div style={{width:300}}>
            <div className="card small">
              <strong>Tip of the day</strong>
              <p className="small">Break problems into smaller parts and code the simplest working case first.</p>
            </div>
            <div style={{height:12}} />
            <StatCard title="Aptitude" value="Practice consistency" pct={60} />
            <div style={{height:12}} />
            <StatCard title="Coding" value="Focus on DS" pct={45} />
          </div>
        </div>

        <div className="section">
          <h3>Key Features</h3>
          <div className="card-grid">
            <div className="card">Interactive quizzes with instant feedback</div>
            <div className="card">Coding problem cards + mock editor</div>
            <div className="card">Interview flashcards and HR templates</div>
            <div className="card">Resume tips, templates & checklist</div>
          </div>
        </div>
      </div>

      <aside>
        <div className="card">
          <h4>Upcoming Targets</h4>
          <ul>
            <li>Amazon - Aptitude</li>
            <li>Infosys - Coding</li>
            <li>Google - System Design (prepare)</li>
          </ul>
        </div>

        <div style={{height:12}} />
        <div className="card">
          <h4>Motivation</h4>
          <p className="small">"Little progress each day adds up to big results."</p>
        </div>
      </aside>
    </div>
  )
}