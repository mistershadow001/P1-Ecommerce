'use client'

import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { 
  XMarkIcon, 
  Bars3Icon, 
  ShoppingCartIcon, 
  ChevronDownIcon, 
  ChevronUpIcon, 
  UserIcon 
} from '@heroicons/react/24/outline'
import ProductCard from '../Product/ProductCard'
import productsData from '../Product/ProductsData'

const navigation = {
  pages: [
    { name: 'Home', to: '/' },
    { name: 'New Arrivals', to: '/product' },
    { name: 'Sign In', to: '/s' },
    { name: 'Create Account', to: '/Register' },
  ],
}

const products = productsData

export default function Navigation() {
  const [open, setOpen] = useState(false)
  const [cartItems, setCartItems] = useState(0)
  const [searchQuery, setSearchQuery] = useState('')
  const [searchResults, setSearchResults] = useState([])
  const [isSortingOpen, setIsSortingOpen] = useState(false)
  const [selectedCategory, setSelectedCategory] = useState('')
  const [isAuthenticated, setIsAuthenticated] = useState(true) // Example state for user authentication

  const handleSearch = (event) => {
    event.preventDefault()
    const query = event.target.search.value.toLowerCase()
    setSearchQuery(query)

    const filteredResults = query
      ? products.filter(product =>
          product.name.toLowerCase().includes(query)
        )
      : products

    setSearchResults(filteredResults)
  }

  const handleClearSearch = () => {
    setSearchQuery('')
    setSearchResults([])
  }

  const addToCart = (product) => {
    setCartItems(prevItems => prevItems + 1)
  }

  useEffect(() => {
    if (searchResults.length === 0 && searchQuery !== '') {
      alert('No results found for your search.')
    }
  }, [searchResults, searchQuery])

  const handleSortToggle = () => {
    setIsSortingOpen(!isSortingOpen)
  }

  const handleCategorySelect = (category) => {
    setSelectedCategory(category)
    setIsSortingOpen(false)

    const filteredProducts = products.filter(product =>
      product.category.toLowerCase() === category.toLowerCase()
    )
    setSearchResults(filteredProducts)
  }

  return (
    <div className="bg-blue-700">
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="p-2 text-white lg:hidden"
      >
        <Bars3Icon className="w-6 h-6" />
      </button>

      <header className="p-4 bg-blue-700 shadow flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <img src="https://cdn.pixabay.com/photo/2022/09/18/07/41/logo-7462411_1280.png" alt="Company Logo" className="h-10" />
          <nav className="flex space-x-4">
            {navigation.pages.map((page) => (
              <Link
                key={page.name}
                to={page.to}
                className="text-white font-bold"
              >
                {page.name}
              </Link>
            ))}
          </nav>
        </div>
        <div className="flex items-center">
          <form onSubmit={handleSearch} className="flex items-center ml-auto">
            <input
              type="text"
              name="search"
              placeholder="Search..."
              className="p-2 border rounded-md focus:outline-none"
              aria-label="Search for products"
            />
            <button type="submit" className="ml-2 p-2 bg-white text-blue-700 font-bold rounded-md">Search</button>
          </form>
          {searchQuery && (
            <button 
              onClick={handleClearSearch}
              className="ml-2 p-2 text-white bg-red-500 rounded-md"
            >
              Clear Search
            </button>
          )}
          
          <button
            type="button"
            onClick={handleSortToggle}
            className="ml-4 p-2 text-blue bg-white rounded-md"
          >
            {isSortingOpen ? (
              <ChevronUpIcon className="w-6 h-6" />
            ) : (
              <ChevronDownIcon className="w-6 h-6" />
            )}
          </button>

          {isSortingOpen && (
            <div className="absolute right-0 mt-2 p-2 bg-white shadow-lg rounded-md">
              <button
                onClick={() => handleCategorySelect('Mens Clothing')}
                className="block w-full text-left p-2 hover:bg-gray-200"
              >
                Mens Clothing
              </button>
              <button
                onClick={() => handleCategorySelect('Shoes')}
                className="block w-full text-left p-2 hover:bg-gray-200"
              >
                Shoes
              </button>
              <button
                onClick={() => handleCategorySelect('')}
                className="block w-full text-left p-2 hover:bg-gray-200"
              >
                Clear
              </button>
            </div>
          )}

          <div className="relative ml-4">
            <Link to="/cart">
              <ShoppingCartIcon className="w-6 h-6 text-white" />
              {cartItems > 0 && (
                <span className="absolute top-0 right-0 bg-red-500 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">
                  {cartItems}
                </span>
              )}
            </Link>
          </div>
          
          {isAuthenticated && (
            <div className="relative ml-4">
              <Link to="/profile">
                <UserIcon className="w-6 h-6 text-white" />
              </Link>
            </div>
          )}
        </div>
      </header>

      <div className="mt-6 p-4 bg-white">
        {searchQuery && (
          <h3 className="text-xl font-bold mb-4">Search Results for: "{searchQuery}"</h3>
        )}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {searchResults.length > 0 ? (
            searchResults.map((product) => (
              <ProductCard key={product.id} product={product} addToCart={addToCart} />
            ))
          ) : (
            <></>
          )}
        </div>
      </div>
    </div>
  )
}
