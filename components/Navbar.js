import Link from "next/link";

const Navbar = () => {
  return (
    <div className="flex justify-between ml-6 mr-6 mt-4">
      <Link href="/">
        <a>
          <img
            src="/bite-me-gourmet-logo.png"
            alt="home"
            className="logo w-24 sm:w-32"
          />
        </a>
      </Link>
      <button className="snipcart-checkout flex flex-col items-center">
        <img src="/basket3.svg" alt="Cart" height="20" width="20" />
        <span className="snipcart-total-price font-semibold text-sm text-indigo-500"></span>
      </button>
    </div>
  );
};

export default Navbar;
