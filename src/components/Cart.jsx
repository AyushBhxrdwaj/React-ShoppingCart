import React, { useContext } from 'react';
import { CartContext } from '../App';
import { toast } from 'react-toastify';

const Cart = () => {
  const { Cartitem, setCartitem } = useContext(CartContext);

  const removeFromCart = (id) => {
    setCartitem((prev) => prev.filter((item) => item.id !== id));
    toast.warn("Product removed 🥲");
  };

  const increment = (id) => {
    setCartitem((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, count: item.count + 1 } : item
      )
    );
  };

  const decrement = (id) => {
    setCartitem((prev) =>
      prev.map((item) =>
        item.id === id && item.count > 1
          ? { ...item, count: item.count - 1 }
          : item
      )
    );
  };

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
              <div className="flex items-center gap-4">
                <button
                  onClick={() => decrement(prod.id)}
                  className="text-lg px-2 border-2 border-gray-300 font-bold hover:cursor-pointer"
                >
                  -
                </button>
                <p className="text-lg font-bold">{prod.count}</p>
                <button
                  onClick={() => increment(prod.id)}
                  className="text-lg px-2 border-2 border-gray-300 font-bold hover:cursor-pointer"
                >
                  +
                </button>
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
