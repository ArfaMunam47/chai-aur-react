import React from 'react'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import JSX from './JSX.jsx'

// function NewApp(){
//   return(
//     <a href="https://www.w3school.com">Visit To Learn More</a>
//   )
// }

// ---------------------- OBJECT -----------------------------
// const app =(
//   <a href="https://www.google.com">Hello World</a>
// )

const username="Arfa Munam Butt"
// ---------------------- FUNCTION -----------------------------
const app = React.createElement(
  'a',
  {
    href:'https://www.w3school.com',
    tagret:'_blank'
  },
  'Visit To Learn More',
  username
)
createRoot(document.getElementById('root')).render(
<App />

)

