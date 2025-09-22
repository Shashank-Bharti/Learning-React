import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import {Home,About,Contact,User,Github} from './components/index.js'
import { GithubInfoLoader } from './components/Github/Github.jsx'

// const router = createBrowserRouter([
//  { 
//   path : '/',
//   element: <App/>,
//   children: [
//     {
//       path:"",
//       element: <Home/>
//     },
//     {
//       path:"about",
//       element: <About/>
//     },
//     {
//       path:"contact",
//       element: <Contact/>
//     }
    
//   ],
//  }
// ])

// Second Method 

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App/>}>
    <Route path='' element={<Home/>}/>,
    <Route path='about' element={<About/>}/>,
    <Route path='contact' element={<Contact/>}/>,
    <Route path='user/:userid' element={<User/>}/>,
    <Route 
    loader = {GithubInfoLoader}
    path='github' element={<Github/>}/>,
    </Route>
    

  )
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
