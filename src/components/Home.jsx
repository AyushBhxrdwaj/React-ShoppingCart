import React, { useContext } from 'react';
import productList from '../data';
import Card from './Card';
import { CartContext } from '../App';
import {toast } from 'react-toastify';

const Home = () => {
  const { Cartitem, setCartitem } = useContext(CartContext);

  const AddtoCart = (id) => {
    const filtered_product = productList.find((product) => product.id === id);
    if (filtered_product && !Cartitem.some((item) => item.id === id)) {
      setCartitem((prev) => [...prev, filtered_product]);

      toast.success("Product added to your Cart!!!😘")
    }
  };

  return (
    <div className="flex flex-wrap justify-center gap-10 p-6">
      {productList.map((product) => (
        <Card key={product.id} data={product} AddtoCart={AddtoCart} />
      ))}
    </div>
  );
};

export default Home;
