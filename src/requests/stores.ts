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
