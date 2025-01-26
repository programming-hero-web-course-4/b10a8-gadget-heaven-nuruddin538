import { Outlet } from "react-router-dom";
import Navber from "../components/Navber";
import Footer from "../components/Footer";

const MainLayout = () => {
  return (
    <div>
      {/* Navbar */}
      <div className="bg-gray-100">
        <div className="h-7 lg:h-9">
          <Navber />
        </div>
        {/* Dynamic Section */}
        <div className="min-h-[calc(100vh-208px)] py-12 container mx-auto px-12">
          <Outlet />
        </div>
      </div>
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default MainLayout;
