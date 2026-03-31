import { useCallback, useEffect, useRef, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const passwordRef = useRef(null)
  const [length, setLength] = useState(8)
  const [numberAllowed, setNumberAllowed] = useState(false)
  const [characterAllowed, setCharcterAllowed] = useState(false)
  const [password, setPassword] = useState("")
  const passwordGenerator = useCallback( () => {
  let pass =""
  let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
  if(numberAllowed) str += "1234567890"
  if(characterAllowed) str += "~!@#$%^&*()_+"
  for (let i=1; i<=length; i++)
  {
    const char = Math.floor(Math.random()*str.length)
    pass+= str.charAt(char)
  }
  setPassword(pass)
  }, [length, numberAllowed, characterAllowed] )

  const copyPasswordToClipbord = useCallback( () => {
    passwordRef.current?.select();
    window.navigator.clipboard.writeText(password);
  }, [password])

  useEffect( () => {
    passwordGenerator()}, [length, numberAllowed, characterAllowed, passwordGenerator])
  return (
  <>
  
   <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-gray-800 text-orange-500">
    <h1 className='text-white text-center text-4xl my-3'>Password Generator</h1>
     <div className="flex shadow rounded-lg overflow-hidden mb-4">
        <input
        type='text'
        value={password}
        className='outline-none w-full py-1 px-3'
        placeholder='password'
        readOnly
        ref={passwordRef}
        />
        <button onClick={copyPasswordToClipbord}
        className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0'>
          copy
        </button>
      </div>
      <div className='flex test-sm gap-x-2'>
        <div className='flex items-center gap-x-1'>
        <input
        type="range"
        min={6} 
        max={100}
        value={length}
        className='cursor-pointer'
        onChange={(e) => {setLength(e.target.value)}}
        />
        <label>length: {length}</label>
        </div>
        <div className='flex test-sm gap-x-1'>
        <input
           type='checkbox'
           defaultChecked={characterAllowed}
           id='characterInput'
           onChange={() => {setCharcterAllowed((prev)=>!prev)}}
        />
          <label htmlFor='characterInput'>characgters</label>
      </div>
      <div className='flex test-sm gap-x-1'>
        <input
           type='checkbox'
           defaultChecked={numberAllowed}
           id='numberInput'
           onChange={() => {setNumberAllowed((prev)=>!prev)}}
        />
          <label htmlFor='numberInput'>Numbers</label>

          </div>
      </div>
   </div>
  </>
  )
}

export default App
