import React from "react";
import { Link } from "react-router-dom";

export default function ProductCard({ product }) {
  const handleAddToCart = () => {
    // Get the logged-in user's email
    const userEmail = localStorage.getItem("email");

    if (!userEmail) {
      alert("Please log in to add items to your cart.");
      return;
    }

    // Retrieve the existing cart or initialize a new one
    const cart = JSON.parse(localStorage.getItem("cart")) || {};

    // Initialize the user's cart if not already present
    if (!cart[userEmail]) {
      cart[userEmail] = [];
    }

    // Check if the product is already in the cart
    const existingProduct = cart[userEmail].find(
      (item) => item.id === product.id
    );

    if (existingProduct) {
      // If the product already exists, increase the quantity
      existingProduct.quantity += 1;
    } else {
      // Otherwise, add the new product with quantity 1
      cart[userEmail].push({ ...product, quantity: 1 });
    }

    // Save the updated cart back to localStorage
    localStorage.setItem("cart", JSON.stringify(cart));
    alert(`${product.name} has been added to your cart.`);
  };

  return (
    <div className="ProductCard border rounded-md shadow-sm p-3 transition-transform transform hover:scale-105 w-60">
      <Link to={`/product/${product.id}`}>
        <img
          src={product.image}
          alt={product.name}
          className="h-36 w-full object-cover rounded-md"
        />
      </Link>
      <h3 className="mt-2 text-base font-medium text-gray-900">
        {product.name}
      </h3>
      
      <p className="mt-1 text-xs text-gray-500">{product.category}</p>
      <div className="mt-2">
        <p className="text-base font-medium text-gray-900">
          ${product.discountedPrice}{" "}
          <span className="text-xs text-gray-500 line-through">
            ${product.originalPrice}
          </span>
        </p>
      </div>
      <button
        onClick={handleAddToCart}
        className="mt-3 w-full bg-blue-600 text-white py-1.5 rounded-md hover:bg-blue-700 transition-colors text-sm"
      >
        Add to Cart
      </button>
    </div>
  );
}
