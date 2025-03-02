import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Home from './components/Home.jsx'
import Range from "./components/Block";
import Preview from './components/Preview'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    {/* <Preview /> */}
    {/* <Range startYear={1950} /> */}
    {/* <Home /> */}
  </StrictMode>,
)
