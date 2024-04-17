import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import router from './routes/Routes.jsx'
import { RouterProvider } from 'react-router-dom'
import FirebaseProvider from './FirebaseProvider/FirebaseProvider.jsx'
import './App.css'
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   
    <FirebaseProvider>
    <RouterProvider router={router}></RouterProvider>
    </FirebaseProvider>
  </React.StrictMode>,
)
