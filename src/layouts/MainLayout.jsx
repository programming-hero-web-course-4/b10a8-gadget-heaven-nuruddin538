import { Outlet } from "react-router-dom";
import Navber from "../components/Navber";
import Footer from "../components/Footer";
import { Toaster } from "react-hot-toast";

const MainLayout = () => {
  return (
    <div>
      <Toaster />
      {/* Navbar */}
      <div className="bg-gray-100">
        <div className="h-7 lg:h-9">
          <Navber />
        </div>
        {/* Dynamic Section */}
        <div className="min-h-[calc(100vh-208px)] container mx-auto p-12">
          <Outlet />
        </div>
      </div>
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default MainLayout;
