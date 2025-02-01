import React, { useEffect, useState } from "react";
import {Link} from 'react-router-dom'

export default function Cart() {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    // Get the logged-in user's email
    const userEmail = localStorage.getItem("email");

    if (!userEmail) {
      alert("Please log in to view your cart.");
      return;
    }

    // Retrieve the cart from localStorage
    const cart = JSON.parse(localStorage.getItem("cart")) || {};

    // Get the cart items for the logged-in user
    if (cart[userEmail]) {
      setCartItems(cart[userEmail]);
    } else {
      setCartItems([]);
    }
  }, []);

  const handleRemoveItem = (productId) => {
    const userEmail = localStorage.getItem("email");

    if (!userEmail) {
      alert("Please log in to modify your cart.");
      return;
    }

    // Retrieve the cart
    const cart = JSON.parse(localStorage.getItem("cart")) || {};

    // Remove the item from the cart
    const updatedCartItems = cart[userEmail].filter(
      (item) => item.id !== productId
    );

    // Update the cart in localStorage
    cart[userEmail] = updatedCartItems;
    localStorage.setItem("cart", JSON.stringify(cart));

    // Update the state
    setCartItems(updatedCartItems);
  };

  return (
    <div className="Cart p-5">
      <h2 className="text-2xl font-bold mb-4">Your Cart</h2>
      {cartItems.length === 0 ? (
        <p className="text-gray-500">Your cart is empty.</p>
      ) : (
        <div className="grid gap-4">
          {cartItems.map((item) => (
            <div
              key={item.id}
              className="flex items-center justify-between border rounded-md p-4 shadow-sm"
            >
              <div className="flex items-center gap-4">
              <Link to={`/product/${item.id}`}>
                <img
                  src={item.image}
                  alt={item.name}
                  className="h-16 w-16 object-cover rounded-md"
                />
                </Link>
                <div>
                  <h3 className="text-lg font-medium">{item.name}</h3>
                  <p className="text-sm text-gray-500">
                    ${item.discountedPrice} x {item.quantity}
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <p className="text-lg font-medium">
                  ${(item.discountedPrice * item.quantity).toFixed(2)}
                </p>
                <button
                  onClick={() => handleRemoveItem(item.id)}
                  className="bg-red-600 text-white px-3 py-1 rounded-md hover:bg-red-700 transition-colors text-sm"
                >
                  Remove
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
