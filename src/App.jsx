import { useState } from 'react'
import { Route, Routes } from "react-router-dom"

import Home from './pages/Home.jsx'
import Login from './pages/Login.jsx'
import Transfer from './pages/transfer.jsx'

import './App.css'

function App() {
  const [token, setToken] = useState();

  if (!token) return <Login setToken={ setToken } />
  console.log(token)

  return (
    <Routes>
      <Route path="/" element={ <Home account={token}/> }/>
      <Route path="/Transfer" element={ <Transfer account={ token } /> }/>
      <Route path="/Login" element={ <Login setToken={ setToken } /> }/>
    </Routes>
  )
}

export default App
