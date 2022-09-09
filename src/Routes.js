import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Home from './Pages/Home';
import About from './Pages/About';

export default () => {
    return (
        <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/about" element={<About />} />
            
        </Routes>
    )
}