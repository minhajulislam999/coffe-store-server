import { StrictMode } from 'react'
import './index.css'
import App from './App.jsx'
import { RouterProvider,createBrowserRouter  } from "react-router";
import { createRoot } from 'react-dom/client';

const router = createBrowserRouter([
  {
path: "/",
element: <h1>hello world</h1>
  },
])

createRoot(document.getElementById('root')).render(

  <StrictMode>
    <RouterProvider router={router} />

      
    
  </StrictMode>

)