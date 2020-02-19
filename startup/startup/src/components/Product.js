import React from 'react';
import ReactDom from 'react-dom';

function Product(props){
    return(
        <div>
            <div>Product Name:{props.product.name}</div>
            <div>Prodcut Prict : {props.product.price}</div>
        </div>
    );

}

export default Product;

