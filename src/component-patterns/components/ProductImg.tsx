import { useContext } from 'react';

import { ProductCtx } from './ProductCard';
import styles from '../styles/styles.module.css';
import noImage from '../assets/no-image.jpg';

export const ProductImg = () => {
  const { product } = useContext(ProductCtx);
  return (
    <img className={ styles.productImg } src={ product.img ?? noImage } alt='Product' />
  );
};
