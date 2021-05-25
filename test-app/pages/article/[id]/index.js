import Link from "next/link";
import { useRouter } from "next/router";
import Meta from "../../../components/Meta";
const article = ({ article }) => {
  console.log(article);
  return (
    <>
      <Meta title={article.title} description={article.excerpt} />
      <h1 className="text-4xl">{article.title}</h1>
      <p >{article.body}</p>
      <br />
      <Link href="/"> go back</Link>
    </>
  );
};

export const getStaticProps = async (context) => {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${context.params.id}`
  );
  const article = await res.json();
  return {
    props: { article },
  };
};

export const getStaticPaths = async () => {
  // generates paths so you already have the content when going to the path
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts`);
  const articles = await res.json();
  const ids = articles.map((a) => a.id);
  const paths = ids.map((id) => ({
    params: { id: id.toString() },
  }));
  return {
    paths,
    fallback: false,
  };
};
export default article;
