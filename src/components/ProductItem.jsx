import React, { useContext } from 'react';
import Image from 'next/image';
import addedToCartImage from '@icons/bt_added_to_cart.svg';
import addToCartImage from '@icons/bt_add_to_cart.svg';
import AppContext from '@context/AppContext';
import styles from '@styles/ProductItem.module.scss';

const ProductItem = ({ product }) => {
  const { state, addToCart } = useContext(AppContext);

  const handleClick = (item) => {
    isProductAdded(item) ? alert('The product has already been added') : addToCart(item);
  };

  const isProductAdded = (item) => (state.cart.includes(item) ? true : false);

  return (
    <div className={styles.ProductItem}>
      <Image loader={() => product.images[0]} src={product.images[0]} alt={product.title} width={500} height={500} />
      <div className={styles['product-info']}>
        <div>
          <p>${product.price}</p>
          <p>{product.title}</p>
        </div>
        <figure
          className={styles['add-to-cart-img']}
          onClick={() => {
            handleClick(product);
          }}
        >
          <Image src={isProductAdded(product) ? addedToCartImage : addToCartImage} alt="add-to-cart" />
        </figure>
      </div>
    </div>
  );
};

export default ProductItem;
