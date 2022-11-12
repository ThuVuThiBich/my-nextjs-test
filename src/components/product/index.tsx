import { getProductById, getProductIds } from 'api/product';
import { useRouter } from 'next/router';
import React, { FC } from 'react';
import { IProduct } from 'types/product';
import styles from './Product.module.css';

interface ProductProps {
  recordId: string;
  product: IProduct;
}

const Product: FC<ProductProps> = ({ recordId, product }) => {
  const router = useRouter();
  return (
    <div className={styles.card} onClick={() => router.push(`${recordId}`)}>
      {product.Name}
    </div>
  );
};

export default Product;

