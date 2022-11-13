export interface IRecords {
  records: IRecord[];
}

export interface IRecord {
  id: string;
  createdTime: string;
  fields: IProduct;
}

export interface IProduct {
  Name: string;
  Price: number;
  Brand: string;
  Id: number;
  pictures: IPicture[];
  Status: string;
  Description: string;
}

export interface IPicture {
  id: string;
  width: number;
  height: number;
  url: string;
  filename: string;
  size: number;
  type: string;
  thumbnails: IThumbnail;
}

export interface IThumbnail {
  [name: string]: IThumbDetail;
}

export interface IThumbDetail {
  url: string;
  width: number;
  height: number;
}

export type TParam = {
  params: { id: string };
};

export interface IStock {
  ProductID: number;
  Stock: number;
}

export interface IRecordStock {
  id: string;
  createdTime: string;
  fields: IStock;
}
export interface IRecordStocks {
  records: IRecordStock[];
}

export interface IReview {
  ProductID: string;
  Rating: number;
  Title: string;
  Date: string;
  Description: string;
  Author: string;
}
export interface IRecordReview {
  id: string;
  createdTime: string;
  fields: IReview;
}
export interface IRecordReviews {
  records: IReview[];
}
