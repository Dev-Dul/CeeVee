import { useState } from 'react'
import Home from './components/Home';
import Slide from './components/Section';
import Colossus from './components/handlers';
import './App.css'

function App() {
  const [count, setCount] = useState(0);
  const [tiTan, setTitan] = useState({
    name: "",
    position: "",
    email: "",
    phone: "",
    summary: "",
  });

  const { datahub, handleInput, capsule } = Colossus();

  function handleChange(e) {
    setTitan((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  }

  function next() {
    setCount(count + 1);
  }

  function back(){
    setCount(count - 1);
  }

  function handleEdit(){
    setCount(1);
  }

  const positions = ['first', 'second', 'third', 'fourth', 'fifth', 'preview'];
  

  return (
    <div className="container">
      <Home btn={next}/>
      {/* <Slide order="first" /> */}
      <div className="parent">
          {positions.map((pos, index) => {
            return <Slide order={pos} key={index} bttn={next} back={back} cnt={count} handleChange={handleChange} tiTan={tiTan} datahub={datahub} handleInput={handleInput} capsule={capsule} handleEdit={handleEdit} />
          })}
      </div>
    </div>
  )
   

}

export default App;
