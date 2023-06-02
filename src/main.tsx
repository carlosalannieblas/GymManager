import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import "./scss/global.scss"
import "./firebase.js"

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <App />
)

postMessage({ payload: 'removeLoading' }, '*')
