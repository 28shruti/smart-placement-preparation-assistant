import React, {useState} from 'react';
import { motion } from 'framer-motion';

const qs = [
  {q:'If 5x+3=23, find x.', opts:['4','5','6','3'], a:'4'},
  {q:'Which number is not prime: 2,3,5,9,11?', opts:['2','3','5','9','11'], a:'9'},
  {q:'Find next: 2,4,8,16,?', opts:['24','32','48','64'], a:'32'}
];

export default function Aptitude(){
  const [idx,setIdx] = useState(0);
  const [choice,setChoice] = useState(null);
  const [showAns,setShowAns] = useState(false);
  const submit = () => setShowAns(true);
  const next = ()=>{ setIdx((idx+1)%qs.length); setChoice(null); setShowAns(false); }

  return (
    <div>
      <div className="card">
        <h2>Aptitude Quiz</h2>
        <motion.div initial={{opacity:0}} animate={{opacity:1}} transition={{duration:0.4}}>
          <div style={{marginTop:8}}><strong>Q:</strong> {qs[idx].q}</div>
          <div style={{marginTop:12, display:'grid', gap:8}}>
            {qs[idx].opts.map(o=>(
              <button key={o} onClick={()=>setChoice(o)} style={{textAlign:'left',padding:12,borderRadius:10,border: choice===o ? '2px solid var(--accent2)' : '1px solid rgba(0,0,0,0.06)', background:'transparent'}} className="small">
                {o}
              </button>
            ))}
          </div>
          <div style={{marginTop:12}}>
            <button className="btn small" onClick={submit}>Submit</button>
            <button className="btn small" style={{marginLeft:8}} onClick={next}>Next</button>
          </div>
          {showAns && <div style={{marginTop:12}} className="card small"><strong>Correct:</strong> {qs[idx].a}</div>}
        </motion.div>
      </div>
    </div>
  )
}