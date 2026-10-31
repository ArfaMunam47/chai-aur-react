import { useState, useCallback, useEffect, useRef } from 'react'
import './App.css'
// useState --- remember data 
// useCallback --- remember and reuse function even when dependencies change
// useState --- perform task after rendering
// useState --- remember data without rerendering
// rendering --- react arrange elements on screen 

function App() {
  const [length, setLength] = useState(8)
  const [number, setNumber] = useState(false)
  const [character, setCharacter] = useState(false)
  const [password, setPassword] = useState('')
  const passwordRef=useRef(null)

const copytoclipboard=useCallback(()=>{
  window.navigator.clipboard.writeText(password)
  passwordRef.current?.select()
  passwordRef.current?.setSelectionRange(0,5)
},[password])
  const passwordGenerator=useCallback(()=>{
let str='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'
let pass=''
if(number) str+='0123456789'
if(character) str+='!@#$%^&*()[]{}?./,|~'
for (let i = 0; i < length; i++) {
 let char=Math.floor(Math.random()*str.length+1)
 pass+=str.charAt(char)
  
}
setPassword(pass)

  },[length,number,character,setPassword])
  useEffect(()=>{
   passwordGenerator() 
  },[length,character,number,passwordGenerator])
  return (
    <>
    <div className="w-full h-screen"
    style={{backgroundColor:'antiquewhite'}}>
      <div className="w-200 pt-12 pl-9 pr-5 pb-10 mt-20 ml-25 border-2 border-black rounded-md inset-shadow-md flex flex-wrap"
      style={{backgroundColor:'gray'}}>
        <p className='text-3xl text-center text-white font-semibold text-shadow-md'>Password Generator 🔑</p>
        <input type="text" 
        placeholder='password' 
        value={password} 
        ref={passwordRef}
        className='text-black outline-none w-160 p-2 mt-3 rounded-l-lg' readOnly
        style={{backgroundColor:'antiquewhite'}}/>
        <button className='bg-blue-800 p-2 mt-3 text-white font-semibold rounded-r-lg' onClick={copytoclipboard}>Copy</button>
        <span>
          <input type="range" 
        min={6}
        max={100} 
        className='cursor-pointer w-50 mt-7'
        onChange={(e)=>{
          setLength(e.target.value)
        }}/>
        </span>
        <p className='text-black font-semibold text-xl pt-4 pl-7'>Length:{length}</p>
        <input type="checkbox"
        defaultChecked={number} 
        onChange={()=>{
          setNumber(prev => !prev)
        }}
        className='w-5 ml-6 mt-4'/>
        <label className='text-black font-semibold text-xl ml-2 mt-4'>Number</label>
        <input type="checkbox"
        defaultChecked={character} 
        onChange={()=>{
          setCharacter(prev => !prev)
        }}
        className='w-5 ml-3 mt-4'/>
        <label className='text-black font-semibold text-xl ml-2 mt-4'>Character</label>
      </div>
    </div>
             
    </>
  )
  }

export default App
