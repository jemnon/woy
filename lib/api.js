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
    `${process.env.API_BASE_URL}/spaces/${
      process.env.API_SPACE_ID
    }/entries/${id}?access_token=${process.env.API_TOKEN}`,
  );
}
function getBySlug(slug) {
  return axios.get(
    `${process.env.API_BASE_URL}/spaces/${
      process.env.API_SPACE_ID
    }/content_type/post/entries?access_token=${
      process.env.API_TOKEN
    }&fields.slug=${slug}`,
  );
}
function parseData(data) {
  if (!data) return null;
  const { fields } = data || {};
  return { ...fields };
}
export { get, getById, getBySlug, parseData };
