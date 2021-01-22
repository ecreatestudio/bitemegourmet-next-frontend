import CategoryButtons from "./CategoryButtons";
import Footer from "./Footer";
import Navbar from "./Navbar";
import Snipcart from "./Snipcart";

const Layout = ({ children, categories }) => {
  return (
    <div className="flex justify-center bg-gray-200">
      <div className="max-w-screen-lg flex flex-col min-h-screen w-full">
        <Navbar categories={categories} />
        <div className="flex-grow">{children}</div>
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
