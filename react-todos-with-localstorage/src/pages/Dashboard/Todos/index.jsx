import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Add from './Add'
import All from './All'

const Todos = () => {
    return (
        <Routes>
            <Route path='/' element={<All />} />
            <Route path='add' element={<Add />} />
        </Routes>
    )
}

export default Todos