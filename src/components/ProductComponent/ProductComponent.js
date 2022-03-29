import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
const ProductComponent = () => {
    const products = useSelector((state)=>state.all_products.products)
    const renderList = products.map((product) =>{
        const {id} = product;
        return(
            <div>
                <div className="container">
                    <div className="row">
                        <div className="col-md-4 mb-4">
                            <div className="card">
                                <div className="card-body">
                                <h3>{id}</h3>
                                <Link to={`/product/${id}`}>Click Me</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )

    });
    return <>{renderList}</>
};

export default ProductComponent;