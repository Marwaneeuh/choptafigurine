import React from 'react'
// components
import ProductSlider from '../components/ProductSlider';

import useFetch from '../hooks/useFetch';
const LatestProducts = () => {
  // get new product
  const { data } = useFetch('/products?populate=*&filters[isNew]=true');
   
  return (
    <div className='mb-16'>
    <div className='container mx-auto'>
        <h2 className='h2 mb-6 text-center sl: text-left'>Derniers produits</h2>
    </div>
    <ProductSlider data={data} />
   </div>
  );
};

export default LatestProducts