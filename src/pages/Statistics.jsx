import { Helmet } from "react-helmet-async";
import {
  ResponsiveContainer,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  CartesianGrid,
  Bar,
  Area,
  Scatter,
  ComposedChart,
} from "recharts";

const productData = [
  { name: "Gaming Laptop G7", price: 1200, rating: 4.7 },
  { name: "Business Laptop B5", price: 950, rating: 4.5 },
  { name: "Ultrabook Slim X2", price: 800, rating: 4.6 },
  { name: "All-in-One Desktop Pro", price: 1500, rating: 4.8 },
  { name: "Budget Laptop L1", price: 550, rating: 4.2 },
  { name: "High-End Gaming PC", price: 2000, rating: 4.9 },
  { name: "Smartphone Max", price: 799, rating: 4.8 },
  { name: "Smartphone Lite", price: 499, rating: 4.3 },
  { name: "Smartwatch Pro", price: 299, rating: 4.6 },
  { name: "Fitness Tracker Band", price: 149, rating: 4.4 },
];

const Statistics = () => {
  return (
    <>
      <Helmet>
        <title>Statistic - Gadget Heaven</title>
        <meta
          name="description"
          content="View detailed statistics about product sales and trends."
        />
      </Helmet>
      <div className="w-full bg-[#9538E2] pb-12 md:pb-20 p-4 pt-6 md:pt-8 rounded-md">
        <h1 className="text-lg -mt-2 md:2xl lg:text-3xl font-semibold md:font-bold text-white text-center">
          Statistics
        </h1>
        <p className="text-normal text-gray-50 text-center mt-4">
          Explore the latest gadgets that will take your experience to the next
          level. From smart devices to
          <br /> the coolest accessories, we have it all!
        </p>
      </div>

      {/* Chart Section */}
      <div className="overflow-x-auto mt-6">
        <h2 className="text-[#0B0B0B] text-lg md:text-2xl font-semibold md:font-bold py-4">
          Statistics
        </h2>
        <div className="w-full min-w-[600px]">
          <ResponsiveContainer width="100%" height={400}>
            <ComposedChart
              data={productData}
              margin={{ top: 20, right: 30, left: 20, bottom: 10 }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" angle={-30} textAnchor="end" />
              <YAxis />
              <Tooltip />
              <Legend />

              {/* Area Chart for Price */}
              <Area
                type="monotone"
                dataKey="price"
                fill="#8884d8"
                stroke="#8884d8"
              />

              {/* Bar Chart for Price */}
              <Bar dataKey="price" fill="#82ca9d" />

              {/* Scatter Plot for Rating */}
              <Scatter dataKey="rating" fill="red" />
            </ComposedChart>
          </ResponsiveContainer>
        </div>
      </div>
    </>
  );
};

export default Statistics;
