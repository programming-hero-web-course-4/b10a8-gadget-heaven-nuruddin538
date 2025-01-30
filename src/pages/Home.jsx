import { Outlet, useLoaderData } from "react-router-dom";
import BannerCard from "../components/BannerCard";
import Categories from "../components/Categories";
import Heading from "../components/Heading";
import HomeBanner from "../components/HomeBanner";
import { Helmet } from "react-helmet-async";

const Home = () => {
  const categories = useLoaderData();
  return (
    <div className="">
      <Helmet>
        <title>Home - Gadget Heaven</title>
        <meta
          name="description"
          content="Explore the latest cutting-edge gadgets and accessories."
        />
      </Helmet>
      {/* Banner */}
      <HomeBanner />
      {/* Banner Card */}
      <div className="w-full -mt-14 md:-mt-20 lg:-mt-28 z-20">
        <BannerCard />
      </div>
      {/* Card Section */}
      <Heading title={"Explore Cutting-Edge Gadgets"} />
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-2 p-4 md:p-6 lg:p-8">
        {/* Categories tab section */}
        <div className="lg:col-span-1">
          <Categories categories={categories}></Categories>
        </div>
        <div className="lg:col-span-3">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Home;
