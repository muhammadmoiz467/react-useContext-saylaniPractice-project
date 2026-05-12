import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Register from './Register'
import Login from './Login'

const Auth = () => {
    return (
        <>
            <Routes>
                <Route path='login' element={<Login/>} />
                <Route path='register' element={<Register/>} />
                <Route path='forgot-password' element={<></>} />
                <Route path='reset-password' element={<></>} />
                <Route path='*' element={<></>} />
            </Routes>
        </>
    )
}

export default Auth