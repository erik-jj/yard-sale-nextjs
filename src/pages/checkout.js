import React, { useContext } from 'react';
import Head from 'next/head';
import AppContext from '@context/AppContext';
import OrderItem from '../components/OrderItem';
import styles from '@styles/Checkout.module.scss';

const Checkout = () => {
  const { state } = useContext(AppContext);

  const sumTotal = () => {
    const reducer = (accumulator, currentValue) => accumulator + currentValue.price;
    const sum = state.cart.reduce(reducer, 0);
    return sum;
  };

  return (
    <>
      <Head>
        <title>Checkout</title>
      </Head>
      <div className={styles.Checkout}>
        <div className={styles['Checkout-container']}>
          <h1 className={styles.title}>My order</h1>
          <div className={styles['Checkout-content']}>
            <div className={styles.order}>
              <p>
                <span>03.25.22</span>
                <span>
                  {state.cart.length} Item{state.cart.length > 1 ? 's' : ''}
                </span>
              </p>
              <p>${sumTotal()}</p>
            </div>
          </div>
          {state.cart.map((item) => (
            <OrderItem key={item.id} product={item} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Checkout;
