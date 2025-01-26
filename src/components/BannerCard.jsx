import CardBanner from "../assets/banner.jpg";

const BannerCard = () => {
  return (
    <div className="">
      <div className="flex justify-center items-center">
        <img
          className="w-[180px] md:w-[500px] lg:w-[800px] h-[100px] md:h-[200px] lg:h-[300px] p-2 lg:p-4 border border-white bg-white/20 rounded-lg"
          src={CardBanner}
          alt={BannerCard}
        />
      </div>
    </div>
  );
};

export default BannerCard;
