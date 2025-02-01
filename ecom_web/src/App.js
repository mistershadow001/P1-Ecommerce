import Navigation from "./Customer/Components/Navigation/Navigation";
import Product from "./Customer/Components/Product/Product";
import HomePage from "./Customer/Pages/HomePage";
import { BrowserRouter as Router, Route,Routes } from 'react-router-dom';

import Register from "./Customer/Components/Register/Register";
import SignIn from "./Customer/Components/Register/SingIn";
import ProductDetail from "./Customer/Components/Product/ProductDetails";
import Profile from "./Customer/Components/Register/Profile";
import Cart from "./Customer/Components/Product/Cart";




function App() {
  return (
    <>
    <Router>
    <Navigation/>
    <Routes>
        <Route path="/" element={<HomePage />} /> {/* HomePage will render at the root */}
        <Route path="/product" element={<Product />} />
        <Route path="/Register" element={<Register/>} />
        <Route path="/s" element={<SignIn/>} /> 
        <Route path="/product/:productId" element={<ProductDetail />} />
        <Route path="/Profile" element={<Profile/>}/>
        <Route path="/cart" element={<Cart/>}/>
        
    </Routes>

    </Router>
    
    
    
    
    
    
    </>
  );
}

export default App;
