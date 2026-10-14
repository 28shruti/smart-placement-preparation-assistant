import React, {useState} from 'react';
import { motion } from 'framer-motion';

const cards = [
  {q:'Tell me about yourself?', a:'Short intro with education, projects and goals.'},
  {q:'Why do you want to join our company?', a:'Talk about alignment and research.'},
  {q:'What is a process vs thread?', a:'Process has separate memory; threads share memory.'}
];

export default function Interview(){
  const [i,setI] = useState(0);
  const [flip,setFlip] = useState(false);
  const next = ()=> { setFlip(false); setI((i+1)%cards.length); }
  return (
    <div>
      <div className="card">
        <h2>Interview Flashcards</h2>
        <motion.div layout onClick={()=>setFlip(f=>!f)} initial={{scale:0.98}} animate={{scale:1}} transition={{duration:0.4}} className="flash">
          {!flip ? <div><strong>Q:</strong> {cards[i].q}</div> : <div><strong>A:</strong> {cards[i].a}</div>}
        </motion.div>
        <div style={{marginTop:12}}>
          <button className="btn small" onClick={next}>Next Card</button>
        </div>
      </div>
    </div>
  )
}