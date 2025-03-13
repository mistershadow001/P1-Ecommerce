import { useState } from 'react';
import { Dialog, Menu } from '@headlessui/react';
import { ChevronDownIcon, FunnelIcon } from '@heroicons/react/20/solid';
import ProductCard from './ProductCard'; 
import productsData from './ProductsData';

const sortOptions = [
  { name: 'Price: Low to High', value: 'asc', current: false },
  { name: 'Price: High to Low', value: 'desc', current: false },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

export default function Product() {
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);
  const [products, setProducts] = useState(productsData);
  const [sortOrder, setSortOrder] = useState(null);
  const [cartItems, setCartItems] = useState(0); 

  const handleSort = (order) => {
    const sortedProducts = [...products].sort((a, b) => {
      if (order === 'asc') return a.discountedPrice - b.discountedPrice;
      if (order === 'desc') return b.discountedPrice - a.discountedPrice;
      return 0;
    });
    setProducts(sortedProducts);
    setSortOrder(order);
  };

  

  return (
    <div className="bg-white">
      
      <Dialog open={mobileFiltersOpen} onClose={setMobileFiltersOpen} className="relative z-40 lg:hidden">
       
      </Dialog>

      <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-baseline justify-between border-b border-gray-200 pb-6 pt-24">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900">New Arrivals</h1>

          <div className="flex items-center">
            

            <button
              type="button"
              onClick={() => setMobileFiltersOpen(true)}
              className="ml-4 p-2 text-gray-400 hover:text-gray-500 sm:ml-6 lg:hidden"
            >
              <FunnelIcon className="h-5 w-5" aria-hidden="true" />
            </button>
          </div>
        </div>

        <section aria-labelledby="products-heading" className="pt-6 pb-24">
          <h2 id="products-heading" className="sr-only">
            Products
          </h2>
          <div className="grid grid-cols-1 gap-y-10 lg:grid-cols-3 lg:gap-x-8">
            {products.map((product) => (
              <ProductCard key={product.id} product={product}  />
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
