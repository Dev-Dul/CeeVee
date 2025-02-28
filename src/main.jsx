import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Home from './components/Home.jsx'
import Range from "./components/Block";


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    {/* <Range startYear={1950} /> */}
    {/* <Home /> */}
  </StrictMode>,
)
