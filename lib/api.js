import axios from 'axios';

function get(limit = 5, skip = 0, type = 'post') {
  return axios.get(
    `${process.env.API_BASE_URL}/spaces/${
      process.env.API_SPACE_ID
    }/entries?access_token=${
      process.env.API_TOKEN
    }&content_type=${type}&skip=${skip}&limit=${limit}`,
  );
}
function getById(id) {
  return axios.get(
    `${process.API_BASE_URL}/spaces/${
      process.env.API_SPACE_ID
    }/entries/${id}?access_token=${process.env.API_TOKEN}`,
  );
}
export { get, getById };
