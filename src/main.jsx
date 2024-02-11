import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import Layout from './components/Layout'
import NuevoCliente from './Pages/NuevoCliente'
import Index from './Pages/Index'

const router =  createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        // Lo que se va a renderizar en la pagina principal /
        index: true,
        element: <Index />
      },
      {
        path: '/nuevoCliente',
        element: <NuevoCliente/>
      }
    ]
  } ,
  // Para definir diferentes rutas se deben de crear diferentes objetos
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider 
      router={router}
    />
  </React.StrictMode>,
)
