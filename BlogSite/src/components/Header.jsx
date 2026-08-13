import React from 'react'
import{Container,Logo,LogoutBtn} from './index.js'
import {useSelector} from 'react-redux'
import {Link, useNavigate} from 'react-router-dom'
import { Authservice } from '../appwrite/auth.js'



function Header() {

  const authStatus = useSelector((state)=> state.auth.status)

  const navigate = useNavigate()

  const navItems = [
    {
      name: 'Home',
      path: '/',
      active: true,
    },
    {
      name: 'Login',
      path: '/login',
      active: !authStatus,
    },
    {
      name: 'Signup',
      path: '/sign-up',
      active: !authStatus,
    },
    {
      name: 'All Posts',
      path: '/all-posts',
      active: authStatus,
    },
    {
      name: 'Add Post',
      path: '/add-post',
      active: authStatus,
    },
  ]

  return (
    <header className='py-3 shadow bg-gray-500'>
      <Container>
        <nav className='flex'>
          <div className='mr-4'>
            <Link to= '/'>
            <Logo width='70px'/> 
            </Link>
          </div>
          <div>
            <ul className='ml-auto flex'>
            {navItems.map((item)=> 
            item.active ? 
            <li key={item.name}>
              <button onClick={()=> navigate(item.path)} 
              className='inline-bock px-6 py-2 duration-200 hover:bg-blue-100 rounded-full'>
                {item.name}
              </button>
            </li>
            : null)}
            {authStatus && (
              <li>
                <LogoutBtn />
              </li>
            )}
            </ul>
          </div>
        </nav>
      </Container>
    </header>
  )
}

export default Header
