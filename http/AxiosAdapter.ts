import axios, { AxiosResponse } from "axios";
import {
  HttpPostParams,
  HttpPostClient,
  HttpResponse,
  HttpGetParams,
  HttpGetClient,
  HttpDeleteClient,
  HttpDeleteParams,
  HttpPutClient,
  HttpPutParams
} from "./";

export class AxiosAdapter
  implements
    HttpPostClient<any, AxiosResponse>,
    HttpGetClient<AxiosResponse>,
    HttpDeleteClient<AxiosResponse>,
    HttpPutClient<any, AxiosResponse>
{
  async get(params: HttpGetParams): Promise<HttpResponse<AxiosResponse>> {
    const { status, data } = await axios.get(params.url);
    return {
      statusCode: status,
      body: data
    };
  }

  async post(
    params: HttpPostParams<any>
  ): Promise<HttpResponse<AxiosResponse>> {
    const { status, data } = await axios.post(params.url, params.body);
    return {
      statusCode: status,
      body: data
    };
  }

  async put(params: HttpPutParams<any>): Promise<HttpResponse<AxiosResponse>> {
    const { status, data } = await axios.put(params.url, params.body);
    return {
      statusCode: status,
      body: data
    };
  }

  async delete(params: HttpDeleteParams): Promise<HttpResponse<AxiosResponse>> {
    const { status, data } = await axios.delete(params.url);
    return {
      statusCode: status,
      body: data
    };
  }
}
