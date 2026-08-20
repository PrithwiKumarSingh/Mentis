import { createRoot } from 'react-dom/client'
import './index.css'
import React from 'react'
import App from './App.tsx'
import { ToastContainer } from 'react-toastify'
import { ThemeProvider } from './components/Embed/ThemeContext.tsx'
import { Provider } from 'react-redux'
import { store } from "./store/store";

createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
    <ThemeProvider>
        <Provider store={store}>
            <App />
        </Provider>
    </ThemeProvider>
    <ToastContainer/>
    </React.StrictMode>
)
