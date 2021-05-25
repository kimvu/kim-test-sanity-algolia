import { sanityClient } from "./sanity-client";

const getCities = () => {
  const query = `
    *[_type == 'post']
  `;
  return sanityClient.fetch(query);
};

const getPostById = (id) => {
  const query = `
    *[_type == 'post' && _id == '${id}']
  `;
  return sanityClient.fetch(query);
};

export const cityService = {
  getCities,
  getPostById,
};
