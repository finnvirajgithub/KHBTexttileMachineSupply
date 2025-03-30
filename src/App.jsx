import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './routes/Home'
import Shop from './routes/Shop'

function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/shop' element={<Shop />}/>
      </Routes>
    </>
  )
}

export default App
