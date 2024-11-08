import { useState } from 'react'
import './App.css'
import { Button } from './components/ui/button'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Button className="bg-red-600">Check</Button>
    </>
  )
}

export default App
