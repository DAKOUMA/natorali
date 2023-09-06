import { useState } from 'react'
import { Activity, Contact, Header, Homepage, Product, Team } from './container'
import { chicken } from './assets'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='App gradient__bg'>
      <Header />
      <Homepage/>
      <Activity />
      <Product />
      <Team />
      <Contact />
    </div>
  )
}

export default App
