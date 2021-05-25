import { articles } from "../../../data";

export default function handler({ id }, res) {
  const filtered = articles.filter((article) => article.id === id);
  if (filtered.length !== 0) {
    res.status(200).json(filtered);
  } else {
    res
      .status(404)
      .json({ message: `article with the id of ${id} doesnt exist` });
  }
}
