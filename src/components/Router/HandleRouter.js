import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from '../Home/Home';
import About from '../About/About';
import Header from '../Header/Header';
import ProductList from '../ProductList/ProductList';
const HandleRouter = () => {
    return (
        <div>
            <Routes>
                <Route path="/" element={<><Header/>< Home/></>} />
                <Route path="/about" element={<><Header/><About/></>} />
                <Route path="/product" element={<><Header/><ProductList/></>} />
            </Routes>
        </div>
    );
};

export default HandleRouter;