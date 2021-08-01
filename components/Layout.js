import Footer from "./Footer";
import Navbar from "./Navbar";
import Snipcart from "./Snipcart";

const Layout = ({ children, categories }) => {
  return (
    <div className="flex justify-center bg-gray-200">
      <div className="max-w-screen-xl flex flex-col min-h-screen w-full">
        <div className="flex flex-col h-12 text-center bg-red-500">
          <h4 className="mt-3 font-semibold text-base leading-tight truncate text-white">
            OPENING SOON! NOT TAKING ORDERS YET.
          </h4>
        </div>
        <div className="flex flex-col lg:flex-row lg:h-full">
          <Navbar categories={categories} />
          <div className="lg:h-full lg:max-w-3/4">{children}</div>
        </div>
        <Footer />
        <Snipcart />
      </div>
      <div
        hidden
        id="snipcart"
        data-api-key="MWE5ODhiZmEtMDBkZi00NjA5LTg0NjktZjVmNDVjMzQwNTA4NjM3NDQ5NzAyMDgyMTc1Mzc3"
      ></div>
    </div>
  );
};

export default Layout;
