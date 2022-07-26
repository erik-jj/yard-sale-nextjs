import React from 'react';
import ProductItem from '@components/ProductItem';
import UseGetProducts from '@hooks/UseGetProducts';
const API = 'https://api.escuelajs.co/api/v1/products';
import styles from '@styles/ProductList.module.scss';

const ProductList = () => {
  const products = UseGetProducts(API);

  return (
    <section className={styles['main-container']}>
      <div className={styles.ProductList}>
        {products.map((product) => (
          <ProductItem product={product} key={product.id} />
        ))}
      </div>
    </section>
  );
};

export default ProductList;
