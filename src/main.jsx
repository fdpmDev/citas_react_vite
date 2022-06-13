import React from 'react'
// contiene todos los elementos DOM
import ReactDOM from 'react-dom/client'
import App from './App'
// Una hoja de estilos especificas para react se les llama modulos
import './index.css'

// Va a colocar y renderizar estos componentes en el elemento root de HTML
ReactDOM.createRoot(document.getElementById('root')).render(
  // Recordar que StrictMode renderiza 2 veces para comprobar malas practicas
  // <React.StrictMode>
    <App />
  // </React.StrictMode>
)
