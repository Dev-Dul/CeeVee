import { useState } from 'react'
import Home from './components/Home';
import Slide from './components/Section';
import './App.css'

function App() {
  const [count, setCount] = useState(0);
  function next() {
    setCount(count + 1);
  }

  function back(){
    setCount(count - 1);
  }

  const positions = ['first', 'second', 'third', 'fourth', 'fifth', 'preview']

  return (
    <div className="container">
      <Home btn={next}/>
      {/* <Slide order="first" /> */}
      <div className="parent">
          {positions.map((pos, index) => {
            return <Slide order={pos} key={index} bttn={next} back={back} cnt={count}/>
          })}
      </div>
    </div>
  )
   

}

export default App;
