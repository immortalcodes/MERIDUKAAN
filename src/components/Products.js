import React, { useState, useEffect } from 'react';
import axios from 'axios';
const Products = () => {
  const [products, setProducts] = useState([]);
useEffect(() => {
  fetchProducts();
}, []);
const fetchProducts = () => {
  axios
    .get('https://shoppingapiacme.herokuapp.com/shopping')
    .then((res) => {
      console.log(res);
      setProducts(res.data);
    })
    .catch((err) => {
      console.log(err);
    });
};
console.log(products)

return (
    <div>
        <div className="max-w-2xl mx-auto mb-56 py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
      <h2 className="block mb-4 font-extrabold" >List of Products</h2>
      <div className="grid grid-cols-1 gap-y-10 sm:grid-cols-2 gap-x-6 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
          {products.map((product) => (
            <a key={product.id} href={product.href} className="group">
              <div className="w-full h-auto aspect-w-1 aspect-h-1  rounded-lg overflow-hidden xl:aspect-w-7 xl:aspect-h-8">
                <img
                  src={product.image}
                  alt={product.imageAlt}
                  className="object-center object-cover group-hover:opacity-75 h-28 w-28"
                />
              </div>
              <h3 className="mt-4 text-sm text-gray-700">{product.brand}</h3>
              <p className="mt-1 text-lg font-medium text-gray-900">{product.item}</p>
            </a>
          ))}
        </div>
  </div>
  </div>
  );
};
export default Products;



