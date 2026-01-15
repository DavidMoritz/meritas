// services/Generic/GenericService.tsx

import type { AxiosResponse } from 'axios';

import {
  axiosDelete,
  axiosGet,
  axiosPatch,
  axiosPost,
  axiosPut,
} from '@/axios/axios.config.tsx';
import type { Resource } from '@/resources/Resource.model.ts';
import type { QueryOptions } from '@/types/QueryOptions.type.ts';
import type { PaginatedResponseData, Response } from '@/types/Response.type.ts';
import { isNonEmptyArray } from '@/utils/is-non-empty-array/is-non-empty-array.ts';

import Logger from '../Logger/Logger.service.ts';

export class GenericService<T extends Resource> {
  protected endpoint: string;

  constructor(endpoint: string) {
    this.endpoint = endpoint;
  }

  /** GET: Get one by ID */
  async get(id: T['_id']): Promise<Response<T>> {
    if (!id) {
      throw new Error('ID required to get resource.');
    }

    const url = `${this.endpoint}/${id}`;

    const response: AxiosResponse<Response<T>> = await axiosGet(url);

    if (response.status < 200 || response.status >= 300) {
      Logger.error(response.statusText);
      throw new Error(
        `This is an HTTP error: The status is ${response.status}`
      );
    }

    return response.data;
  }

  /** GET: Get all/many the resource type at endpoint  */
  async getAll(
    options?: QueryOptions
  ): Promise<Response<PaginatedResponseData<T[]>>> {
    const url = `${this.endpoint}`;

    const response: AxiosResponse<Response<PaginatedResponseData<T[]>>> =
      await axiosGet(url, options);

    if (response.status < 200 || response.status >= 300) {
      throw new Error(
        `This is an HTTP error: The status is ${response.status}`
      );
    }

    return response.data;
  }

  /** POST: create one item */
  async add(item: T): Promise<Response<T>> {
    const url = `${this.endpoint}`;

    const response: AxiosResponse<Response<T>> = await axiosPost(url, item);

    if (response.status < 200 || response.status >= 300) {
      Logger.error(response.statusText);
      throw new Error(
        `This is an HTTP error: The status is ${response.status}`
      );
    }

    return response.data;
  }

  /** POST: create many */
  async addMany(items: T[]): Promise<Response<PaginatedResponseData<T[]>>> {
    if (isNonEmptyArray(items)) {
      throw new Error('Create Many requires valid array of type T.');
    }

    const url = `${this.endpoint}/batch`;

    const response: AxiosResponse<Response<PaginatedResponseData<T[]>>> =
      await axiosPost(url, items);

    if (response.status < 200 || response.status >= 300) {
      Logger.error(response.statusText);
      throw new Error(
        `This is an HTTP error: The status is ${response.status}`
      );
    }

    return response.data;
  }

  /** PUT: Replace one.  Requires sending a complete object.  Missing fields will be set to null. */
  async replace(id: T['_id'], item: T): Promise<Response<T>> {
    if (!id) {
      throw new Error('ID required to replace item.');
    }

    const url = `${this.endpoint}/${id}`;

    const response: AxiosResponse<Response<T>> = await axiosPut(url, item);

    if (response.status < 200 || response.status >= 300) {
      Logger.error(response.statusText);
      throw new Error(
        `This is an HTTP error: The status is ${response.status}`
      );
    }

    return response.data;
  }

  /** PUT: Replace Many.  Requires sending an array of complete objects.  Missing fields will be set to null. */
  async replaceMany(items: T[]): Promise<Response<PaginatedResponseData<T[]>>> {
    if (isNonEmptyArray(items)) {
      throw new Error('Replace Many requires valid array of type T.');
    }

    const url = `${this.endpoint}/batch`;

    const response: AxiosResponse<Response<PaginatedResponseData<T[]>>> =
      await axiosPut(url, items);

    if (response.status < 200 || response.status >= 300) {
      Logger.error(response.statusText);
      throw new Error(
        `This is an HTTP error: The status is ${response.status}`
      );
    }

    return response.data;
  }

  /** PATCH: Update one item.  ID is only required field. */
  async patch(id: T['_id'], item: Partial<T>): Promise<Response<T>> {
    if (!id) {
      throw new Error('ID required to patch item.');
    }

    const url = `${this.endpoint}/${id}`;

    const response: AxiosResponse<Response<T>> = await axiosPatch(url, item);

    if (response.status < 200 || response.status >= 300) {
      Logger.error(response.statusText);
      throw new Error(
        `This is an HTTP error: The status is ${response.status}`
      );
    }

    return response.data;
  }

  /** PATCH: Update many items. */
  async patchMany(
    items: Partial<T>[]
  ): Promise<Response<PaginatedResponseData<T[]>>> {
    if (isNonEmptyArray(items)) {
      throw new Error('Update Many requires valid array of type T.');
    }

    const url = `${this.endpoint}/batch`;

    const response: AxiosResponse<Response<PaginatedResponseData<T[]>>> =
      await axiosPatch(url, items);

    if (response.status < 200 || response.status >= 300) {
      Logger.error(response.statusText);
      throw new Error(
        `This is an HTTP error: The status is ${response.status}`
      );
    }

    return response.data;
  }

  /** UPSERT: Update and Create */
  async upsert(item: T): Promise<Response<T>> {
    const url = `${this.endpoint}/upsert`;

    const response: AxiosResponse<Response<T>> = await axiosPut(url, item);

    if (response.status < 200 || response.status >= 300) {
      Logger.error(response.statusText);
      throw new Error(
        `This is an HTTP error: The status is ${response.status}`
      );
    }

    return response.data;
  }

  /** UPSERT: Update and Create Many */
  async upsertMany(items: T[]): Promise<Response<T[]>> {
    if (isNonEmptyArray(items)) {
      throw new Error('Upsert Many requires valid array of type T.');
    }

    const url = `${this.endpoint}/upsert/batch`;

    const response: AxiosResponse<Response<T[]>> = await axiosPut(url, items);

    if (response.status < 200 || response.status >= 300) {
      Logger.error(response.statusText);
      throw new Error(
        `This is an HTTP error: The status is ${response.status}`
      );
    }

    return response.data;
  }

  /** GET returns the total number of items at the endpoint */
  async count(options?: QueryOptions): Promise<Response<number>> {
    const url = `${this.endpoint}/count`;

    const response: AxiosResponse<Response<number>> = await axiosGet(
      url,
      options
    );

    if (response.status < 200 || response.status >= 300) {
      Logger.error(response.statusText);
      throw new Error(
        `This is an HTTP error: The status is ${response.status}`
      );
    }

    return response.data;
  }

  /** DELETE: delete one item */
  async delete(id: Resource['_id']): Promise<Response<boolean>> {
    if (!id) {
      throw new Error('ID required to delete item.');
    }

    const url = `${this.endpoint}/${id}`;

    const response: AxiosResponse<Response<boolean>> = await axiosDelete(url);

    if (response.status < 200 || response.status >= 300) {
      Logger.error(response.statusText);
      throw new Error(
        `This is an HTTP error: The status is ${response.status}`
      );
    }

    return response.data;
  }

  /** GET items whose name contains search term */
  async search(
    term: string,
    options?: QueryOptions
  ): Promise<Response<PaginatedResponseData<T[]>>> {
    // if (!term.trim()) {
    // 	// if not search term, return empty array.
    // 	return [];
    // }

    const url = `${this.endpoint}/search/${term}`;

    const response: AxiosResponse<Response<PaginatedResponseData<T[]>>> =
      await axiosGet(url, options);

    if (response.status < 200 || response.status >= 300) {
      throw new Error(
        `This is an HTTP error: The status is ${response.status}`
      );
    }

    return response.data;
  }
}

export default GenericService;
