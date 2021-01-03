import Head from "next/head";
import { useRouter } from "next/router";
import { getProducts, getProduct } from "../../utils/api";
import { getStrapiMedia } from "../../utils/medias";
import { useState } from 'react';

const ProductPage = ({ product }) => {
  const router = useRouter();
  if (router.isFallback) {
    return <div>Loading category...</div>;
  }
  const [qtyValue, setQtyValue] = useState(1);
  const onQtyChange = (event) => {
    if (parseInt(event.target.value) > 1) {
      setQtyValue(event.target.value)
    } else {
      setQtyValue(1)
    }
  };

  return (
    <div className="m-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-4 mt-8">
      <Head>
        <title>{product.title} gourmet food</title>
      </Head>
      <div className="rounded-t-lg pt-2 pb-2">
        <img
          src={getStrapiMedia(product.image.formats.small.url)}
          className="m-auto"
          alt={product.title}
        />
      </div>
      <div className="w-full p-5 flex flex-col justify-between">
        <div>
          <h4 className="mt-1 font-semibold text-lg leading-tight truncate text-gray-700">
            {product.title}
          </h4>
          <div className="mt-1 font-semibold text-lg">${product.price} <span className="font-light">{product.serving}</span></div>
          
            {product.status === "published" ? (
              <div className="flex flex-wrap">
                <div className="flex-initial">
                  <div className="mt-4 text-gray-700 font-semibold pr-4">
                    <label>Qty:</label> <input value={qtyValue} onChange={onQtyChange} id="quantity" type="number" 
                      inputmode="decimal" className="text-center py-2" style={{maxWidth: 5 + 'em'}}></input>
                  </div>
                </div>
                <div className="flex-auto">
                  <button
                    className="snipcart-add-item w-full mt-4 bg-white border border-gray-200 d hover:shadow-lg text-gray-700 font-semibold py-2 px-6 rounded shadow"
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
          <div className="mt-4 text-gray-600">{product.description}</div>
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
