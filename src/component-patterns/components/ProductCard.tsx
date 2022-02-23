import { createContext } from 'react';

import { useProduct } from '../hooks/useProduct';
import { ProductCtxProps, Props } from '../interfaces/product';
import styles from '../styles/styles.module.css';

export const ProductCtx = createContext({} as ProductCtxProps);
const { Provider } = ProductCtx;

export const ProductCard = ({ product, children }: Props) => {
  const { counter, increaseBy } = useProduct();
  return (
    <Provider value={{ counter, increaseBy, product }}>
      <div className={ styles.productCard }>
        { children }
      </div>
    </Provider>
  );
};
