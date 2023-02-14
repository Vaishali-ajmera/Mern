import { useContext } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Login from './components/Login'
import Signup from './components/Signup'
import Homepage from './components/Homepage'

import { UserContext } from './App'


function RoutesComp() {
  const userContext = useContext(UserContext)
  return (
    <BrowserRouter>
    <Routes>
      {userContext.email && (
        <Route path='/' element={<Homepage />} />
      )}
      {!userContext.email && (
        <>
          <Route path='/' element={<Login />} />
          <Route path='/signup' element={<Signup />} />
        </>
      )}
    </Routes>
    </BrowserRouter>
  )
}
export default RoutesComp