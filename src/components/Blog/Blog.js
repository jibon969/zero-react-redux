import React, { useEffect} from 'react';
import axios from "axios";
import { useSelector, useDispatch } from 'react-redux';
import { setBlog } from '../../redux/actions/blogAction';

const Blog = () => {
    const blog = useSelector((state)=>state.blog)
    const dispatch = useDispatch();

    // console.log("blog : ", blog)
    const fetchBlog = async () =>{
        const response = await axios.get(
            `https://jsonplaceholder.typicode.com/posts?_limit=10`
        );
        dispatch(setBlog(response.data))
    };
    useEffect(()=>{
        fetchBlog()
    }, []);
    
    // console.log("Product :", products)
    return (
        <div>
            <h3>Hello</h3>
        </div>
    );
};

export default Blog;