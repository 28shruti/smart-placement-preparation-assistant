import React, {useState} from 'react';

const problems = [
  {title:'Reverse String', diff:'Easy', desc:'Reverse a string input.'},
  {title:'Two Sum', diff:'Easy', desc:'Return indices of two nums that add to target.'},
  {title:'Longest Substring', diff:'Medium', desc:'Longest substring without repeating chars.'}
];

export default function Coding(){
  const [sel, setSel] = useState(0);
  return (
    <div className="card">
      <h2>Coding Practice</h2>
      <div style={{display:'flex',gap:12,flexWrap:'wrap',marginTop:12}}>
        <div style={{flex:1,minWidth:260}}>
          <div style={{display:'grid',gap:10}}>
            {problems.map((p,i)=>(
              <div className="card" key={i}>
                <div style={{display:'flex',justifyContent:'space-between',alignItems:'center'}}>
                  <div>
                    <strong>{p.title}</strong>
                    <div className="small">{p.diff}</div>
                  </div>
                  <div>
                    <button className="btn small" onClick={()=>setSel(i)}>Open</button>
                  </div>
                </div>
                <div className="small" style={{marginTop:8}}>{p.desc}</div>
              </div>
            ))}
          </div>
        </div>

        <div style={{width:420}}>
          <div className="card">
            <h3>Problem Detail</h3>
            <div style={{marginTop:8}}><strong>{problems[sel].title}</strong></div>
            <pre className="code-mock">{`// Pseudo editor\nfunction solve(){\n  // write logic here\n}`}</pre>
            <div style={{marginTop:8}} className="small">This is a mock editor (frontend only). Copy problem to your IDE to run tests.</div>
          </div>
        </div>
      </div>
    </div>
  )
}