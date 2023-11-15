import React from 'react'
import Item from './Item';
import { useState, useEffect } from 'react';
import Button from './Button';

function PopularProducts() {
    const [products, setProducts] =useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        let myUrl = "https://fakestoreapi.com/products";
        fetch(myUrl)
          .then((res) => {
            if (!res.ok) {
              throw new Error('Failed to fetch products');
            }
            return res.json();
          })
          .then((data) => setProducts(data))
          .catch((err) => setError(err.message)); // Handle errors here
          console.log(error);
      }, []);

  return (
    <div className='popular-product'>

      <div className='popular-product__sect1'>
       <p>Popular Products</p>
       <Button myBtnClass='see-all' text='See All'/>

      </div>      
        
     <div className='popular'>
        {error ? (
          <p>Error: No internet</p>
        ) : (
          products.slice(0, 8).map((items) => (
            <Item key={items.title} img={items.image} title={items.title} price={`$${items.price}`} />
          ))
        )}
      </div>

    </div>
  )
}

export default PopularProducts