import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(

    <App />
)
//  FIBRE CONCEPT
// We've established that a primary goal of Fiber is to enable React to take advantage of scheduling. Specifically, we need to be able to

// pause work and come back to it later.
// assign priority to different types of work.
// reuse previously completed work.
// abort work if it's no longer needed.
