const Footer = () => {
  return (
    <footer className="bg-white text-white-content p-10">
      <div className="text-center mb-4">
        <h2 className="text-[#0B0B0B] text-lg md:text-2xl font-semibold md:font-bold">
          Gadget Heaven
        </h2>
        <p className="text-base md:text-lg mt-2 font-base text-gray-500">
          Leading the way in cutting-edge technology and innovation.
        </p>
      </div>
      <div className="md:flex justify-around items-center gap-4">
        <div className="text-center">
          <h4 className="text-lg mt-1 font-bold text-black mb-3">Services</h4>
          <ul>
            <li className="md:text-lg text-base text-gray-400 font-normal cursor-pointer mb-2 hover:text-[#8884d8] hover:font-bold">
              Product Support
            </li>
            <li className="md:text-lg text-base text-gray-400 font-normal cursor-pointer mb-2 hover:text-[#8884d8] hover:font-bold">
              Order Tracking
            </li>
            <li className="md:text-lg text-base text-gray-400 font-normal cursor-pointer mb-2 hover:text-[#8884d8] hover:font-bold">
              Shipping & Delivery
            </li>
            <li className="md:text-lg text-base text-gray-400 font-normal cursor-pointer mb-2 hover:text-[#8884d8] hover:font-bold">
              Returns
            </li>
          </ul>
        </div>
        <div className="text-center">
          <h4 className="text-lg mt-1 font-bold text-black mb-3">Company</h4>
          <ul>
            <li className="md:text-lg text-base text-gray-400 font-normal cursor-pointer mb-2 hover:text-[#8884d8] hover:font-bold">
              About Us
            </li>
            <li className="md:text-lg text-base text-gray-400 font-normal cursor-pointer mb-2 hover:text-[#8884d8] hover:font-bold">
              Careers
            </li>
            <li className="md:text-lg text-base text-gray-400 font-normal cursor-pointer mb-2 hover:text-[#8884d8] hover:font-bold">
              Contact
            </li>
          </ul>
        </div>
        <div className="text-center">
          <h4 className="text-lg mt-1 font-bold text-black mb-3">Legal</h4>
          <ul>
            <li className="md:text-lg text-base text-gray-400 font-normal cursor-pointer mb-2 hover:text-[#8884d8] hover:font-bold">
              Terms of Service
            </li>
            <li className="md:text-lg text-base text-gray-400 font-normal cursor-pointer mb-2 hover:text-[#8884d8] hover:font-bold">
              Privacy Policy
            </li>
            <li className="md:text-lg text-base text-gray-400 font-normal cursor-pointer mb-2 hover:text-[#8884d8] hover:font-bold">
              Cookie Policy
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
