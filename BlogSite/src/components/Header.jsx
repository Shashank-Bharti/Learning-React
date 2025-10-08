import React from 'react'
import{Container,Logo,LogoutBtn} from './index.js'
import {useSelector} from 'react-redux'
import {Link, useNavigate} from 'react-router-dom'



function Header() {

  const authStatus = useSelector((state)=> state.auth.status)

  return (
    <div>
      
    </div>
  )
}

export default Header
