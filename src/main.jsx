import React from 'react'
import ReactDOM from 'react-dom/client'
import Attribution from './components/Attribution'
import Balance from "./components/Balance"
import Spending from "./components/Spending"
import "./style.sass"


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <main>
      <section className='expenses'>
        <Balance />
        <Spending />
      </section>
    <Attribution />
    </main>
  </React.StrictMode>
)
