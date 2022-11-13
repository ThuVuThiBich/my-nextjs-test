import {
  IRecord,
  IRecordReview,
  IRecordReviews,
  IRecords,
  IRecordStock,
  IRecordStocks,
  TParam,
} from 'types/product';
import { paths } from 'utils/constant';
import { request } from './axios';

export const getProducts = async (): Promise<IRecords> => {
  return await request.get(`${paths.product}`);
};

export const getProductIds = async (): Promise<TParam[]> => {
  const { records } = await getProducts();
  return records.map((record) => ({ params: { id: record.id } }));
};

export const getProductById = async (id: string): Promise<IRecord> => {
  return await request.get(`${paths.product}/${id}`);
};

export const getProductStock = async (id: number): Promise<IRecordStocks> => {
  return await request.get(`${paths.stock}?filterByFormula=ProductID=${id}`);
};

export const getProductReviews = async (id: number): Promise<IRecordReviews> => {
  return await request.get(`${paths.reviews}?filterByFormula=ProductID=${id}`);
};
