const Heading = ({ title, subtitle }) => {
  return (
    <div className="flex flex-col w-full justify-center items-center my-4">
      <h2 className="text-lg text-[#9538E2] md:text-2xl lg:text-3xl font-bold mb-4">
        {title}
      </h2>
      <p className="text-xs md:text-base text-gray-600 text-center font-thin">
        {subtitle}
      </p>
    </div>
  );
};

export default Heading;
