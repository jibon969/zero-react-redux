import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from '../Home/Home';
import About from '../About/About';
import Header from '../Header/Header';
import ProductList from '../ProductList/ProductList';
import ProductDetail from '../ProductDetail/ProductDetail';
import Brand from "../Brand/Brand";
import Blog from '../Blog/Blog';

const HandleRouter = () => {
    return (
        <div>
            <Routes>
                <Route path="/" element={<><Header/>< Home/></>} />
                <Route path="/about" element={<><Header/><About/></>} />
                <Route path="/blog" element={<><Header/><Blog/></>} />
                <Route path="/brand" element={<><Header/><Brand/> </>}/>
                <Route path="/product" element={<><Header/><ProductList/></>} />
                <Route path="/product/:productId" element={<><Header/><ProductDetail/></>} />
                <Route>404 Page Not Found</Route>
            </Routes>
        </div>
    );
};

export default HandleRouter;