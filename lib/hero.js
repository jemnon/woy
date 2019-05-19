import axios from 'axios';

const { API_BASE } = process.env;

function get() {
  return axios.get(`${API_BASE}/heroes?_limit=1`);
}

export default get;
