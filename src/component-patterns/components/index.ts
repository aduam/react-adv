import { ProductCard as ProductCardHOC } from './ProductCard';
import { ProductButtons } from './ProductButtons';
import { ProductImg } from './ProductImg';
import { ProductTitle } from './ProductTitle';
import { ProductCardHOCProps } from '../interfaces/product';

const ProductCard: ProductCardHOCProps = Object.assign( ProductCardHOC, {
  Title: ProductTitle,
  Image: ProductImg,
  Buttons: ProductButtons,
});

export {
  ProductCard,
  ProductImg,
  ProductTitle,
  ProductButtons,
};
