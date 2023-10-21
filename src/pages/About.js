import React from "react";
import { useEffect } from "react";
function About() {
  useEffect(() => {
    // Scroll to the top of the page when the component (page) mounts.
    window.scrollTo({
      top: 0,
      behavior: "smooth", // Add smooth scrolling behavior
    });
  }, []);
  return (
    <div className="max-h-fit">
      <div className="h-44 flex items-center justify-center ">
        <h1 className="text-3xl font-thin w-2/5 leading-10 p-10 max-md:text-xl max-md:w-full max-md:p-10">
          A brand built on the love of craftmanship, quality and outstanding
          customer service.
        </h1>
      </div>
      <div className="h-[600px] grid grid-cols-2 max-md:grid-cols-1 max-md:h-fit">
        <div className="p-20 font-thin max-md:p-10">
          <h1 className="text-3xl max-md:text-xl">
            From a studio in London to a global brand with over 400 outlets
          </h1>
          <p className="leading-7 mt-5 max-md:text-sm">
            When we started Avion, the idea was simple. Make high quality
            furniture affordable and available for the mass market.
            <br />
            Handmade, and lovingly crafted furniture and homeware is what we
            live, breathe and design so our Chelsea boutique become the hotbed
            for the London interior design community.
          </p>
          <button className="mt-28 pt-3 pb-3 pr-5 pl-5 bg-black text-white hover:scale-105 duration-300 max-md:p-3 max-md:text-xs max-md:mt-12">
            Get in Touch
          </button>
        </div>
        <div>
          <img
            src="https://images.unsplash.com/photo-1461151304267-38535e780c79?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1933&q=80"
            className="object-cover h-[600px]"
            alt="img"
          />
        </div>
      </div>
      <div className="h-[600px] grid grid-cols-2 max-md:grid-cols-1 max-md:h-fit max-md:mt-2">
        <div>
          <img
            src="https://images.unsplash.com/photo-1557149559-f5ee3514db38?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
            className="object-cover h-[600px] "
            alt="img"
          />
        </div>
        <div className="p-20 font-thin max-md:p-10">
          <h1 className="text-3xl max-md:text-xl">
            Our service isn’t just personal, it’s actually hyper personally
            exquisite
          </h1>
          <p className="leading-7 mt-5 max-md:text-sm">
            When we started Avion, the idea was simple. Make high quality
            furniture affordable and available for the mass market.
            <br />
            Handmade, and lovingly crafted furniture and homeware is what we
            live, breathe and design so our Chelsea boutique become the hotbed
            for the London interior design community.
          </p>
          <button className="mt-28 pt-3 pb-3 pr-5 pl-5 bg-black text-white hover:scale-105 duration-300  max-md:p-3 max-md:text-xs max-md:mt-12">
            Get in Touch
          </button>
        </div>
      </div>
      <div className="p-10 ">
        <h1 className="text-center text-3xl font-thin mt-10 mb-10">
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
      <div className="h-[400px] grid grid-cols-2 max-md:h-fit max-md:grid-cols-1">
        <div>
          <img
            src="https://images.unsplash.com/photo-1634712282287-14ed57b9cc89?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2106&q=80"
            className="object-cover h-[400px] w-full"
            alt="img"
          />
        </div>
        <div className="p-20 font-thin max-md:p-10">
          <h1 className="text-3xl max-md:text-xl ">
            Join The Club and get the benefits
          </h1>
          <p className="leading-7  text-lg w-4/6 mt-5 max-md:text-sm max-md:5/6">
            Sign up our newsletter and receive exclusive offers on
            range,sales,pop up store and more
          </p>
          <div className="mt-16 ">
            <input
              type="text"
              placeholder="your@email.com"
              className="pt-3 pb-3  pr-5 pl-5 w-8/12 border-2  text-black max-md:p-3 max-md:text-xs "
            />
            <button className="bg-black pt-3 pb-3 pr-5 pl-5 text-white max-md:p-3 max-md:text-xs ">
              SignUp
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
