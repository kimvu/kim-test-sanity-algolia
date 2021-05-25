import client from "@sanity/client";
import algoliasearch from 'algoliasearch'

const algolia = algoliasearch(
    '3SGIEGWT5B',
    '3f992083b0269ed236ff92e2ad3c06ab'
  )

export const sanityClient = client({
  dataset: "production",
  useCdn: true,
  projectId: "9dz8b3g1",
});
