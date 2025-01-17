import React, { useContext, useState } from 'react';
import { CartContext } from '../App';
import {toast } from 'react-toastify';
const Cart = () => {
  const { Cartitem, setCartitem } = useContext(CartContext);
  const [item, setitem] = useState(1)
  const removeFromCart = (id) => {
    setCartitem((prev) => prev.filter((item) => item.id !== id));
    toast.success("Product removed🥲")
  };
  function increment(){
    setitem(item+1)
  }
  function decrement(){
    setitem(item-1)
  }

  return (
    <div className="h-full bg-black w-full flex items-center justify-center flex-wrap gap-8 p-8">
      {Cartitem.length === 0 ? (
        <p className="text-white">No items in your cart</p>
      ) : (
        Cartitem.map((prod) => (
          <div
            key={prod.id}
            className="flex bg-white shadow-md rounded-lg overflow-hidden"
          >
            <div className="flex flex-col gap-4 p-4">
              <img
                src={prod.img}
                alt={prod.model}
                className="w-64 h-auto rounded-lg"
              />
            </div>

            {/* Right Section */}
            <div className="flex flex-col gap-4 p-6 w-80">
              <h2 className="text-xl font-semibold">{prod.model}</h2>
              <p className="text-gray-800 font-medium">Price: ₹{prod.price}</p>
              <p className="text-gray-600">{prod.description}</p>
              <div className='flex '>
                <p onClick={decrement} className='text-lg px-2 border-2 border-gray-300 font-bold hover:cursor-pointer'>-</p>
                <p className='text-lg px-1  font-bold'>{item}</p>
                <p onClick={increment} className='text-lg px-2 border-2 border-gray-300 font-bold hover:cursor-pointer'>+</p>
              </div>
              <button
                onClick={() => removeFromCart(prod.id)}
                className="bg-red-600 text-white font-bold py-2 px-4 rounded-md hover:bg-red-700"
              >
                Remove from Cart
              </button>
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default Cart;
