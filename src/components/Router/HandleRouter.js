import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from '../Home/Home';
import About from '../About/About';

const HandleRouter = () => {
    return (
        <div>
            <Routes>
                <Route path="/" element={< Home/>} />
                <Route path="/about" element={< About/>} />
            </Routes>
        </div>
    );
};

export default HandleRouter;