// Config API calls here
import { request } from '@/lib/axios/config';

const BASE_API = '/api/reviews';

export const getAllReview = async () => {
  try {
    const { data, config, status, statusText } = await request.get(BASE_API);
    return { data, config, status, statusText };
  } catch (error) {
    return error;
  }
};

export const addNewReview = async (payload) => {
  try {
    // add new review
    // return new list
  } catch (error) {
    return error;
  }
};

export const updateReview = async (payload) => {
  try {
    // update new review
    // return new list
  } catch (error) {
    return error;
  }
};

export const deleteReview = async (reviewId) => {
  try {
    // delete new review
    // return new list
  } catch (error) {
    return error;
  }
};
