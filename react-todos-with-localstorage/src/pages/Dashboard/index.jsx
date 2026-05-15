import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './Home'
import Todos from './Todos'

const Dashboard = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='todos/*' element={<Todos />} />
    </Routes>
  )
}

export default Dashboard