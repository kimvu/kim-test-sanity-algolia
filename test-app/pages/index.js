import Head from "next/head";
import ArticleList from "../components/ArticleList";
import { cityService } from "../data-fetching/city-service";
export default function Home({ cities }) {
  return (
    <div>
      <ArticleList cities={cities} />
    </div>
  );
}

export const getStaticProps = async () => {
  const cities = await cityService.getCities();
  return {
    props: {
      cities,
    },
  };
};
