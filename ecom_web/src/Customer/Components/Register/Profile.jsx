import React, { useState, useEffect } from "react";
import productsData from "../Product/ProductsData";

function Profile() {
    const [user, setUser] = useState(null);
    const [error, setError] = useState(null);
    const [updatedUser, setUpdatedUser] = useState({});
    const [orders, setOrders] = useState([]);
    const [userProducts, setUserProducts] = useState([]);

    useEffect(() => {
        const email = localStorage.getItem("email");
        console.log("Fetching user for email:", email);
        if (email) {
            fetch("http://localhost:8080/show")
                .then((response) => response.json())
                .then((data) => {
                    console.log("Fetched user data:", data);
                    const foundUser = data.find((user) => user.email === email);
                    if (foundUser) {
                        console.log("User found:", foundUser);
                        setUser(foundUser);
                        setUpdatedUser(foundUser);
                        localStorage.setItem("userId", foundUser.id);
                    } else {
                        console.error("User not found");
                        setError("User not found!");
                    }
                })
                .catch((err) => {
                    console.error("Error fetching user data:", err);
                    setError("Error fetching user data");
                });
        } else {
            console.error("No email found in localStorage");
            setError("Please sign in");
        }
    }, []);

    useEffect(() => {
        const userId = Number(localStorage.getItem("userId")); // Ensure userId is a number
        console.log("User ID:", userId);
    
        if (userId) {
            fetch("http://localhost:8080/orders/all")
                .then((response) => response.json())
                .then((data) => {
                    console.log("Fetched Orders:", data);
    
                    const userOrders = data.filter(order => order.userId === userId);
                    console.log("Filtered User Orders:", userOrders);
    
                    const productIds = userOrders.map(order => Number(order.productId)); // Ensure IDs are numbers
                    console.log("Extracted Product IDs:", productIds);
    
                    console.log("Available Products:", productsData);
    
                    const userProductsList = productsData.filter(product => 
                        productIds.includes(Number(product.id)) // Convert to Number for comparison
                    );
    
                    console.log("Matched Products:", userProductsList);
                    setOrders(userOrders);
                    setUserProducts(userProductsList);
                })
                .catch((err) => console.error("Error fetching orders:", err));
        }
    }, []);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setUpdatedUser((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleUpdateUser = () => {
        if (user) {
            console.log("Updating user:", updatedUser);
            fetch(`http://localhost:8080/update/${user.id}`, {
                method: "PUT",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(updatedUser),
            })
                .then((response) => response.json())
                .then((data) => {
                    console.log("Updated user response:", data);
                    setUser(updatedUser);
                })
                .catch((err) => console.error("Error updating profile:", err));
        }
    };

    const handleSignOut = () => {
        console.log("Signing out user");
        localStorage.removeItem("email");
        localStorage.removeItem("token");
        localStorage.removeItem("userId");
        window.location.href = "/";
    };

    if (error) {
        return <div>{error}</div>;
    }

    if (!user) {
        return <div>Loading...</div>;
    }

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="bg-white rounded-lg shadow-lg w-full max-w-4xl p-6">
                <h2 className="text-3xl font-bold text-center mb-6">Profile</h2>

                <div>
                    <label>Name</label>
                    <input
                        type="text"
                        name="name"
                        value={updatedUser.name}
                        onChange={handleInputChange}
                        placeholder="Enter your name"
                        className="w-full px-4 py-2 mb-4"
                    />
                    <label>Email</label>
                    <input
                        type="email"
                        name="email"
                        value={updatedUser.email}
                        onChange={handleInputChange}
                        placeholder="Enter your email"
                        className="w-full px-4 py-2 mb-4"
                    />
                    <label>Address</label>
                    <input
                        type="text"
                        name="address"
                        value={updatedUser.address}
                        onChange={handleInputChange}
                        placeholder="Enter your address"
                        className="w-full px-4 py-2 mb-4"
                    />
                    <button onClick={handleUpdateUser} className="w-full bg-green-500 text-white py-2 mt-4">
                        Update Profile
                    </button>
                </div>

                <button onClick={handleSignOut} className="w-full bg-red-500 text-white py-2 mt-6">
                    Sign Out
                </button>

                
    
                <div className="mt-6">
    <h3 className="text-2xl font-semibold text-center mb-6 text-gray-800">Your Orders</h3>
    {userProducts.length > 0 ? (
        <ul className="flex space-x-6 overflow-x-auto">
            {userProducts.map((product, index) => (
                <li key={index} className="flex-none bg-white p-4 rounded-lg shadow-lg hover:shadow-2xl transition-shadow w-60 h-auto">
                    {/* Display Product Image */}
                    <img 
                        src={product.image || 'default-image-url'} 
                        alt={product.name} 
                        className="w-24 h-24  " 
                    />
                    
                    {/* Product Details */}
                    <div className="flex flex-col justify-between ">
                        <h4 className="text-lg font-semibold text-gray-800">{product.name}</h4>
                        <p className="text-sm text-gray-500">{product.category}</p>
                        
                        {/* Description */}
                        <p className="text-xs text-gray-500 ">{product.description}</p>

                        {/* Product Details - Price and Order Info */}
                        <div className="text-xs text-gray-600 mt-4 space-y-1">
                            {/* Set current date as order date */}
                            <p><strong>Order Date:</strong> {product.orderDate || new Date().toLocaleDateString()}</p>
                            <p><strong>Quantity:</strong> {product.quantity || 1}</p>
                            <p><strong>Original Price:</strong> ${product.originalPrice || '0.00'}</p>
                            <p><strong>Discounted Price:</strong> ${product.discountedPrice || '0.00'}</p>
                        </div>
                    </div>
                </li>
            ))}
        </ul>
    ) : (
        <p className="text-gray-500 text-center">You have no orders yet.</p>
    )}
</div>






            </div>
        </div>
    );
}

export default Profile;
