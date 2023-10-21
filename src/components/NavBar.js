import React, { useState } from "react";

import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { Link } from "react-router-dom";
function NavBar() {
  const [open, setOpen] = useState(false);
  const Menus = [
    {
      id: "login",
      name: "Login",
      path: "/login",
    },
    {
      id: "register",
      name: "Register",
      path: "/register",
    },
    {
      id: "about",
      name: "About",
      path: "/about",
    },
  ];
  return (
    <div>
      <div className="flex justify-between items-center p-3 ">
        <Link to="/">
          {" "}
          <img
            src="https://api.logo.com/api/v2/images?logo=logo_0c827952-114c-48ed-a498-78a3dc1f5d91&u=2023-10-16T15%3A15%3A23.545Z&margins=0&format=webp&quality=30&width=200&height=200&background=transparent&fit=contain"
            className="w-20 h-10 object-cover cursor-pointer ml-8 max-md:ml-2"
            alt="logo"
          />
        </Link>
        <div className="w-4/12 max-md:hidden">
          <input
            type="text"
            className="border-2 pl-2  text-xs pt-2 pb-2 w-2/3 "
            placeholder="Search here"
          />
          <button className="pt-2 border-2 border-black pb-2 text-xs  pr-4 pl-4 bg-black text-white">
            Search
          </button>
        </div>

        <div>
          <Link to="/cart">
            {" "}
            <ShoppingBagIcon className="mr-2" />
          </Link>
          <AccountCircleIcon
            className=" cursor-pointer"
            onClick={() => setOpen(!open)}
          />
          {open && (
            <div className="absolute right-0 mr-2 mt-2  bg-black text-white text-xs p-2">
              <ul className="flex flex-col">
                {Menus.map((menu) => (
                  <Link
                    key={menu.id}
                    onClick={() => setOpen(false)}
                    to={menu.path}
                    className="p-2 cursor-pointer hover:scale-105 duration-300"
                  >
                    {menu.name}
                  </Link>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default NavBar;
