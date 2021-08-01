import Head from "next/head";
import ProductsList from "../components/ProductsList";
import { getProducts } from "../utils/api";

const HomePage = ({ products }) => {
  return (
    <div>
      <Head>
        <title>Bite Me Gourmet Online Ordering</title>
      </Head>
      <div className="mx-2 lg:mx-0">
        <div className="my-2 lg:mt-0 border rounded-lg bg-gray-900">
          <h1 className="text-center md:text-left md:ml-5 my-1 text-2xl font-sans font-semibold text-gray-100">
            Bite Size Delights
          </h1>
        </div>
        <ProductsList products={products} />
      </div>
    </div>
  );
};

export async function getStaticProps() {
  const products = await getProducts();
  return { props: { products } };
}

export default HomePage;
