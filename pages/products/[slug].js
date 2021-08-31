import Head from "next/head";
import { useRouter } from "next/router";
import { getProducts, getProduct } from "../../utils/api";
import { getStrapiMedia } from "../../utils/medias";
import { useState } from "react";
import ReactMarkdown from "react-markdown";

const ProductPage = ({ product }) => {
  const router = useRouter();
  const [qtyValue, setQtyValue] = useState(1);

  if (router.isFallback) {
    return <div>Loading category...</div>;
  }

  const onQtyChange = (event) => {
    if (parseInt(event.target.value) < 1) {
      setQtyValue(1);
    } else {
      setQtyValue(event.target.value);
    }
  };

  return (
    <div className="lg:h-full bg-gray-800 p-3 lg:rounded-lg lg:mb-2">
      <Head>
        <title>{product.title} gourmet food</title>
      </Head>
      <div className="grid grid-cols-12">
        <div className="col-span-1">
          <button
            className="text-white rounded-sm focus:text-gray-800 focus:bg-white"
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
          <h1 className="text-center md:text-left md:ml-1 text-2xl font-sans font-semibold block text-white">
            {product.title}
          </h1>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        <div>
          <img
            src={getStrapiMedia(product.image.formats.small.url)}
            className="m-auto mt-2 rounded-md"
            alt={product.title}
            width="458"
            height="458"
          />
        </div>
        <div className="w-full flex flex-col justify-between">
          <div>
            <h4 className="mt-1 font-semibold text-lg leading-tight truncate text-white">
              Bite Me {product.title}
            </h4>
            <div className="mt-1 font-semibold text-lg text-white">
              ${product.price}{" "}
              <span className="font-light">{product.serving}</span>
            </div>

            {product.status === "published" ? (
              <div className="flex flex-wrap">
                <div className="flex-initial">
                  <div className="mt-4 text-white font-semibold pr-4">
                    <label>Qty:</label>{" "}
                    <input
                      value={qtyValue}
                      onChange={onQtyChange}
                      id="quantity"
                      type="number"
                      inputMode="numeric"
                      className="text-gray-800 text-center pt-3 pb-2 rounded-sm"
                      style={{ maxWidth: 5 + "em" }}
                    ></input>
                  </div>
                </div>
                <div className="flex-auto">
                  <button
                    className="snipcart-add-item w-full mt-4 text-white border-2 hover:bg-white focus:bg-white 
                    hover:text-gray-800 focus:text-gray-800 font-semibold py-2 px-6 rounded shadow"
                    data-item-id={product.id}
                    data-item-price={product.price}
                    data-item-url={router.asPath}
                    data-item-description={product.description}
                    data-item-image={getStrapiMedia(
                      product.image.formats.thumbnail.url
                    )}
                    data-item-name={product.title}
                    data-item-quantity={qtyValue}
                    v-bind="customFields"
                  >
                    Add to cart
                  </button>
                </div>
              </div>
            ) : (
              <div className="text-center mr-10 mb-1" v-else>
                <div
                  className="p-2 bg-indigo-800 items-center text-indigo-100 leading-none lg:rounded-full flex lg:inline-flex"
                  role="alert"
                >
                  <span className="flex rounded-full bg-indigo-500 uppercase px-2 py-1 text-xs font-bold mr-3">
                    Off the menu...
                  </span>
                  <span className="font-semibold mr-2 text-left flex-auto">
                    This item is not currently available.
                  </span>
                </div>
              </div>
            )}
            <div className="mt-4 text-gray-200">{product.description}</div>
            {product.ingredients !== null ? (
              <div className="mt-4 text-gray-200">
                <ReactMarkdown>{product.ingredients}</ReactMarkdown>
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;

export async function getStaticProps({ params }) {
  const product = await getProduct(params.slug);
  return { props: { product } };
}

export async function getStaticPaths() {
  const products = await getProducts();
  return {
    paths: products.map((_product) => {
      return {
        params: { slug: _product.slug },
      };
    }),
    fallback: true,
  };
}
