import { useState } from 'react'
import reactlogo from './assets/react.svg'
import vitelogo from '/vite.svg'
import './App.css'

function App() {
    const [count, setCount] = useState(0)

    return {
        <div className="App">
         <div>
             <a href="https://vitejs.dev" target="_blank">
                <img src= {vitelogo} className="Logo" alt="Vite logo" /a>
               </a>
             <a href="https://reactjs.org" target="_blank">
            <img src={reactlogo} className="logo react"
            alt="React logo" />
           </a>
          </div>
    }
}