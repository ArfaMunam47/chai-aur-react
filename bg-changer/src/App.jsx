import { useState } from 'react'
import './App.css'

function App() {
  let [color, setColor] =useState("turquoise")
  return (
    <>
    <div className="w-full h-screen"
    style={{backgroundColor:color}}>
      <div className="flex flex-wrap justify-center m-3 p-3 gap-5 rounded-full mt-120"
      style={{backgroundColor:" wheat"}}>
<button onClick={() =>{ setColor("red")}} className="p-3 text-black inset-shadow-sm inset-shadow-indigo-500/50 ring-2"
style={{backgroundColor:"red"}}>Red</button>

<button onClick={() =>{ setColor("blue")}} className="p-3 text-black inset-shadow-sm inset-shadow-indigo-500/50 ring-2"
style={{backgroundColor:"blue"}}>Blue</button>

<button onClick={() =>{ setColor("orange")}} className="p-3 text-black inset-shadow-sm inset-shadow-indigo-500/50 ring-2"
style={{backgroundColor:"orange"}}>Orange</button>

<button onClick={() =>{ setColor("green")}} className="p-3 text-black inset-shadow-sm inset-shadow-indigo-500/50 ring-2"
style={{backgroundColor:"green"}}>Green</button>

<button onClick={() =>{ setColor("black")}} className="p-3 text-white inset-shadow-sm inset-shadow-indigo-500/50 ring-2"
style={{backgroundColor:"black"}}>Black</button>

<button onClick={() =>{ setColor("white")}} className="p-3 text-black inset-shadow-sm inset-shadow-indigo-500/50 ring-2"
style={{backgroundColor:"white"}}>White</button>

<button onClick={() =>{ setColor("yellow")}} className="p-3 text-black inset-shadow-sm inset-shadow-indigo-500/50 ring-2"
style={{backgroundColor:"yellow"}}>Yellow</button>

<button onClick={() =>{ setColor("purple")}} className="p-3 text-black inset-shadow-sm inset-shadow-indigo-500/50 ring-2"
style={{backgroundColor:"purple"}}>Purple</button>

<button onClick={() =>{ setColor("brown")}} className="p-3 text-black inset-shadow-sm inset-shadow-indigo-500/50 ring-2"
style={{backgroundColor:"brown"}}>Brown</button>

<button onClick={() =>{ setColor("gray")}} className="p-3 text-black inset-shadow-sm inset-shadow-indigo-500/50 ring-2"
style={{backgroundColor:"gray"}}>Gray</button>
      </div>
    </div>
    </>
  )
}

export default App
