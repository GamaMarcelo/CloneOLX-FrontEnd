import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Home from './Pages/Home';
import About from './Pages/About';
import NotFound from './Pages/NotFound';
import SignIn from './Pages/SignIn';
import SignUp from './Pages/SignUp';

export default () => {
    return (
        <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/about" element={<About />} />
            <Route exact path="/signin" element={<SignIn />} />
            <Route exact path="/signup" element={<SignUp />} />
            <Route path="*" element={<NotFound />} />
        </Routes>
    )
}