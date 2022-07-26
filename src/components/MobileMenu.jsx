import React from 'react';
import styles from '@styles/MobileMenu.module.scss';
import Link from 'next/link';

const MobileMenu = () => {
  return (
    <div className={styles['mobile-menu']}>
      <ul>
        <li>
          <Link href="/">
            <a>CATEGORIES</a>
          </Link>
        </li>
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
            <a>Fornitures</a>
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

      <ul>
        <li>
          <Link href="/">
            <a>My orders</a>
          </Link>
        </li>
        <li>
          <Link href="/">
            <a>My account</a>
          </Link>
        </li>
      </ul>

      <ul>
        <li>
          <Link href="/">
            <a className={styles.email}>email@example.com</a>
          </Link>
        </li>
        <li>
          <Link href="/">
            <a className={styles['sign-out']}> Sign Out </a>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default MobileMenu;
