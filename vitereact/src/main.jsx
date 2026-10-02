import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
   <>
    <App />
    <h1>Gonna check whether it worked or not</h1>
    <p>Hence proved it's working</p></>
  </StrictMode>,
)
