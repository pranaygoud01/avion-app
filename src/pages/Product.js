import React from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
function Product() {
  useEffect(() => {
    // Scroll to the top of the page when the component (page) mounts.
    window.scrollTo({
      top: 0,
      behavior: "smooth", // Add smooth scrolling behavior
    });
  }, []);
  return (
    <div>
      <div className="grid grid-cols-2 max-md:grid-cols-1">
        <div>
          <img
            src="https://images.unsplash.com/photo-1617582907226-c49e2d8200d9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
            className="h-[500px] object-cover  max-md:h-[350px] max-md:w-full"
            alt="img"
          />
        </div>
        <div className="p-10 font-thin ">
          <h1 className="text-3xl max-md:text-2xl">The Dandy Chair</h1>
          <p className="text-2xl pt-5 max-md:text-xl">$250</p>
          <div className="pt-10 max-md:text-xs">
            <h1>Description</h1>
            <p>
              A timeless design, with premium materials features as one of our
              most popular and iconic pieces. The dandy chair is perfect for any
              stylish living space with beech legs and lambskin leather
              upholstery.
            </p>
            <ul className="list-disc p-5">
              <li>Premium material</li>
              <li>Handmade upholstery</li>
              <li>Quality timeless classic</li>
            </ul>
          </div>
          <div className="flex justify-between pt-10 ">
            <h1 className="text-lg max-md:text-sm">Amount:</h1>
            <button className="pt-3 pb-3 pr-5 pl-5 bg-black text-white mr-10 max-md:p-2 max-md:text-xs">
              Add to Cart
            </button>
          </div>
        </div>
      </div>
      <div className="mt-7">
        <h1 className="pt-10 ml-10 pl-2 font-thin text-3xl max-md:text-xl">
          You might also like
        </h1>
        <div className="grid grid-cols-4 gap-5 mr-10 p-4 ml-10 mt-2 max-md:grid-cols-2 max-md:m-2">
          <Link to="/product">
            <div className=" hover:scale-105 duration-300 cursor-pointer ">
              <img
                src="https://images.unsplash.com/photo-1592078615290-033ee584e267?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8Y2hhaXJ8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60"
                className="h-[400px] w-[300px] max-md:h-[200px] max-md:w-[150px] object-cover"
                alt="img"
              />
              <h1 className="mt-5 font-light text-xl max-md:text-base  ">
                The Dandy Chair
              </h1>
              <p className="mt-1 font-light text-lg max-md:text-sm ">$250</p>
            </div>
          </Link>
          <Link to="/product">
            <div className=" hover:scale-105 duration-300 cursor-pointer">
              <img
                src="https://images.unsplash.com/photo-1581783342308-f792dbdd27c5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHJ1c3RpYyUyMHZhc2UlMjBzZXR8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60"
                className="h-[400px] w-[300px] max-md:h-[200px] max-md:w-[150px]object-cover"
                alt="img"
              />
              <h1 className="mt-5 font-light text-xl max-md:text-base">
                Rustic Vase Set
              </h1>
              <p className="mt-1 font-light text-lg max-md:text-sm">$155</p>
            </div>
          </Link>
          <Link to="/product">
            <div className=" hover:scale-105 duration-300 cursor-pointer">
              <img
                src="https://images.unsplash.com/photo-1526657782461-9fe13402a841?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1984&q=80"
                className="h-[400px] w-[300px] max-md:h-[200px] max-md:w-[150px]object-cover"
                alt="img"
              />
              <h1 className="mt-5 font-light text-xl max-md:text-base">
                The Laptop Cabin
              </h1>
              <p className="mt-1 font-light text-lg max-md:text-sm">$100</p>
            </div>
          </Link>
          <Link to="/product">
            <div className=" hover:scale-105 duration-300 cursor-pointer">
              <img
                src="https://images.unsplash.com/photo-1595428774223-ef52624120d2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y3VwYm9hcmR8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60"
                className="h-[400px] w-[300px] max-md:h-[200px] max-md:w-[150px]object-cover"
                alt="img"
              />
              <h1 className="mt-5 font-light text-xl max-md:text-base">
                CupBoard
              </h1>
              <p className="mt-1 font-light text-lg max-md:text-sm">$550</p>
            </div>
          </Link>
        </div>
        <div className="flex items-center justify-center mt-10">
          <Link to="/collection">
            <button className="pt-3 pb-3 pr-10 pl-10 border hover:bg-slate-50  shadow-xl max-md:p-4 max-md:text-xs">
              View Collection
            </button>
          </Link>
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
      <div className="mt-40 flex justify-center items-center  ">
        <img
          src="https://images.unsplash.com/photo-1472566316349-bce77aa2a778?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
          className="h-[400px] w-screen object-cover"
          alt="img3"
        />
        <div className="absolute text-white text-center w-1/3 max-md:w-full max-md:p-2">
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
            <button className="bg-neutral-800 pt-3 pb-3 pr-5 pl-5  max-md:p-2 max-md:text-sm">
              SignUp
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Product;
