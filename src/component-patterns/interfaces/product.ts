import { ReactElement } from 'react';

export interface Props {
  children?: ReactElement | ReactElement[];
  product: Product;
}

export interface Product {
  id: string;
  title: string;
  img?: string;
}

export interface ProductCtxProps {
  counter: number;
  product: Product;
  increaseBy: (arg: number) => void;
}

export interface ProductCardHOCProps {
  ({ product, children }: Props): JSX.Element,
  Title: ({ title }: { title?: string; }) => JSX.Element,
  Image: () => JSX.Element,
  Buttons: () => JSX.Element,
}
