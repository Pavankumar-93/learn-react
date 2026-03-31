import { useState } from 'react'

function App() {
  const [color, setCount] = useState("black")

  return (
    <>
    <div className="w-full h-screen duration-200" 
    style = {{backgroundColor: color}}>
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
         <button onClick ={() => setCount("Red")} 
         className="outline-none px-4 py-1 rounded-full text-white shadow-sm" 
         style={{backgroundColor: "red"}} >
              Red
         </button>
         <button onClick ={() => setCount("green")} 
         className="outline-none px-4 py-1 rounded-full text-white shadow-sm" 
         style={{backgroundColor: "green"}} >
              Green
         </button>
         <button onClick ={() => setCount("blue")} 
         className="outline-none px-4 py-1 rounded-full text-white shadow-sm" 
         style={{backgroundColor: "blue"}} >
              blue
         </button>
          <button onClick ={() => setCount("orange")} 
         className="outline-none px-4 py-1 rounded-full text-white shadow-sm" 
         style={{backgroundColor: "orange"}} >
              Orange
         </button>
          <button onClick ={() => setCount("pink")} 
         className="outline-none px-4 py-1 rounded-full text-white shadow-sm" 
         style={{backgroundColor: "pink"}} >
              Pink
         </button>
        </div>
      </div>
    </div>
      
    </>
  )
}

export default App
