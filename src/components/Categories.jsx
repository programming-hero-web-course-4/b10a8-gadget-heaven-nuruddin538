import { NavLink } from "react-router-dom";

const Categories = ({ categories }) => {
  return (
    <div className="space-y-4 bg-white rounded-md py-6 px-8 min-h-60">
      {categories.map((category) => (
        <NavLink
          key={category.category}
          to={`/category/${category.slug}`}
          className={({ isActive }) =>
            `flex flex-col text-md px-4 py-2 rounded-md transition-all font-medium textarea-md ${
              isActive
                ? "bg-[#9538E2] text-white shadow-md"
                : "bg-gray-200 text-gray-700 hover:bg-gray-300"
            }`
          }
        >
          {category.category}
        </NavLink>
      ))}
    </div>
  );
};

export default Categories;
