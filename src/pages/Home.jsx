import BannerCard from "../components/BannerCard";
import HomeBanner from "../components/HomeBanner";

const Home = () => {
  return (
    <div className="">
      {/* Banner */}
      <HomeBanner />
      {/* Banner Card */}
      <div className="w-full -mt-14 md:-mt-20 lg:-mt-28 z-20">
        <BannerCard />
      </div>
    </div>
  );
};

export default Home;
