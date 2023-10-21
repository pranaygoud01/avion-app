import React from "react";
import { Link } from "react-router-dom";
import { useEffect } from "react";
function Home() {
  useEffect(() => {
    // Scroll to the top of the page when the component (page) mounts.
    window.scrollTo({
      top: 0,
      behavior: "smooth", // Add smooth scrolling behavior
    });
  }, []);
  return (
    <div>
      <div>
        <div className="flex items-center justify-center max-md:flex-col  ">
          <img
            src="https://images.unsplash.com/photo-1679485734032-1e2b82a6999c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2063&q=80"
            className="h-[80vh] w-screen object-cover"
            alt="hero"
          />
          <div className="absolute right-0 bg-white h-72 hover:scale-110 duration-300 cursor-pointer w-2/6 mr-56 shadow-xl p-10 rounded-xs max-md:relative max-md:w-full max-md:m-1">
            <h1 className="font-semibold text-3xl max-md:text-2xl">
              Luxury homeware for people who love timeless design quality
            </h1>
            <p className="text-slate-600 font-normal pt-3">
              Shop the new Spring 2022 collection today
            </p>
            <Link to="/collection">
              <button className="text-xs font-semibold text-black underline mt-10">
                View Collection
              </button>
            </Link>
          </div>
        </div>
      </div>
      <div className="p-10 ">
        <h1 className="text-center text-3xl font-thin mt-10 mb-10 max-md:text-2xl">
          What makes our brand different
        </h1>
        <div className="grid grid-cols-4 gap-5 mr-44 ml-44 max-md:grid-cols-1 max-md:m-2">
          <div className="p-5 rounded-md shadow-xl h-56 hover:scale-105 duration-200">
            <img
              src="https://static.vecteezy.com/system/resources/thumbnails/002/585/876/small_2x/truck-delivery-service-flat-style-free-vector.jpg"
              className="w-8 h-8 object-cover"
              alt="icon"
            />
            <h1 className="font-semibold text-xl pt-3">Next day as standard</h1>
            <p className="text-normal font-light w-5/6 pt-1">
              Order before 3pm and get your order the next day as standard
            </p>
          </div>
          <div className="p-5 rounded-md shadow-xl h-56 hover:scale-105 duration-200">
            <img
              src="https://c1.klipartz.com/pngpicture/920/873/sticker-png-check-mark-icon-share-icon-checkbox-user-interface-checklist-line-logo-symbol.png"
              className="w-5 h-5 mt-1 mb-1 object-cover"
              alt="icon"
            />
            <h1 className="font-semibold text-xl pt-3">
              Made by true artisans
            </h1>
            <p className="text-normal font-light w-5/6 pt-1">
              Handmade crafted goods made with real passion and craftmanship
            </p>
          </div>
          <div className="p-5 rounded-md shadow-xl h-56 hover:scale-105 duration-200">
            <img
              src="https://www.freeiconspng.com/thumbs/credit-card-icon-png/credit-card-black-png-0.png"
              className="w-8 h-8 object-cover"
              alt="icon"
            />
            <h1 className="font-semibold text-xl pt-3">Unbeatable prices</h1>
            <p className="text-normal font-light w-5/6 pt-1">
              For our materials and quality you won’t find better prices
              anywhere
            </p>
          </div>
          <div className="p-5 rounded-md shadow-xl h-56 hover:scale-105 duration-200">
            <img
              src="https://static.vecteezy.com/system/resources/previews/005/501/737/non_2x/black-leaf-logo-free-vector.jpg"
              className="w-8 h-8 object-cover"
              alt="icon"
            />
            <h1 className="font-semibold text-xl pt-3">Recycled packaging</h1>
            <p className="text-normal font-light w-5/6 pt-1">
              We use 100% recycled to ensure our footprint is more manageable
            </p>
          </div>
        </div>
      </div>
      <div>
        <div className="grid grid-cols-4 gap-5 mr-10 p-4 ml-10 mt-36 max-md:grid-cols-2 ">
          <Link
            className="hover:scale-105 duration-300 cursor-pointer"
            to="/product"
          >
            <img
              src="https://images.unsplash.com/photo-1592078615290-033ee584e267?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8Y2hhaXJ8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60"
              className="h-[400px] w-[300px] max-md:h-[150px] max-md:w-[125px] object-cover"
              alt="img"
            />
            <h1 className="mt-5  font-light text-xl max-md:text-sm">
              The Dandy Chair
            </h1>
            <p className="mt-1 font-light text-lg max-md:text-xs">$250</p>
          </Link>
          <div className="hover:scale-105 duration-300 cursor-pointer">
            <img
              src="https://images.unsplash.com/photo-1581783342308-f792dbdd27c5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHJ1c3RpYyUyMHZhc2UlMjBzZXR8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60"
              className="h-[400px] w-[300px] max-md:h-[150px] max-md:w-[125px] object-cover"
              alt="img"
            />
            <h1 className="mt-5  font-light text-xl max-md:text-sm">
              Rustic Vase Set
            </h1>
            <p className="mt-1 font-light text-lg max-md:text-xs">$155</p>
          </div>
          <div className="hover:scale-105 duration-300 cursor-pointer">
            <img
              src="https://images.unsplash.com/photo-1526657782461-9fe13402a841?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1984&q=80"
              className="h-[400px] w-[300px] max-md:h-[150px] max-md:w-[125px] object-cover"
              alt="img"
            />
            <h1 className="mt-5  font-light text-xl max-md:text-sm">
              The Laptop Cabin
            </h1>
            <p className="mt-1 font-light text-lg max-md:text-xs">$100</p>
          </div>
          <div className="hover:scale-105 duration-300 cursor-pointer">
            <img
              src="https://images.unsplash.com/photo-1595428774223-ef52624120d2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y3VwYm9hcmR8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60"
              className="h-[400px] w-[300px] max-md:h-[150px] max-md:w-[125px] object-cover"
              alt="img"
            />
            <h1 className="mt-5  font-light text-xl max-md:text-sm">
              CupBoard
            </h1>
            <p className="mt-1 font-light text-lg max-md:text-xs">$550</p>
          </div>
        </div>
        <div className="flex items-center justify-center mt-10">
          <Link to="/collection">
            {" "}
            <button className="pt-3 pb-3 pr-10 pl-10 border hover:scale-110 duration-300  shadow-xl max-md:p-4 max-md:text-xs">
              View Collection
            </button>
          </Link>
        </div>
      </div>
      <div className="mt-40 grid grid-cols-2 ml-10 mr-10  gap-2  max-md:grid-cols-1 ">
        <div className="p-24 h-[500px] text-white bg-amber-600 shadow-xl max-md:p-7 max-md:h-[350px]">
          <h1 className="font-thin text-5xl max-md:text-2xl">
            It Started with a small idea.
          </h1>
          <p className="font-thin mt-10 text-lg max-md:text-sm">
            A global Brand beginnings.Our story begin in small studio in South
            India in early 2014.
          </p>
          <Link to="/collection">
            <button className="pr-5 pl-5 pt-3 pb-3 text-sm bg-white text-black  hover:scale-110 duration-300  font-semibold mt-10">
              View Collection
            </button>
          </Link>
        </div>
        <div>
          <img
            src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2158&q=80"
            className=" h-[500px] w-full  object-cover hover:scale-105 duration-300 cursor-pointer max-md:h-[350px]"
            alt="img1"
          />
        </div>
      </div>
      <div className="mt-40 flex justify-center items-center">
        <img
          src="https://images.unsplash.com/photo-1651284355490-1c4f60d6980d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2091&q=80"
          className="h-[400px] w-screen object-cover"
          alt="img3"
        />
        <div className="absolute text-white text-center w-1/3 max-md:w-full ">
          <h1 className="font-bold text-4xl max-md:text-2xl">
            Join The Club and get the benefits
          </h1>
          <p className="font-thin max-md:text-sm">
            Sign up our newsletter and receive exclusive offers on
            range,sales,pop up store and more
          </p>
          <div className="mt-10">
            <input
              type="text"
              placeholder="your@email.com"
              className="pt-3 pb-3 pr-5 pl-5 w-8/12 text-black max-md:p-2 max-md:w-6/12 max-md:text-sm"
            />
            <button className="bg-black pt-3 pb-3 pr-5 pl-5  max-md:p-2 max-md:text-sm">
              SignUp
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
