import React, { useEffect, useState } from "react";
import logo from "../assets/logo.svg";
import { NavLink } from "react-router";

const Navbar = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch("https://news-api-fs.vercel.app/api/categories")
      .then((res) => res.json())
      .then((data) => setCategories(data.categories));
  }, []);

  return (
    <>
      <div>
        <div className="bg-[#b80000] h-16">
          {" "}
          <div className="max-w-6xl mx-auto px-5 h-full flex items-center">
            <a
              href="/"
              className="flex items-center h-full border-b-4 border-transparent hover:border-white transition-all px-1"
            >
              <img src={logo} alt="BBC News Logo" className="invert h-7" />
            </a>
          </div>
        </div>

        <nav className="max-w-6xl mx-auto px-5 border-b-gray-300">
          <ul id="category-container">
            <li className="flex items-center gap-5 text-lg">
              {categories.map((category) => (
                <NavLink
                  key={category.id}
                  to={`/category/news/${category.id}`}
                  className="border-b-4 border-transparent hover:border-b-rose-800 transition-all px-1 py-3"
                >
                  {category.title}
                </NavLink>
              ))}
            </li>
          </ul>
        </nav>
        <div className="advertise h-75 bg-gray-200 flex justify-center items-center">
          <div className="content">
            <h2 className="text-4xl">বিজ্ঞাপন</h2>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
