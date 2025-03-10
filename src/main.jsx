import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import General from './components/general.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <General/>
    
  </StrictMode>,
)
