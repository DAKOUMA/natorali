import { useRef, useState } from 'react'
import { Activity, Contact, Header, Homepage, Product, Team } from './container'
import { chicken } from './assets'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  const homeRef = useRef();
  const activityRef = useRef();
  const productRef = useRef();
  const teamRef = useRef();
  const contactRef = useRef();

  const refList = {homeRef:homeRef, activityRef:activityRef, productRef:productRef, teamRef:teamRef, contactRef:contactRef}

  return (
    <div className='App gradient__bg pt-10 pb-20'>
      <Header customRef={refList}/>
      <Homepage customRef={{homeRef:homeRef, activityRef:activityRef}} />
      <Activity customRef={activityRef}/>
      <Product customRef={productRef}/>
      <Team customRef={teamRef}/>
      <Contact customRef={contactRef}/>
      <footer>
        Copyright &copy; ALL-MEDIA 2023
      </footer>
    </div>
  )
}

export default App
