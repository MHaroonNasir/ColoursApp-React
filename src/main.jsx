import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { BrowserRouter as Router } from 'react-router-dom'
import { ColourProvider } from './contexts/Colours'

ReactDOM.createRoot(document.getElementById('root')).render(
  <ColourProvider>
    <Router>
      <App />
    </Router>
  </ColourProvider>
)