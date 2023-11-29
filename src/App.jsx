import { useState } from 'react'
import { Route, Routes } from "react-router-dom"

import Home from './pages/Home.jsx'
import Login from './pages/Login.jsx'
import Transfer from './pages/transfer.jsx'

import './App.css'

function App() {
  const [account, setAccount] = useState();

  if (!account) return <Login setAccount={ setAccount } />

  return (
    <Routes>
      <Route path="/" element={ <Home account={account}/> }/>
      <Route path="/Transfer" element={ <Transfer setAccount={ setAccount } account={ account } /> }/>
    </Routes>
  )
}

export default App
