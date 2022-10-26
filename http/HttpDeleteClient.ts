import { HttpResponse } from "./";

export type HttpDeleteParams = {
  url: string;
};
export interface HttpDeleteClient<ResponseType> {
  delete(params: HttpDeleteParams): Promise<HttpResponse<ResponseType>>;
}
