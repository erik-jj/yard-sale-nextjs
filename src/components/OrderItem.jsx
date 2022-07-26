import React, { useContext } from 'react';
import AppContext from '../context/AppContext';
import closeImage from '../assets/icons/icon_close.png';
import Image from 'next/image';
import styles from '@styles/OrderItem.module.scss';

const OrderItem = ({ product }) => {
  const { removeFromCart } = useContext(AppContext);
  const handleRemove = (product) => {
    removeFromCart(product);
  };

  return (
    <div className={styles.OrderItem}>
      <figure>
        <Image src={product?.images[0]} alt={product?.title} />
      </figure>
      <p>{product?.title}</p>
      <p>${product?.price}</p>
      <Image className="RemoveItemImage" src={closeImage} alt="close" onClick={() => handleRemove(product)} />
    </div>
  );
};

export default OrderItem;
