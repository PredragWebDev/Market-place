import React from 'react';
import { Link } from 'react-router-dom';
import './Product.css';


const Product = (props) => {

        const product = props.product;
        const {img, name, price, id } = product;
        return (
                  <div className=" mt-4 mb-3">
                 <Link className="text-decoration-none" to={`/singleProduct/${id}`}>
                 <div className="card h-100 card-style  pd-bg">
                   <div className="d-flex justify-content-center align-items-center"> 
                     <img className="w-100" src={img} alt="..."/>
                     </div>
                    <div className="text-center my-2">
                      <h3 className="pd-titel mb-3">{name}</h3>
                      <h5 className="fw-bold text-white mb-2">Price: {price}</h5>
                    </div>
                  </div>
                 </Link>
                 </div>
         );
};

export default Product;