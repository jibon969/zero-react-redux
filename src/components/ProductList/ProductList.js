import React, { useEffect} from 'react';
import axios from "axios";
import ProductComponent from '../ProductComponent/ProductComponent';
import { useSelector, useDispatch } from 'react-redux';
import { setProducts } from '../../redux/actions/productActions';

const ProductList = () => {
    const products = useSelector((state)=>state.all_products)
    const dispatch = useDispatch();

    //console.log("products : ", products)
    const fetchProducts = async () =>{
        const response = await axios.get(
            `https://jsonplaceholder.typicode.com/posts?_limit=10`
        );
        dispatch(setProducts(response.data))
    };
    useEffect(()=>{
        fetchProducts()
    }, []);
    // console.log("Product :", products)
    return (
        <div>
            <ProductComponent/>
        </div>
    );
};

export default ProductList;