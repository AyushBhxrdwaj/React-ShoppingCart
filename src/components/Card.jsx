import React from 'react';

const Card = ({ data,AddtoCart }) => {
  return (
    <div className="w-60 p-5 shadow-md rounded-lg bg-white">
      <img className="h-50 w-full" src={data.img} alt={data.model} />
      <div className="flex flex-col gap-4 p-1">
        <p className="text-md font-semibold">{data.model}</p>
        <p className="text-md font-semibold">{data.price}</p>
        <p className="text-md font-semibold">{data.camera}</p>
        <p className="text-md font-semibold">{data.battery}</p>
        <button className="text-md font-bold bg-blue-600 p-2 rounded-xl text-white hover:bg-blue-700 transition" onClick={()=>AddtoCart(data.id)}>
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default Card;
