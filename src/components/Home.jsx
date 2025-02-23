import { useState } from "react";
import "../App.css";

function Home() {
  const [count, setCount] = useState(0);

  return (
    <section>
      <h1>Welcome To CeeVee!.</h1>
      <h2>The perfect destination for a CV that truly stands out.</h2>
      <p>Craft Yours in five Minutes.</p>
      <div className="buttons">
        <button>Get Started</button>
      </div>
    </section>
  );
}

export default Home;
