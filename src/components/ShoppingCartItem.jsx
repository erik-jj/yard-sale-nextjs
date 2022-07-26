import React from 'react';
import '../styles/ShoppingCartItem.scss';
import img from 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940';
import Image from 'next/image';

const ShoppingCartItem = () => {
  return (
    <div className="ShoppingCartItem">
      <figure>
        <Image src={img} alt="bike" />
      </figure>
      <p>Bike</p>
      <p>$30,00</p>
    </div>
  );
};

export default ShoppingCartItem;
