import articleStyle from "../styles/Article.module.css";
import ArticleItem from "./ArticleItem";

const ArticleList = ({ cities }) => {
  console.log(cities);
  return (
    <div className="flex flex-wrap center">
      {cities.map((city) => (
        <ArticleItem key={city._id} city={city}></ArticleItem>
      ))}
    </div>
  );
};

export default ArticleList;
