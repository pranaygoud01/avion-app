import React from "react";
import InstagramIcon from "@mui/icons-material/Instagram";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";
import { Link } from "react-router-dom";
function Footer() {
  return (
    <div className="h-96 bg-neutral-800 max-md:h-72">
      <div className=" text-white grid grid-cols-2 max-md:grid-cols-1 ">
        <div className="p-20  grid grid-cols-3 gap-3 max-md:hidden">
          <div className="font-thin text-xs leading-7 ">
            <h1 className="font-semibold text-base">Menu</h1>
            <p>New Arraivals</p>
            <p>Best Sellers</p>
            <p>Recently Viewed</p>
            <p>Popular this week</p>
            <p>All Products</p>
          </div>
          <div className="font-thin text-xs leading-7 ">
            <h1 className="font-semibold text-base">Categories</h1>
            <p>Furniture</p>
            <p>Cookery</p>
            <p>Plant pots</p>
            <p>Homeware</p>
            <p>Chairs</p>
          </div>
          <div className="font-thin text-xs leading-7">
            <h1 className="font-semibold text-base">Our Company</h1>
            <Link to="/about">About Us</Link>
            <p>Oppurtunities</p>
            <p>Contact Us</p>
            <p>Return Policy</p>
          </div>
        </div>
        <div className="p-20">
          <h1 className="text-3xl font-thin max-md:text-lg">
            Join our Mailing List
          </h1>
          <div className="mt-4">
            <input
              type="text"
              placeholder="your@email.com"
              className="pt-3 pb-3 pr-5 pl-5 w-8/12 bg-neutral-900 text-white max-md:p-2 max-md:text-xs"
            />
            <button className="bg-white pt-3 pb-3 pr-5 pl-5 text-black max-md:p-2 max-md:text-xs ">
              SignUp
            </button>
          </div>
        </div>
      </div>
      <div className="flex justify-between pr-20 pl-20 text-white font-thin pt-5 border-t text-xs max-md:pr-8 max-md:pl-10">
        <p className="">2023|&copy; Copyright Pranay</p>
        <div className="w-[200px] flex justify-evenly max-md:w-[100px]">
          <Link to="https://github.com/pranaygoud01" target="_blank">
            <GitHubIcon className="p-1 cursor-pointer hover:scale-110" />
          </Link>
          <Link to="https://www.instagram.com/pranayygoud/" target="_blank">
            <InstagramIcon className="p-1 cursor-pointer hover:scale-110" />
          </Link>
          <TwitterIcon className="p-1 cursor-pointer hover:scale-110" />
          <Link
            to="https://www.linkedin.com/in/pranaygoud1229/"
            target="_blank"
          >
            <LinkedInIcon className="p-1 cursor-pointer hover:scale-110" />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Footer;
