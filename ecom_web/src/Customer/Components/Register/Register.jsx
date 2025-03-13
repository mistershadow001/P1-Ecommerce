import { useState } from "react";

function Register() {
  const [formData, setFormData] = useState({
    name: "",
    password: "",
    phone: "",
    email: "",
    address:"",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, password, phone, email, address } = formData;
    const pattern_email = /^[a-z0-9._%]+@[a-z0-9._]+\.[a-z]{2,}$/;
  
    if (name === "") {
      alert("Enter username");
      return;
    }
    if (!isNaN(name)) {
      alert("Enter only characters for the username");
      return;
    }
  
    if (password === "") {
      alert("Enter password");
      return;
    }
    if (password.length <= 4 || password.length >= 8) {
      alert("Password must be from 4 to 8 characters");
      return;
    }
  
    if (phone === "") {
      alert("Enter phone number");
      return;
    }
    if (isNaN(phone)) {
      alert("Enter a valid number");
      return;
    }
    if (phone.length > 10) {
      alert("Enter a valid phone number with a maximum of 10 digits");
      return;
    }
  
    if (email === "") {
      alert("Enter an email");
      return;
    }
    if (!pattern_email.test(email)) {
      alert("Enter a valid email");
      return;
    }
  
    // **Check if email already exists before proceeding**
    fetch("http://localhost:8080/show")
      .then((response) => response.json())
      .then((data) => {
        const foundUser = data.find((user) => user.email === email);
        if (foundUser) {
          alert("Email already exists! Please use a different email.");
        } else {
          // **If email does not exist, proceed with registration**
          const customer = { name, password, phone, email, address };
  
          fetch("http://localhost:8080/add", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(customer),
          })
            .then((response) => {
              if (response.ok) {
                window.location.href = "/s";
              } else {
                console.error("Registration failed");
              }
            })
            .catch(() => alert("Error occurred while registering!"));
        }
      })
      .catch(() => alert("Error fetching user data"));
  };
  
  return (
    <div className="max-w-sm mx-auto mt-10 p-4 border border-gray-300 rounded-lg shadow-lg bg-white">
      <h2 className="text-xl font-semibold mb-6 text-center">Register</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="u_name" className="block text-sm font-medium text-gray-700">
            Username
          </label>
          <input
            type="text"
            id="u_name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="mt-1 p-2 border border-gray-300 rounded w-full focus:outline-none focus:ring-2 focus:ring-blue-400"
            required
          />
        </div>
        <div>
          <label htmlFor="u_password" className="block text-sm font-medium text-gray-700">
            Password
          </label>
          <input
            type="password"
            id="u_password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            className="mt-1 p-2 border border-gray-300 rounded w-full focus:outline-none focus:ring-2 focus:ring-blue-400"
            required
          />
        </div>
        <div>
          <label htmlFor="p_no" className="block text-sm font-medium text-gray-700">
            Phone Number
          </label>
          <input
            type="text"
            id="p_no"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="mt-1 p-2 border border-gray-300 rounded w-full focus:outline-none focus:ring-2 focus:ring-blue-400"
            required
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="mt-1 p-2 border border-gray-300 rounded w-full focus:outline-none focus:ring-2 focus:ring-blue-400"
            required
          />
          <label htmlFor="address" className="block text-sm font-medium text-gray-700">
            Address
          </label>
          <input
            type="text"
            id="address"
            name="address"
            value={formData.address}
            onChange={handleChange}
            className="mt-1 p-2 border border-gray-300 rounded w-full focus:outline-none focus:ring-2 focus:ring-blue-400"
            required
          />
        </div>
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default Register;
