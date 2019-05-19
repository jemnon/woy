import axios from 'axios';

const { CMS_URL } = process.env;

function get() {
  return axios.get(`${CMS_URL}/heroes?_limit=1`);
}

export default get;
