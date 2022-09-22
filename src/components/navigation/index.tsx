import React from 'react'
import Home from '../home'
import Details from '../home/details'
import { BrowserRouter, Route, Routes } from 'react-router-dom';

const Index = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/details' element={<Details />} />
            </Routes>
        </BrowserRouter>
    )
}

export default Index