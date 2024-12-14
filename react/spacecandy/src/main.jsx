import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import './index.css'
import router from './App.jsx'

import universo from './assets/universo.png'

createRoot(document.getElementById('root')).render(
  <>
  <img src={universo} alt="universo" className='universo' />
  <RouterProvider router={router} />
  </>
)
