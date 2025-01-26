const BannerTitle = ({ title, subtitle }) => {
  return (
    <div className="flex flex-col w-full justify-center items-center my-6">
      <h1
        className="text-xl md:text-2xl lg:text-4xl font-bold mb-4"
        dangerouslySetInnerHTML={{ __html: title }}
      ></h1>
      <p
        className="text-xs md:text-base text-white text-center font-normal"
        dangerouslySetInnerHTML={{ __html: subtitle }}
      ></p>
    </div>
  );
};

export default BannerTitle;
