import { Link, NavLink } from "react-router";
import { IoHomeOutline, IoToggleSharp } from "react-icons/io5";
import { FaRegLightbulb } from "react-icons/fa6";
import { GrArticle } from "react-icons/gr";
import { PiArticleMediumLight, PiArticleNyTimesLight } from "react-icons/pi";
import { GiGiftOfKnowledge } from "react-icons/gi";
import { useEffect, useState } from "react";

const NavBar = () => {
  const links = (
    <>
      <li>
        <NavLink className="text-secondary mr-4" to="/">
          <IoHomeOutline />
          Home
        </NavLink>
      </li>
      <li>
        <NavLink className="text-secondary mr-4" to="/allArticles">
          <GrArticle />
          All Articles
        </NavLink>
      </li>
      <li>
        <NavLink to="/myArticles" className="text-secondary mr-4">
          <PiArticleMediumLight />
          My Articles
        </NavLink>
      </li>
      <li>
        <NavLink to="/postArticle" className="text-secondary mr-4">
          <PiArticleNyTimesLight />
          Post Article
        </NavLink>
      </li>
      <li>
        <NavLink to="/aboutUs" className="text-secondary mr-4">
          <GiGiftOfKnowledge />
          About Us
        </NavLink>
      </li>
    </>
  );
  const [isDark, setIsDark] = useState(() => {
    return localStorage.getItem("theme") === "dark";
  });

  useEffect(() => {
    const root = document.documentElement;

    if (isDark) {
      root.classList.add("dark");
      root.setAttribute("data-theme", "dark");
      localStorage.setItem("theme", "dark");
    } else {
      root.classList.remove("dark");
      root.setAttribute("data-theme", "light");
      localStorage.setItem("theme", "light");
    }
  }, [isDark]);

  const toggleTheme = () => setIsDark(!isDark);

  return (
    <div className="navbar px-4 md:px-12 sticky top-0 z-50 bg-base-200">
      <div className="navbar-start">
        <div className="dropdown">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost lg:hidden text-white"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 text-secondary rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            {links}
          </ul>
        </div>
        <Link
          to={"/"}
          className="text-2xl flex items-center gap-1.5 font-bold bg-gradient-to-r from-purple-500 via-pink-400 to-violet-400 bg-clip-text text-transparent hover:from-purple-600 hover:via-pink-500 hover:to-violet-500"
        >
          <FaRegLightbulb className="text-secondary hidden md:block" />
          Knowvia
        </Link>
      </div>

      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{links}</ul>
      </div>

      <div className="navbar-end space-x-2">
        <Link
          to="/signIn"
          className="text-sm lg:block hidden text-white bg-gradient-to-r from-blue-500 to-blue-700 hover:from-blue-600 hover:to-blue-800 px-3 py-1 rounded transition"
        >
          SignIn
        </Link>
        <Link
          to="/register"
          className="text-sm text-white bg-gradient-to-r from-green-500 to-green-700 hover:from-green-600 hover:to-green-800 px-3 py-1 rounded transition"
        >
          Register
        </Link>
        <button onClick={toggleTheme}>
          <input type="checkbox" className="toggle text-secondary theme-controller" />
        </button>
      </div>
    </div>
  );
};

export default NavBar;
