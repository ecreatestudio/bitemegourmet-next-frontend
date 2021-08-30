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
        <div className="grid grid-cols-12 pl-2 pb-1 pt-2 my-2 lg:mt-0 border rounded-lg bg-gray-900">
          <div className="col-span-1">
            <button
              className="text-white rounded-sm focus:text-gray-800 focus:bg-white mt-1"
              type="button"
              onClick={() => router.back()}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>
          </div>
          <div className="col-span-10">
            <h1 className="text-center md:text-left md:ml-5 my-1 text-2xl font-sans font-semibold text-gray-100">
              {category.name}
            </h1>
          </div>
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
