import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './routes/Home'
import Shop from './routes/Shop'
import Contact from './routes/Contact'

function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/shop' element={<Shop />}/>
        <Route path='/contact' element={<Contact />}/>
      </Routes>
    </>
  )
}

export default App
