export enum HttpStatusCode {
  ok = 200,
  unathorized = 401,
  notFound = 404,
  badRequest = 400,
  serverError = 500
}

export type HttpResponse<ResponseType> = {
  statusCode: HttpStatusCode;
  body: ResponseType;
};
