import React, { FC } from 'react';
import { IProduct } from 'types/product';
import styles from './Product.module.css';

interface ProductProps {
  product: IProduct;
}

const Product: FC<ProductProps> = ({ product }) => {
  return <div className={styles.card}>{product.Name}</div>;
};

export default Product;
