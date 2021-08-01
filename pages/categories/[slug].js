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
      <div className="mx-2 lg:mx-0">
        <div className="my-2 lg:mt-0 border rounded-lg bg-gray-900">
          <h1 className="text-center md:text-left md:ml-5 my-1 text-2xl font-sans font-semibold text-gray-100">
            {category.name}
          </h1>
        </div>
        <ProductsList products={category.products} />
      </div>
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
