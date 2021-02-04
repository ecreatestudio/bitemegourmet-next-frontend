import Head from "next/head";
import { useRouter } from "next/router";
import ProductsList from "../../components/ProductsList";
import { getCategories, getCategory } from "../../utils/api";

const CategoryPage = ({ category }) => {
  const router = useRouter();
  if (router.isFallback) {
    return <div>Loading category...</div>;
  }

  return (
    <div>
      <Head>
        <title>{category.name} gourmet food</title>
      </Head>
      <h1 className="ml-5 mt-3 text-2xl font-sans font-semibold">{category.name}</h1>
      <ProductsList products={category.products} />
    </div>
  );
};

export default CategoryPage;

export async function getStaticProps({ params }) {
  const category = await getCategory(params.slug);
  return { props: { category } };
}

export async function getStaticPaths() {
  const categories = await getCategories();
  return {
    paths: categories.map((_category) => {
      return {
        params: { slug: _category.slug },
      };
    }),
    fallback: true,
  };
}
