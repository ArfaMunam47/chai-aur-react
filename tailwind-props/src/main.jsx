import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <>
    <h1 class="text-3xl font-bold underline">
   Arfa Munam Butt
  </h1>
  <h2 class="bg-sky-100">Trying to learn something</h2>
<p class="text-blue-600">Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi, dolor veritatis! Alias cum molestiae, quibusdam repellendus porro mollitia corporis velit?</p>
<h3 class='bg-green-100 text-pink-950 p-3 border-2 border-red-700 shadow-xl italic font-semibold text-2xl rounded -xl m-3'>Last time checking it out</h3>

  <div class="flex flex-col gap-2 p-8 sm:flex-row sm:items-center sm:gap-6 sm:py-4 ...">
  <img class="mx-auto block h-24 rounded-full sm:mx-0 sm:shrink-0" src="Untitled2.jpg" alt="" />
  <div class="space-y-2 text-center sm:text-left">
    <div class="space-y-0.5">
      <p class="text-lg font-semibold text-black">Arfa Munam</p>
      <p class="font-medium text-gray-500">Software Engineer</p>
    </div>
    <button class="border-purple-200 text-purple-600 hover:border-transparent hover:bg-purple-600 hover:text-white active:bg-purple-700 ...">
      Message
    </button>
  </div>
</div>
<img class="aspect-1/1 object-cover" src="Untitled2.jpg" />



    <div class="mx-auto flex max-w-sm items-center gap-x-4 rounded-xl bg-white p-6 shadow-lg outline outline-black/5 dark:bg-slate-800 dark:shadow-none dark:-outline-offset-1 dark:outline-white/10">
  <img class="size-12 shrink-0" src="https://cdn-icons-png.flaticon.com/512/5962/5962463.png" alt="ChitChat Logo" />
  <div>
    <div class="text-xl font-medium text-black dark:text-white">ChitChat</div>
    <p class="text-gray-500 dark:text-gray-400">You have a new message!</p>
  </div>
</div></>
  
  </StrictMode>,
)
