import axios from 'axios';

const { API_BASE } = process.env;

function get(limit = 10, start = 0) {
  return axios.get(`${API_BASE}/posts?_limit=${limit}&_start=${start}`);
}
function getById(id) {
  return axios.get(`${API_BASE}/posts/${id}`);
}
export { get, getById };
