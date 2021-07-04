import Head from "next/head";
import ProductsList from "../components/ProductsList";
import { getProducts } from "../utils/api";

const HomePage = ({ products }) => {
  return (
    <div>
      <Head>
        <title>Bite Me Gourmet Online Ordering</title>
      </Head>
      <h1 className="text-center md:text-left md:ml-5 mt-3 text-2xl font-sans font-semibold text-gray-800">
        Bite Size Delights
      </h1>
      <ProductsList products={products} />
    </div>
  );
};

export async function getStaticProps() {
  const products = await getProducts();
  return { props: { products } };
}

export default HomePage;
