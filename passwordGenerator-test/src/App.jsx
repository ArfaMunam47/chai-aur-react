import { useState,useCallback,useEffect,useRef } from 'react'
import './App.css'

// useState  ----- remember data 
// useCallback -------remember and reuse function even with changing dependencies
// useEffect  ------------perform task after rendering
// useRef  ----------- remember data without rerendering
//  rerendering ---- React arrange elements according to its own choice
function App() {
  const [length, setLength] = useState(8)
  const [number, setNumber] = useState(false)
  const [character, setCharacter] = useState(false)
   const [password, setPassword] = useState("")
   const passwordRef= useRef(null)
   const passwordGenerator= useCallback(
    () =>{
let str='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'
let pass=''
if(number) str+='0123456789'
if(character) str+='!@#$5^78()[]{}~_'
for (let i = 0; i < length; i++) {
  let char=Math.floor(Math.random()*str.length+1)
  pass +=str.charAt(char)
  
}setPassword(pass)
    },[length,number,character,setPassword]
   )


   useEffect(()=>{
    passwordGenerator()
   },[length,number,character,passwordGenerator])
   const copytoclipboard=useCallback(
    ()=>{
      passwordRef.current?.select()
      passwordRef.current?.setSelectionRange(0,9)
window.navigator.clipboard.writeText(password)
    },[password]
   )


  return (
    <>
      <div className="w-full h-screen"
      style={{backgroundColor:'bisque'}}>
        <h1 className='pt-4 text-shadow-lg/30'>30-10-2026 WORK 🎈</h1>
        <div className="w-200 p-6 mt-15 ml-20 border-4 shadow-xl/30 rounded-lg flex flex-wrap"
        style={{backgroundColor:'pink'}}>
<h1 className='text-center text-shadow-lg/30'>Password Generator 🎀</h1>
<input type="text" className='p-4 w-170 outline-none color-black rounded-l-lg'
style={{backgroundColor:'whitesmoke'}}
placeholder='password'
value={password}
ref={passwordRef}
readOnly/>
<button className='bg-blue-700 text-white p-3 outline-none rounded-r-lg'
onClick={copytoclipboard}>Copy</button>
<input type="range" 
className='w-50 ml-2 mt-3 cursor-pointer'
min={6}
max={100}
onChange={(e)=>setLength(e.target.value)}
/>
<p className='text-2xl text-black pl-4 pt-2 font-semibold'>Length : {length} </p>
<input type="checkbox" 
className='w-5 ml-4 mt-3'
defaultChecked={number}

onChange={()=>{
 setNumber(prev=>!prev)
}}
/>
<label className='text-2xl text-black pl-3 pt-2 font-semibold'>Number</label>

<input type="checkbox" 
className='w-5 ml-4 mt-3'
defaultChecked={character}
onChange={()=>{
  setCharacter(prev=>!prev)
}}
/>
<label className='text-2xl text-black pl-3 pt-2 font-semibold'>Character</label>
        </div>
      </div>
    </>
  )
}

export default App
