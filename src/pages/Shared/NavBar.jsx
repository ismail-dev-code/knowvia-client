import { Link, NavLink, useNavigate } from "react-router";
import { IoHomeOutline } from "react-icons/io5";
import { FaRegLightbulb, FaRegUser } from "react-icons/fa6";
import { GrArticle } from "react-icons/gr";
import { PiArticleMediumLight, PiArticleNyTimesLight } from "react-icons/pi";
import { GiGiftOfKnowledge } from "react-icons/gi";
import { useContext, useEffect, useRef, useState } from "react";
import { AuthContext } from "../../context/authContext/AuthContext";
import Swal from "sweetalert2";

const NavBar = () => {
  const { user, logOut } = useContext(AuthContext);
  const navigate = useNavigate();
  const [notifications, setNotifications] = useState({
    totalLikes: 0,
    totalComments: 0,
  });
  const [viewedCounts, setViewedCounts] = useState({
    totalLikes: 0,
    totalComments: 0,
  });
  const [showDropdown, setShowDropdown] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    let intervalId;

    const fetchNotificationsCounts = async () => {
      const token = localStorage.getItem("token");
      if (!token) return;

      try {
        const res = await fetch("http://localhost:3000/notifications/counts", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        if (!res.ok) throw new Error("Failed to fetch notifications counts");
        const data = await res.json();
        setNotifications({
          totalLikes: data.totalLikes,
          totalComments: data.totalComments,
        });
      } catch (err) {
        console.error(err);
      }
    };

    if (user) {
      fetchNotificationsCounts();
      intervalId = setInterval(fetchNotificationsCounts, 10000);
    }

    return () => clearInterval(intervalId);
  }, [user]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setShowDropdown(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

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

  const handleLogout = async () => {
    const result = await Swal.fire({
      title: "Are you sure?",
      text: "Do you want to log out?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
      confirmButtonText: "Yes, log out",
    });

    if (result.isConfirmed) {
      try {
        await logOut();
        navigate("/");
      } catch (error) {
        console.error("Logout failed", error);
        Swal.fire("Error", "Something went wrong during logout.", "error");
      }
    }
  };

  const handleNotificationClick = () => {
    setShowDropdown(!showDropdown);
    if (!showDropdown) {
      setViewedCounts({ ...notifications });
    }
  };

  const hasNewNotifications =
    notifications.totalLikes > viewedCounts.totalLikes ||
    notifications.totalComments > viewedCounts.totalComments;

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
      {user && (
        <>
          <li>
            <NavLink to="/myArticles" className="text-secondary mr-4">
              <PiArticleMediumLight />
              My Articles
            </NavLink>
          </li>
          <li>
            <NavLink to="/postArticle" className="text-secondary mr-2">
              <PiArticleNyTimesLight />
              Post Article
            </NavLink>
          </li>
        </>
      )}
      <li>
        <NavLink to="/aboutUs" className="text-secondary ml-2">
          <GiGiftOfKnowledge />
          About Us
        </NavLink>
      </li>
    </>
  );

  return (
    <div className="navbar px-2 md:px-12 sticky top-0 z-50 bg-base-200">
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
          <FaRegLightbulb className="text-secondary" />
          Knowvia
        </Link>
      </div>

      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{links}</ul>
      </div>

      <div className="navbar-end space-x-2 text-secondary">
        {user ? (
          <>
            <div className="dropdown dropdown-end relative" ref={dropdownRef}>
              <button
                className="btn btn-ghost btn-circle"
                onClick={handleNotificationClick}
              >
                <div className="indicator">
                  <span className="text-xl">🔔</span>
                  {hasNewNotifications && (
                    <span className="badge badge-sm indicator-item bg-red-500 text-white">
                      {notifications.totalLikes + notifications.totalComments}
                    </span>
                  )}
                </div>
              </button>
              {showDropdown && (
                <div className="menu absolute -right-8 md:right-0 top-13 bg-base-100 shadow-lg rounded-box w-64 p-3 z-50">
                  <p className="md:text-sm text-xs mb-2 font-semibold">
                    Notifications
                  </p>
                  <div className="flex justify-between items-center py-1">
                    <span>Total Likes:</span>
                    <span className="font-bold">
                      {notifications.totalLikes}
                    </span>
                  </div>
                  <div className="flex justify-between items-center py-1">
                    <span>Total Comments:</span>
                    <span className="font-bold">
                      {notifications.totalComments}
                    </span>
                  </div>
                </div>
              )}
            </div>
            <div className="dropdown dropdown-end">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost btn-circle avatar"
              >
                <div className="w-10 rounded-full">
                  {user?.photoURL ? (
                    <img
                      src={user.photoURL}
                      alt="User Avatar"
                      className="w-10 h-10 rounded-full object-cover"
                    />
                  ) : (
                    <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center">
                      <FaRegUser size={25} className="text-xl text-secondary" />
                    </div>
                  )}
                </div>
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
              >
                <li>
                  <Link to="/myProfile" className="justify-between">
                    My Profile
                  </Link>
                </li>
                <li>
                  <Link to="/myArticles" className="justify-between">
                    My Articles
                  </Link>
                </li>
                <li>
                  <Link to="/postArticle">Post Article</Link>
                </li>
                <li>
                  <button onClick={handleLogout}>Logout</button>
                </li>
              </ul>
            </div>
          </>
        ) : (
          <Link
            to="/signIn"
            className="text-sm text-white bg-gradient-to-r from-blue-500 to-blue-700 hover:from-blue-600 hover:to-blue-800 px-3 py-1 rounded transition"
          >
            Log In
          </Link>
        )}

        <button onClick={toggleTheme}>
          <input
            type="checkbox"
            className="toggle text-secondary theme-controller"
          />
        </button>
      </div>
    </div>
  );
};

export default NavBar;
