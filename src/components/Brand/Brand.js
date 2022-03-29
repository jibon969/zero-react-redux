
import React, { useEffect} from 'react';
import axios from "axios";
import { useSelector, useDispatch } from 'react-redux';
import { setBrands } from '../../redux/actions/brandAction';

const Brand = () => {
    const brand = useSelector((state)=>state.brands);
    const dispatch = useDispatch();

    const fetchBrands = async () =>{
        const response = await axios.get(
            `https://jsonplaceholder.typicode.com/posts?_limit=10`
        );
        dispatch(setBrands(response.data))
    };
    useEffect(()=>{
        fetchBrands()
    }, []);

    return (
        <div>
            <h1>Hello I' am Home Page</h1>

        </div>
    );
};

export default Brand;