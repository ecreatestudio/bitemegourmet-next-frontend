import Link from "next/link";

const CategoryButtons = ({ categories = [] }) => {
  // Sort categories by id, then return category buttons
  categories.sort((a,b) => (a.id > b.id) ? 1 : ((b.id > a.id) ? -1 : 0));
  return (
    <div className="container flex flex-wrap mx-auto gap-2 mt-8">
      {categories.map((_category) => (
        <Link href={`/categories/${_category.slug}`} key={_category.id}>
          <a className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow">
            {_category.name}
          </a>
        </Link>
      ))}
    </div>
  );
};

export default CategoryButtons;
