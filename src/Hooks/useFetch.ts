import axios, { AxiosHeaders } from 'axios';
import { BASE_URL } from '../Consts/Constants';
type Method =
  | 'GET'
  | 'POST'
  | 'PUT'
  | 'DELETE'
  | 'PATCH'
  | 'HEAD'
  | 'OPTIONS'
  | 'TRACE';

type Params = {
  EndPoint: string;
  method?: Method | null;
  CallBack: (res: any, err?: any) => void;
  Headers?: AxiosHeaders | null;
  Body?: object | null;
};

export default (params: Params) => {
  const DEFAULT_HEADERS =
    params.Body ? { 'Content-Type': 'application/json' } : {};
  axios
    .request({
      baseURL: BASE_URL,
      url: params.EndPoint,
      method: params.method ?? 'GET',
      headers: { ...DEFAULT_HEADERS, ...params.Headers } ?? DEFAULT_HEADERS,
      data: params.Body ?? {},
    })
    .then((res) => res.data)
    .then((data) => params.CallBack(data, null))
    .catch((err:any) => {
      console.log(err);
      params.CallBack(null, err);
    });
};
