import client from "@sanity/client";

export const sanityClient = client({
  dataset: "production",
  useCdn: true,
  projectId: "9dz8b3g1",
});
