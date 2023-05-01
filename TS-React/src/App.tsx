import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Stuff from './components/Stuff'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='App'>
      <Stuff word="Hello" cheese="brie"/>
    </div>
  )
}

export default App
