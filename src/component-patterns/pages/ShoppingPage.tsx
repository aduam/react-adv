import { FC } from 'react';

import {
  ProductCard,
} from '../components';

const product = {
  id: '1',
  title: 'Cofee mug -Card',
  img: './coffee-mug.png'
};

export const ShoppingPage: FC = () => {
  return (
    <div>
      <h1>Shopping Store</h1>
      <hr />
      <div style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap' }}>
        <ProductCard product={ product }>
          <ProductCard.Image />
          <ProductCard.Title />
          <ProductCard.Buttons />
        </ProductCard>
        <ProductCard product={ product }>
          <ProductCard.Image />
          <ProductCard.Title />
          <ProductCard.Buttons />
        </ProductCard>
      </div>
    </div>
  );
};
