import React, {useState, useEffect} from 'react';
import StatCard from '../components/StatCard';

export default function Tracker(){
  const [score,setScore] = useState( parseInt(localStorage.getItem('spa_score')||'30') );
  useEffect(()=> localStorage.setItem('spa_score', String(score)), [score]);

  return (
    <div className="grid">
      <div>
        <div className="card">
          <h2>Progress Tracker</h2>
          <p className="small">Demo tracker stored locally in your browser.</p>
          <div style={{marginTop:12}}>
            <div className="card">
              <div style={{display:'flex',justifyContent:'space-between',alignItems:'center'}}>
                <div>
                  <strong>Overall Readiness</strong>
                  <div className="small">Keep practicing to increase this score</div>
                </div>
                <div style={{width:160}}>
                  <div className="progress"><i style={{width: score+'%'}}></i></div>
                  <div className="small" style={{textAlign:'right',marginTop:6}}>{score}%</div>
                </div>
              </div>
              <div style={{marginTop:12}}>
                <button className="btn small" onClick={()=>setScore(s=>Math.min(100,s+10))}>+ Practice</button>
                <button className="btn small" style={{marginLeft:8}} onClick={()=>setScore(s=>Math.max(0,s-10))}>- Undo</button>
              </div>
            </div>
            <div style={{marginTop:12}}>
              <StatCard title="Aptitude" value="Practice more" pct={score-10} />
              <div style={{height:8}} />
              <StatCard title="Coding" value="Keep solving" pct={Math.max(10, score-30)} />
            </div>
          </div>
        </div>
      </div>

      <aside>
        <div className="card">
          <h4>Quick Actions</h4>
          <p className="small">Start a 10-min daily quiz to boost score.</p>
          <button className="btn small" onClick={()=>{alert('Start a quick quiz (demo)')}}>Start Quick Quiz</button>
        </div>
      </aside>
    </div>
  )
}