import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Background from './Component/Background'
import Foreground from './Component/Foreground'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
   
     <div className=' relative w-full h-screen bg-zinc-800'>
      <Background/>

      <Foreground/>
     </div>
    </>
  )
}

export default App
