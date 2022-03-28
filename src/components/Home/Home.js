import React from 'react';
import { Link } from "react-router-dom";

const Home = () => {
    return (
        <div>
            <h1>Hello I' am Home Page</h1>
            <nav>
                <Link to="/">Home</Link> | {" "}
                <Link to="about">About</Link>
            </nav>
        </div>
    );
};

export default Home;