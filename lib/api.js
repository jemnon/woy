import axios from 'axios';

const { API_BASE } = process.env;

function get(path) {
  return axios.get(`${API_BASE}/${path}`);
}
export default get;
