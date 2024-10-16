import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './component/header/Header'
import Bottels from './component/bottels/Bottels'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Water Bottle</h1>
      <Header></Header>
      <Bottels></Bottels>
    </>
  )
}

export default App
