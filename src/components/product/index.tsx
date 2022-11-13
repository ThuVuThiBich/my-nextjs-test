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
      <div className="w-full h-64">
        <img
          className="h-full w-full object-scale-down"
          src={product.pictures[0].thumbnails['large'].url}
          alt=""
        />
      </div>
      <div className="flex flex-col space-y-4">
        <div className="px-4 py-1 bg-yellow-400 w-fit rounded-lg text-white">
          {product.Price} $
        </div>
        <h3 className="truncate font-bold">{product.Name}</h3>
      </div>
    </div>
  );
};

export default Product;
