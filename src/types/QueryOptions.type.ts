// types/QueryOptions.type.ts

// lower case strings match what Mongo/Mongoose API expect.
export type SortDirection = 'asc' | 'desc';

export type Filter = {
  eq?: string | number | boolean | Date;
  ne?: string | number | boolean | Date;
  any?: string[] | number[];
  all?: string[] | number[];
  lt?: number | Date;
  lte?: number | Date;
  gt?: number | Date;
  gte?: number | Date;
  startsWith?: string;
  endsWith?: string;
  contains?: string;
};

export type QueryOptions<T = Record<string, unknown>> = {
  /** number of items per page. */
  pageSize?: number;
  /** number of the page starting with 1 */
  page?: number;
  /** the key of the object to sort by. */
  orderBy?: keyof T;
  /** direction to sort data. `asc` or `desc` */
  sortDirection?: SortDirection;
  /** A generic search term (string) that can be included on a basic getAll request. */
  searchTerm?: string;
  /** Response should include all info for item(s) including meta-data that is normally not included. */
  verbose?: boolean;
  /** Used to generate a query string for some requests. */
  filters?: { [K in keyof T]?: Filter };
  /** Used to include image info on getAll and search requests that do not include image info by default. */
  includeImages?: boolean;
  /** Include items that have a "soft delete" */
  includeDeleted?: boolean;
};
