import axios from 'axios';

const { CMS_URL } = process.env;

function get(limit = 5, start = 0) {
  return axios.get(`${CMS_URL}/posts?_limit=${limit}&_start=${start}`);
}
function getById(id) {
  return axios.get(`${CMS_URL}/posts/${id}`);
}
export { get, getById };
