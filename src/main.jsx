import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { BrowserRouter as Router } from 'react-router-dom'
import { ColourListProvider } from './contexts/ColourList'

ReactDOM.createRoot(document.getElementById('root')).render(
  <ColourListProvider>
    <Router>
      <App />
    </Router>
  </ColourListProvider>
)