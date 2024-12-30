import React from 'react';
import './ProductCard.css';

function ProductCard(product) {
  
  return (
    <div className="ProductCard">
      <div>
        <img
          className="h-full w-full object-cover object-left-top"
          src={product.image}
          alt="Product"
        />
      </div>
      <div className="text">
        <div className="bg-white p-3">
          <p className="font-bold">{product.name}</p>
          <p>{product.des}</p>
        </div>
        <div className="flex items-center space-x-2 p-3">
          <p className="font-semibold">{product.price}</p>
          <p className="line-through opacity-50">{product.main_price}</p>
          <p className="text-green-600 font-bold">{product.discount}</p>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
