import { createRoot } from 'react-dom/client'
import './index.css'
import React from 'react'
import App from './App.tsx'
import { ToastContainer } from 'react-toastify'
import { ThemeProvider } from './components/Embed/ThemeContext.tsx'

createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
    <ThemeProvider>
    <App />
    </ThemeProvider>
    <ToastContainer/>
    </React.StrictMode>
)
