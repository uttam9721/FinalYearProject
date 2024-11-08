import { useState } from 'react'
import './App.css'
import { Button } from './components/ui/button'
import { Routes,Router,Route } from 'react-router-dom'
// import { path } from 'path';
import AuthPage from './pages/auth'
function App() {
  const [count, setCount] = useState(0)

  return (
    <Routes>
      <Route path="/auth" element={<AuthPage/>}/>
    </Routes>
  );
}

export default App
