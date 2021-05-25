import articleStyle from "../styles/Article.module.css";
import imageUrlBuilder from "@sanity/image-url";
import Link from "next/link";
import { sanityClient } from "../data-fetching/sanity-client";
/*    <Link href={`article/${article.id}`}>
      <a className={articleStyle.card}>
        <h3>{article.title}&rarr;</h3>
        <p>{article.body}</p>
      </a>
  </Link>*/
const ArticleItem = ({ city }) => {
  console.log(city);

  const builder = imageUrlBuilder(sanityClient);
  return (
    <div className="bg-gray-100 border-indigo-600 dark:bg-gray-800 bg-opacity-95 border-opacity-60 | p-4 border-solid rounded-3xl border-2 | flex justify-around cursor-pointer | hover:bg-indigo-400 dark:hover:bg-indigo-600 hover:border-transparent | transition-colors duration-500 |">
      <img
        className="w-16 h-16 object-cover animate-spin"
        src={builder.image(city.mainImage).width(300).height(300).url()}
        alt=""
      />
      <div className="flex flex-col justify-center">
        <p className="text-gray-900 dark:text-gray-300 font-semibold">
          {city.name}
        </p>
        <p className="text-black dark:text-gray-100 text-justify font-semibold">
          {city.title}
        </p>
      </div>
    </div>
  );
};

export default ArticleItem;
