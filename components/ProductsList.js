import Link from "next/link";
import { getStrapiMedia } from "../utils/medias";

const ProductsList = ({ products }) => {
  return (
    <div className="m-3 lg:my-2 grid grid-cols-1 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-4">
      {products.map((_product) => (
        <div
          key={_product.id}
          className="border rounded-lg bg-gray-100 hover:shadow-lg shadow-md bg-gray-800"
        >
          <div className="rounded-t-lg px-2">
            <img
              className="crop mx-auto mt-2"
              src={getStrapiMedia(_product.image.formats.small.url)}
              alt={_product.title}
              min-width="325px"
            />
          </div>
          <div className="pl-4 pr-4 pb-4 pt-4 rounded-lg">
            <h4 className="mt-1 font-semibold text-base leading-tight truncate text-white">
              {_product.title}
            </h4>
            <div className="mt-1 text-sm text-gray-200 truncate">
              {_product.description}
            </div>
            <Link href={`/products/${_product.slug}`}>
              <a>
                <button
                  className="bg-white border-4 border-gray-800 hover:border-green-400 focus:border-green-400 text-gray-800 font-bold mt-3 py-2 px-4 rounded-lg"
                  type="button"
                >
                  View more
                </button>
              </a>
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductsList;
