import React from 'react';
import productList from '../data'; // Ensure your data file is correctly imported
import Card from './Card';

const Home = () => {
  return (
    <div className='flex flex-wrap justify-center gap-10 p-6'>
      {productList.map((product) => (
        <Card key={product.id} data={product} />
      ))}
    </div>
  );
};

export default Home;
