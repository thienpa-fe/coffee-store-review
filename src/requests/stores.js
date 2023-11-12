import { request } from '@/lib/axios/config';

const BASE_API = '/api/stores';

export const getAllStore = async () => {
  try {
    const { data, config, status, statusText } = await request.get(BASE_API);
    return { data, config, status, statusText };
  } catch (error) {
    return error;
  }
};

export const addNewStore = async (payload) => {
  try {
    // add new store
    // return new list
  } catch (error) {
    return error;
  }
};

export const updateStore = async (payload) => {
  try {
    // update new store
    // return new list
  } catch (error) {
    return error;
  }
};

export const deleteStore = async (storeId) => {
  try {
    // delete new store
    // return new list
  } catch (error) {
    return error;
  }
};
