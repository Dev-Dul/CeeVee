import { useState } from "react";
import "../App.css";

function Home( {btn} ) {
  const [active, setActive] = useState(true);
  function handler(){
    btn();
    setActive(false);
  }

  return (
    <section className={`home  ${active ? 'active' : 'inactive'} `}>
      <h1>Welcome To CeeVee!.</h1>
      <h2>The perfect destination for a CV that truly stands out.</h2>
      <p>Craft Yours in five Minutes.</p>
      <div className="btns">
        <button onClick={() => handler()} >Get Started</button>
      </div>
    </section>
  );
}

export default Home;
