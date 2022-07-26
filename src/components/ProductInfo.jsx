import React from 'react';
import img from 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940';
import cartImg from '@icons/bt_add_to_cart.svg';
import Image from 'next/image';
import '@styles/ProductInfo.scss';

const ProductInfo = () => {
  return (
    <>
      <Image src={img} alt="bike" />
      <div className="ProductInfo">
        <p>$35,00</p>
        <p>Bike</p>
        <p>With its practical position, this bike also fulfills a decorative function, add your hall or workspace.</p>
        <button className="primary-button add-to-cart-button">
          <Image src={cartImg} alt="add to cart" />
          Add to cart
        </button>
      </div>
    </>
  );
};

export default ProductInfo;
