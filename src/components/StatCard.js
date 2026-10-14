import React from 'react';
export default function StatCard({title, value, pct}) {
  return (
    <div className="card">
      <div style={{display:'flex',justifyContent:'space-between',alignItems:'center'}}>
        <div>
          <div style={{fontWeight:700}}>{title}</div>
          <div className="small" style={{marginTop:6}}>{value}</div>
        </div>
        <div style={{width:120}}>
          <div className="progress"><i style={{width: pct+'%'}}></i></div>
          <div className="small" style={{marginTop:8,textAlign:'right'}}>{pct}%</div>
        </div>
      </div>
    </div>
  )
}