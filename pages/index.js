
import { useState } from "react";

export default function Home() {
  const [screen, setScreen] = useState("start");
  const [xp, setXp] = useState(0);

  function gainXP(amount) {
    setXp(prev => prev + amount);
  }

  return (
    <div style={{padding:20,fontFamily:"Arial"}}>
      {screen === "start" && (
        <div>
          <h1>🌍 GCSE Adventure World</h1>
          <button onClick={()=>setScreen("game")}>Start</button>
        </div>
      )}

      {screen === "game" && (
        <div>
          <h2>🎮 Game</h2>
          <p>XP: {xp}</p>
          <button onClick={()=>gainXP(20)}>Level 1 Complete</button>
          <button onClick={()=>gainXP(30)}>Level 2 Complete</button>
          <button onClick={()=>gainXP(40)}>Level 3 Complete</button>
        </div>
      )}
    </div>
  );
}
