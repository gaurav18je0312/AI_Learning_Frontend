import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import AITextbook from './AI-Textbook/AITextbook'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <AITextbook />
    </>
  )
}

export default App
