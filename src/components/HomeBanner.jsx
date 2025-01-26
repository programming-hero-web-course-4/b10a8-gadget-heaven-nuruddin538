import BannerTitle from "./BannerTitle";

const HomeBanner = () => {
  return (
    <div className="px-3.5 border border-gray-300 pb-3.5 rounded-b-md">
      <div className="hero bg-[#9538E2] rounded-b-md min-h-20 pb-28">
        <div className="hero-content text-center container max-w-screen-xl mx-auto">
          <div className="max-w-3xl font-extrabold text-3xl text-white">
            <BannerTitle
              title={
                "Upgrade Your Tech Accessorize with <br> Gadget Heaven Accessories"
              }
              subtitle={
                "Explore the latest gadgets that will take your experience to the next level. From smart devices to <br> the coolest accessories, we have it all!"
              }
            />
            <button className="btn btn-white text-[#9538E2]">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeBanner;
