import axios from 'axios';

const baseURL = 'https://portfolio-js.b.goit.study/api';
const reviews = '/reviews';
const requests = '/requests';

const apiServices = axios.create({ baseURL });

const getReviews = async () => {
  const response = await apiServices.get(reviews);
  return response.data;
};

const postRequests = async (data) => {
  const response = await apiServices.post(requests, data);
  return response.data;
};

export {
  getReviews,
  postRequests,
};