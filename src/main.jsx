import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { ContextGlobal } from './context/TodoContext.jsx'
import './index.css'
import { AuthProvider } from './context/AuthContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <ContextGlobal>
          <App />
      </ContextGlobal>
    </AuthProvider>
  </React.StrictMode>,
)
