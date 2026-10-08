import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'

function App() {
 const [counter, setCounter] =useState(15)
//  let counter = 10
const addValue =() =>{
  console.log('Clicked', counter)
  let addVal= counter + 1
  if(addVal<=20){
setCounter(addVal)
  }else{
    alert('Cannot be a number greater than 20')
  }

}
const removeValue =() =>{
  console.log('Clicked', counter)
 let remVal= counter - 1
 if(remVal>=0){
 setCounter(remVal)
 }else{
    alert('Cannot be a number less than 0')
  }
}
  return (
    <>
   <h1>Chai aur React</h1>
   <h2>Counter Value : {counter}</h2>
   <span><button onClick={addValue}>Add Value </button></span>
   <span><button onClick={removeValue}>Remove Value</button></span>
    </>
  
  )
}

export default App
