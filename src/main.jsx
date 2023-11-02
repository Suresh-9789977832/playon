import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Contextcomponent from './components/context/Contextcomponent.jsx'
import { BrowserRouter } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Contextcomponent>
    <App />
        </Contextcomponent>

  </React.StrictMode>,
)
