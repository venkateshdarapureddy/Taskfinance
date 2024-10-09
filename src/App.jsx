import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="bg-[#f9f5f0] grid  grid-cols-3 gap-5 m-auto w-[1000px]     text-black px-[100px] pt-[40px] pb-[40px]">
        <div className=" row-span-2  bg-[#000000] p-[40px]   rounded-lg "></div>
        <div className=" row-span-2  bg-[#ffffff] p-[40px]   rounded-lg"></div>
        <div className=" row-span-2  bg-[#ffffff] p-[40px]   rounded-lg"></div>


        <div className="   col-span-2 row-span-7   bg-[#ffffff] rounded-lg "></div>
        <div className="   row-span-11             bg-[#ffffff] rounded-lg"></div>
        <div className="   col-span-2 row-span-12  bg-[#ffffff] rounded-lg"></div>
        <div className="   row-span-8              bg-[#ffffff] rounded-lg"></div>
      </div>
      
    </>
  )
}

export default App
