import { Route, Routes } from 'react-router-dom'

import Footer from '@/components/Footer'
import Header from '@/components/Header'

import Home from './Home'
import TodosMy from './Todos'

const Frontend = () => {
    return (
        <>
            <Header />
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='todosmy/*' element={<TodosMy />} />
                <Route path='*' element={<h1>Page Not Found!</h1>} />
            </Routes>
            <Footer />
        </>
    )
}

export default Frontend