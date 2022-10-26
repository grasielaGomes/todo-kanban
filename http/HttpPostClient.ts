import { HttpResponse } from "./";

export type HttpPostParams<PostBodyType> = {
  url: string;
  body: PostBodyType;
};
export interface HttpPostClient<PostBodyType, ResponseType> {
  post(
    params: HttpPostParams<PostBodyType>
  ): Promise<HttpResponse<ResponseType>>;
}
