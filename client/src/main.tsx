import { createRoot } from 'react-dom/client'
import './index.css'
import React from 'react'
import App from './App.tsx'
import { ToastContainer } from 'react-toastify'

createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
    <App />
    <ToastContainer/>
    </React.StrictMode>
)
