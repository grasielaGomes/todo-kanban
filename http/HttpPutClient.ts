import { HttpResponse } from "./";

export type HttpPutParams<PutBodyType> = {
  url: string;
  body: PutBodyType;
};
export interface HttpPutClient<PutBodyType, ResponseType> {
  put(params: HttpPutParams<PutBodyType>): Promise<HttpResponse<ResponseType>>;
}
