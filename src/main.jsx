import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import './index.css'
import App from './App.jsx'
import ArmyHome from './pages/Army/ArmyHome.jsx'
import NavyHome from './pages/Navy/NavyHome.jsx'
import AirforceHome from './pages/Airforce/AirforceHome.jsx'

const router = createBrowserRouter([
  { path: "/", element: <App /> },
  { path: "/army", element: <ArmyHome /> },
  {path : "/navy", element: <NavyHome />},
  {path: "/airforce", element: <AirforceHome />},
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
)
