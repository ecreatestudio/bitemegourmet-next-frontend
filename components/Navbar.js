import Link from "next/link";
import React, { useEffect, useState } from "react";

const Navbar = ({ categories = [] }) => {
  // Sort categories by id, then return category buttons
  categories.sort((a, b) => (a.id > b.id ? 1 : b.id > a.id ? -1 : 0));

  const [menuVisible, setMenuVisible] = useState("hidden");
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };
  useEffect(() => {
    setMenuVisible(menuOpen ? "block" : "hidden lg:block");
  }, [menuOpen]);

  return (
    <div className="flex flex-col bg-gray-900 text-gray-300 min-w-1/4 lg:rounded-lg lg:my-2">
      <div className="flex justify-between ml-6 mr-6 my-3">
        {menuOpen ? (
          <button
            className="text-gray-400 hover:text-white focus:outline-none focus:text-white xl:hidden"
            onClick={toggleMenu}
          >
            <svg
              className="block h-6 w-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        ) : (
          <button
            className="text-gray-400 hover:text-white focus:outline-none focus:text-white xl:hidden"
            onClick={toggleMenu}
          >
            <svg
              className="block h-6 w-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        )}
        <Link href="/">
          <a>
            <img
              src="/bite-me-gourmet-logo-bright.png"
              alt="home"
              className="logo w-24 sm:w-32"
            />
          </a>
        </Link>
        <button className="snipcart-checkout flex flex-col items-center focus:outline-none focus:bg-gray-700">
          <img src="/basket3.svg" alt="Cart" height="20" width="20" />
          <span className="snipcart-total-price font-semibold text-sm text-indigo-200"></span>
        </button>
      </div>
      <div className={menuVisible}>
        <div
          className={
            "flex flex-col md:flex-row lg:flex-col justify-center bg-gray-800 py-2"
          }
        >
          {categories.map((_category) => (
            <Link href={`/categories/${_category.slug}`} key={_category.id}>
              <a
                className="hover:text-white focus:bg-gray-900 focus:text-white text-gray-400 font-semibold py-2 px-4 mx-1"
                onClick={toggleMenu}
              >
                {_category.name}
              </a>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
