import React from 'react';
import ProductInfo from '../components/ProductInfo';
import '../styles/ProductDetail.scss';
import closeImage from '../assets/icons/icon_close.png';
import Image from 'next/image';

const ProductDetail = () => {
  return (
    <aside className="ProductDetail">
      <div className="ProductDetail-close">
        <Image src={closeImage} alt="close" />
      </div>
      <ProductInfo />
    </aside>
  );
};

export default ProductDetail;
