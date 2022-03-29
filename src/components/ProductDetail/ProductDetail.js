import React, { useEffect} from 'react';
import axios from "axios";
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { selectedProducts } from '../../redux/actions/productActions';


const ProductDetail = () => {
    const product = useSelector((state)=>state.product);
    const {id} = product;
    const { productId } = useParams();
    const dispatch = useDispatch();
    console.log(product)
    const fetchProducts = async () =>{
        const response = await axios.get(
            `https://jsonplaceholder.typicode.com/todos/${productId}`
        );
        dispatch(selectedProducts(response.data))
    };
    
    useEffect(()=>{
        if (product && productId !== "")fetchProducts()
        
    }, [productId])
    return (
        <div>
            <h3>I am ProductDetail</h3>
            {id}
        </div>
    );
};

export default ProductDetail;