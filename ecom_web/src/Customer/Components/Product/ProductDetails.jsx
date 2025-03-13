import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import productsData from "./ProductsData";

function ProductDetail() {
  const { productId } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    // Fetch product data by ID
    const productData = productsData.find((p) => p.id === parseInt(productId));
    setProduct(productData);
  }, [productId]);

  const handleAddToCart = () => {
    const email = localStorage.getItem("email");

    if (!email) {
      alert("Please log in to add items to your cart.");
      return;
    }

    const cart = JSON.parse(localStorage.getItem("cart")) || {}; // Get existing cart or initialize empty cart
    const userCart = cart[email] || []; // Get user's specific cart or initialize an empty array

    // Check if the product already exists in the user's cart
    const existingProduct = userCart.find((item) => item.id === product.id);
    if (existingProduct) {
      existingProduct.quantity += 1; // Update quantity if the product is already in the cart
    } else {
      userCart.push({ ...product, quantity: 1 }); // Add the new product to the cart
    }

    cart[email] = userCart;
    localStorage.setItem("cart", JSON.stringify(cart)); // Save the updated cart back to local storage

    alert("Item added to cart!");
  };

  const handleBuyNow = async () => {
    const email = localStorage.getItem("email");
  
    if (!email) {
      alert("Please log in to proceed with the purchase.");
      return;
    }
  
    const userAddress = localStorage.getItem("address");
    if (!userAddress) {
      alert("Please update your address to proceed.");
      return;
    }

    const userId = localStorage.getItem("userId");
    if(!userId){
      alert("no user id")
      return;
    }
  
    // Step 1: Create Order on Backend
    try {
      const response = await fetch("http://localhost:8080/orders/razorpay/create", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          productId: product.id,
          email: email,
          price: product.discountedPrice,
          userId:userId,
          address: userAddress,
        }),
      });
  
      const orderData = await response.json();
  
      if (!response.ok) {
        alert("Failed to create order: " + orderData.message);
        return;
      }
  
      // Step 2: Open Razorpay Payment Gateway
      const options = {
        key: "rzp_test_5sMOmi0UPxB3yR", // Replace with your Razorpay Key
        amount: product.discountedPrice * 100, // Amount in paise
        currency: "INR",
        name: "My Ecom Store",
        description: `Payment for ${product.name}`,
        order_id: orderData.id, // Order ID from backend
        handler: async function (response) {
          alert("Payment Successful! Payment ID: " + response.razorpay_payment_id);
  
          // Step 3: Confirm Order in Backend
          const confirmResponse = await fetch("http://localhost:8080/orders/place", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              productId: product.id,
              email: email,
              price: product.discountedPrice,
              address: userAddress,
              userId:userId,
              paymentId: response.razorpay_payment_id,
            }),
          });
  
          const confirmData = await confirmResponse.text();
  
          if (confirmResponse.ok) {
            alert(confirmData);
  
            let orderIds = JSON.parse(localStorage.getItem("OrderIds")) || [];
            orderIds.push(product.id);
            localStorage.setItem("OrderIds", JSON.stringify(orderIds));
          } else {
            alert("Order confirmation failed: " + confirmData);
          }
        },
        prefill: {
          name: "John Doe",
          email: email,
          contact: "9999999999",
        },
        theme: { color: "#3399cc" },
      };
  
      if (window.Razorpay) {
        const razor = new window.Razorpay(options);
        razor.open();
      } else {
        alert("Razorpay script not loaded!");
      }
    } catch (error) {
      console.error("Error processing payment:", error);
      alert("An error occurred while processing the payment.");
    }
  };
  
  
  if (!product) return <div>Loading...</div>;

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white shadow-lg rounded-lg">
      <div className="flex justify-center mb-6">
        <img src={product.image} alt={product.name} className="h-72 object-contain" />
      </div>

      <h1 className="text-3xl font-semibold text-gray-900 mb-2">{product.name}</h1>
      <p className="text-lg text-gray-500 mb-2">{product.category}</p>

      

      <div className="flex items-center mb-4">
        <p className="text-2xl font-semibold text-gray-900">${product.discountedPrice}</p>
        <span className="ml-2 text-lg text-gray-500 line-through">${product.originalPrice}</span>
      </div>

      <div className="flex gap-4">
        <button
          onClick={handleAddToCart}
          className="w-full py-3 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 transition duration-200"
        >
          Add to Cart
        </button>
        <button
          onClick={handleBuyNow}
          className="w-full py-3 bg-yellow-600 text-white font-semibold rounded-md hover:bg-yellow-700 transition duration-200"
        >
          Buy Now
        </button>
      </div>
    </div>
  );
}

export default ProductDetail;
