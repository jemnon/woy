import axios from 'axios';

const API_BASE = process.env.API_BASE;

function get(path) {
  return axios.get(`${API_BASE}/${path}`);
}
export default get;
