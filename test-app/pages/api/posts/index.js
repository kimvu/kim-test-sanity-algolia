import { articles } from "../../../data";
import { cityService } from "../../../data-fetching/city-service";
import client from "@sanity/client";
import algoliasearch from "algoliasearch";
import indexer from "sanity-algolia";
const algolia = algoliasearch("3SGIEGWT5B", "3f992083b0269ed236ff92e2ad3c06ab");

const sanityClient = client({
  dataset: "production",
  useCdn: true,
  projectId: "9dz8b3g1",
});
function toPlainText(blocks = []) {
  return (
    blocks
      // loop through each block
      .map((block) => {
        // if it's not a text block with children,
        // return nothing
        if (block._type !== "block" || !block.children) {
          return "";
        }
        // loop through the children spans, and join the
        // text strings
        return block.children.map((child) => child.text).join("");
      })
      // join the paragraphs leaving split by two linebreaks
      .join("\n\n")
  );
}
export default async function handler(req, res) {
  if (req.headers["content-type"] !== "application/json") {
    res.status(400);
    res.json({ message: "Bad request" });
    return;
  }

  const algoliaIndex = algolia.initIndex("dev_kim_miles");

  const sanityAlgolia = indexer(
    {
      post: {
        index: algoliaIndex,
        projection: `{
        title,
        "path": slug.current,
        "body": pt::text(body)`,
      },
    },
    (document) => {
      console.log(document);
      /*switch (document._type) {
        case "post":
          return Object.assign({}, document, {
            custom: "An additional custom field for posts, perhaps?",
          });
        case "article":
          return {
            title: document.heading,
            body: document.body,
            authorNames: document.authorNames,
          };
        default:
          return document;
      }*/
      return document;
    },
    (document) => {
      if (document.hasOwnProperty("isHidden")) {
        return !document.isHidden;
      }
      return true;
    }
  );
  return sanityAlgolia
    .webhookSync(sanityClient, req.body)
    .then(() => res.status(200).send("ok"));
}
