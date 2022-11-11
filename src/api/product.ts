import { IRecords } from 'types/product';
import { paths } from 'utils/constant';
import { request } from './axios';

export const getProducts = async (): Promise<IRecords> => {
  return await request.get(`${paths.product}`);
};
