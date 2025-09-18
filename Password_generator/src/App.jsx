import React, { useCallback, useEffect, useRef, useState } from 'react'
import './App.css'
function App() {
  const [length,setLength] = useState(8)
  const [hasSymbol, setSymbol] = useState(false)
  const [hasNum, setNum] = useState(false)
  const [password,setPassword] = useState("")
    const [showNotification, setShowNotification] = useState(false)

  let generatePassword = useCallback(()=>{
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if (hasNum) str += "0123456789"
    if (hasSymbol) str += "!@#$%^&*(+=?/:>"

    for (let i = 1; i <= length; i++) {

      let char = Math.floor(Math.random() * str.length + 1)
      pass += str.charAt(char) 
    }
    setPassword(pass)
  },[length,hasNum,hasSymbol,setPassword])

  useEffect(()=>{
    generatePassword()
  },[length,hasNum,hasSymbol,generatePassword])

  
  // useRef Hook
  const passwordRef = useRef(null)

  const copyToClipboard = useCallback(()=>{
    passwordRef.current?.select()
    window.navigator.clipboard.writeText(password)
    setShowNotification(true)
        setTimeout(() => {
      setShowNotification(false)
    }, 2000)
  },
  [password])


  return (
    <>
    <div className="flex w-full h-screen flex-col  bg-gray-800 justify-center ">
        <div className={`absolute p-6 rounded-xl bg-gray-700 font-medium text-white border-2 border-blue-500 place-self-center transition-all duration-300 ${
      showNotification ? 'top-10 opacity-100' : '-top-20 opacity-0'}`}>Copied to Clipboard!</div>
    <h1 className='text-center text-4xl font-bold text-white -mt-80 md:-mt-60' >Password Generator</h1>

    <div className="flex flex-col flex-wrap gap-5 fixed place-self-center box-border p-5 bg-gray-700 rounded-2xl"> 
      <div className="flex flex-wrap gap-5 md:gap-0 flex-row">
      <input className='bg-white text-blue-500 font-mono font-semibold outline-0 px-3 py-2 w-full md:w-80 rounded-xl lg:rounded-l-xl lg:rounded-r-none' 
      type="text" 
      name=""  
      id="" 
      placeholder='Password'
      readOnly
      ref={passwordRef}
      value={password}/>
      <button className="px-4 py-2 w-full md:w-20 bg-blue-500 font-medium text-white rounded-xl lg:rounded-l-none lg:rounded-e-xl cursor-pointer  hover:bg-blue-600"
      onClick={copyToClipboard}>Copy</button>
      </div>
      <div className='flex gap-4 md:gap-16 flex-col md:flex-row place-items-center'>
      <div className='flex w-full md:w-1/3 p-0 flex-col'>
      <label className='text-xs text-gray-300 mt' htmlFor="input:range">Password Length - {length}</label>
      <input className="w-full md:w-full outline-0 mt-2 rounded-lg appearance-none cursor-pointer accent-blue-500
           [&::-webkit-slider-runnable-track]:bg-gray-300 
           [&::-webkit-slider-runnable-track]:rounded-lg
           [&::-webkit-slider-runnable-track]:h-1
           [&::-webkit-slider-thumb]:appearance-none 
           [&::-webkit-slider-thumb]:w-3 
           [&::-webkit-slider-thumb]:-mt-1
           [&::-webkit-slider-thumb]:h-3 
           [&::-webkit-slider-thumb]:bg-blue-500 
           [&::-webkit-slider-thumb]:rounded-full 
           [&::-webkit-slider-thumb]:cursor-pointer
           [&::-moz-range-thumb]:bg-blue-500 
           [&::-moz-range-thumb]:w-3 
           [&::-moz-range-thumb]:h-3 
           [&::-moz-range-thumb]:rounded-full" type="range" min={8} max={24} 
           name="length" 
           id="len"
           value={length}
           onChange={(e)=>{setLength(e.target.value)}}
           
           />

      </div>
      <div className="flex flex-wrap -mb-2 md:-mb-5 gap-4 ">
        <input type="checkbox" name="nums" id="nums"
        defaultChecked={hasNum} onChange={() => setNum((prev) => !prev)} />
        <label className='text-gray-300' htmlFor="nums">Numbers</label>
        <input type="checkbox" name="scharacters" id="scharacters"
        defaultChecked={hasSymbol} onChange={() => setSymbol((prev) => !prev)} />
        <label className='text-gray-300' htmlFor="scharacters">Symbols</label>
      </div>
      </div>
    </div>

    </div>
    </>
  )
}

export default App
