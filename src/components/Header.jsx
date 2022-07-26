import React, { useState, useContext } from 'react';
import Menu from '@components/Menu';
import MobileMenu from '@components/MobileMenu';
import menu from '@icons/icon_menu.svg';
import logo from '@logos/logo_yard_sale.svg';
import shoppingCart from '@icons/icon_shopping_cart.svg';
import AppContext from '@context/AppContext';
import MyOrder from '@containers/MyOrder';
import Image from 'next/image';
import Link from 'next/link';
import styles from '../styles/Header.module.scss';

const Header = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const [toggleMyOrder, setToggleMyOrder] = useState(false);
  const [toggleMobileMenu, setToggleMobileMenu] = useState(false);

  const { state } = useContext(AppContext);

  const handleToggleMenu = () => {
    setToggleMenu(!toggleMenu);
  };

  const handleToggleMyOrder = () => {
    setToggleMyOrder(!toggleMyOrder);
  };

  const handleToggleMobileMenu = () => {
    setToggleMobileMenu(!toggleMobileMenu);
  };

  return (
    <nav className={styles.nav}>
      <Image src={menu} alt="menu" className={styles.menu} onClick={handleToggleMobileMenu} />
      <div className={styles['navbar-left']}>
        <Link href="/">
          <Image src={logo} alt="logo" className={styles['nav-logo']} />
        </Link>
        <ul>
          <li>
            <Link href="/">
              <a>All</a>
            </Link>
          </li>
          <li>
            <Link href="/">
              <a>Clothes</a>
            </Link>
          </li>
          <li>
            <Link href="/">
              <a>Electronics</a>
            </Link>
          </li>
          <li>
            <Link href="/">
              <a>Furnitures</a>
            </Link>
          </li>
          <li>
            <Link href="/">
              <a>Toys</a>
            </Link>
          </li>
          <li>
            <Link href="/">
              <a>Others</a>
            </Link>
          </li>
        </ul>
      </div>
      <div className={styles['navbar-right']}>
        <ul>
          <li className={styles['navbar-email']} onClick={handleToggleMenu}>
            email@example.com
          </li>
          <li className={styles['navbar-shopping-cart']} onClick={handleToggleMyOrder}>
            <Image src={shoppingCart} alt="shopping cart" />
            {state.cart.length > 0 ? <div> {state.cart.length}</div> : null}
          </li>
        </ul>
      </div>
      {toggleMenu && <Menu />}
      {toggleMyOrder && <MyOrder setToggle={setToggleMyOrder} />}
      {toggleMobileMenu && <MobileMenu />}
    </nav>
  );
};

export default Header;
