import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { FoodProvider } from './context/FoodContext'
import Header from './components/food/Header'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <Header/> */}
  <FoodProvider>
    <App />
    </FoodProvider>
  </React.StrictMode>,
)
