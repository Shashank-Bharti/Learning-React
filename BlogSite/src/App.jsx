import React, { useState } from 'react'
import {useDispatch} from 'react-redux'
import authService from "./appwrite/auth"
import { useEffect } from 'react'
import {login, logout} from "./features/authSlice"
import { Header, Footer } from './components'

function App() {
  const [loading, setLoading] = useState(true)
  const dispatch = useDispatch()
  useEffect(()=>{
    authService.getCurrentUser()
    .then((userData)=> {
      if (userData) {
        dispatch(login({userData}))
      }else{
        dispatch(logout())
      }
    })
    .finally(()=> setLoading(false))
  })
  

  
  return !loading ? (
    <div className='min-h-screen w-full flex flex-wrap bg-gray-400'>
      <div className="w-full block">
        <Header/>
        test
        <main>
        {/* TODO:<Outlet/> */}
        </main>
        <Footer/>
      </div>
    </div>
  ): (null)
}

export default App
