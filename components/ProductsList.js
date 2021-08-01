import Link from "next/link";
import { getStrapiMedia } from "../utils/medias";

const ProductsList = ({ products }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
      {products.map((_product) => (
        <div
          key={_product.id}
          className="border rounded-lg bg-gray-100 hover:shadow-lg shadow-md bg-gray-800"
        >
          <div className="rounded-t-lg px-2">
            <img
              className="crop mx-auto mt-2 rounded-sm"
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
                  className="bg-white border-2 border-white hover:bg-gray-800 focus:bg-gray-800 hover:text-white focus:text-white
                    text-gray-800 font-bold mt-3 px-4 py-1 rounded-md"
                  type="button"
                >
                  View details
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
