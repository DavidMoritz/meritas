// models/Response.model.ts

export interface PaginatedResponseData<T> {
  entities: T;

  /** The number of items type `T` in the DB that match query */
  total: number;
  /** Page number based on the limit of items requested. */
  page: number;
  /** The total number of items returned. */
  count?: number;
  /** The current page being returned. */
  current_page?: number;
  /** Total number of items per page. */
  pageSize: number;
  /** Total number of pages based on `pageSize` */
  pageCount: number;
}

interface ResponseSuccess<T> {
  success: true;
  status: 200 | 201 | 204;
  data: T;
  messages?: string[];
}

interface ResponseError {
  success: false;
  error: true;
  status: 400 | 401 | 403 | 404 | 409 | 500;
  /** Debug info for troubleshooting purposes only. */
  errors: string[];
  /** Human-readable error message */
  errorMessage?: string;
}

export type Response<T> = ResponseSuccess<T> | ResponseError;
