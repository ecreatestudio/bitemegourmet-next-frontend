import Footer from "./Footer";
import Navbar from "./Navbar";
import Snipcart from "./Snipcart";
import Banner from "./Banner";

const Layout = ({ children, categories }) => {
  return (
    <div className="flex justify-center bg-gray-200">
      <div className="max-w-screen-xl flex flex-col min-h-screen w-full">
        <Banner enabled={true} />
        <div className="flex flex-col lg:flex-row lg:h-full">
          <Navbar categories={categories} />
          <div className="flex flex-col lg:max-w-3/4 lg:ml-2 lg:mt-2">
            {children}
          </div>
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
