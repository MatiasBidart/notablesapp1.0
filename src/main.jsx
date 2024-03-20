import './index.css'
import React from 'react'
import store from './store'
import { Provider } from 'react-redux'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { HashRouter } from 'react-router-dom'



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
    <HashRouter>
    <App />
    </HashRouter>
    </Provider>
  </React.StrictMode>
)
