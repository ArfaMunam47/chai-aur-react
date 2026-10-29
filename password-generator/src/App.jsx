import { useState, useCallback, useEffect,useRef } from 'react'
import './App.css'

function App() {
  const [length, setLength] = useState(8)
  const [character, setCharacter] = useState(false)
  const [number, setNumber] = useState(false)
  const [password, setPassword] = useState("")
  const passwordRef=useRef(null)
  const passwordGenerator = useCallback(()=>{
    let str="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    let pass=""
    if(number) str+="0123456789"
    if (character) str+="@#$%^&*()|{}[]"
    for (let i = 1; i <= length; i++) {
      let char=Math.floor(Math.random()* str.length+ 1)
    pass +=str.charAt(char)
      
    }
    setPassword(pass)
  }
    , [length,character,number,setPassword])
    useEffect(() =>{
      passwordGenerator()
    },
     [length,number,character,passwordGenerator])
   const copyToClipboard= useCallback (
    ()=>{
      passwordRef.current?.select();
      passwordRef.current?.setSelectionRange(0,5);
window.navigator.clipboard.writeText(password)
    },[password]
   )
  return (
    <>
   <div className="w-full h-screen p-5"
   style={{backgroundColor:"wheat"}}>
      <div className="w-250 p-5 mt-9 ml-20 border-4 shadow-xl/50 text-white"
     style={{backgroundColor:"gray"}}>
       <h1 className='text-4xl text-center pt-9'>Password Generator</h1>
       <input className='outline-none p-3 m-2 w-230 bg-white text-black text-2xl rounded-2xl' type="text" 
       value={password}
       ref={passwordRef} 
       placeholder="password" readOnly/>
       <button onClick={copyToClipboard} className='bg-blue-700 p-3 text-2xl -ml-21 rounded-r-lg shrink-0 outline-none'>Copy</button>
    <div className="flex flex-wrap text-black mt-5">
       <div className="flex flex-wrap font-semibold text-2xl gap-x-5 ">
       <input type="range"
       min= {6} 
       max={100} 
       value={length}
       className='cursor-pointer'
       onChange={(e) =>{setLength((e.target.value))}}/>
       <label className='ml-9'>Length: {length} </label>
      <div className="flex flex-wrap">
         <input type="checkbox"
         defaultChecked={number}
         onChange={()=>{
        setNumber((prev => !prev))
         }}
         className="w-5 pl-3" />
       <label className='pl-3 pr-3'>Number</label>
        <input type="checkbox" 
         defaultChecked={character}
         onChange={()=>{
        setCharacter((prev => !prev))
         }}
         className="w-5" />
       <label className='pl-3'>Character</label>
      </div>
      
    </div>
    </div>
    </div>
   </div>
    </>
  )
}

export default App
