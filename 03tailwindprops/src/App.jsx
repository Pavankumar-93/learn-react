import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './component/Card'

function App() {
  const [count, setCount] = useState(0)

  let newobj = {
    Name : 'Arman',
    age :30
  }

  return (
    <>
      <h1 className='bg-green-400 text-black p-4 rounded-xl'>Tailwind test</h1>


     <Card username="pavanKumar"/>
     <Card username="RAVAN KUMAR"/>

    

      export default function Card2() {

   
 
}
    </>
  )
}

export default App
