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