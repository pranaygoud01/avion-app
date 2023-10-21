import React from "react";
import { Link } from "react-router-dom";
import { useEffect } from "react";
function Collection() {
  useEffect(() => {
    // Scroll to the top of the page when the component (page) mounts.
    window.scrollTo({
      top: 0,
      behavior: "smooth", // Add smooth scrolling behavior
    });
  }, []);
  return (
    <div>
      <div className="flex">
        <img
          src="https://images.unsplash.com/photo-1569849981587-87ea69fc5b66?auto=format&fit=crop&q=80&w=2070&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          className="w-full object-cover h-40"
          alt="img"
        />
        <div className="absolute ">
          <h1 className="font-thin text-4xl mt-24 ml-16 text-white max-md:text-3xl">
            All Products
          </h1>
        </div>
      </div>
      <div className="max-h-max flex flex-row">
        <div className=" w-[20%] max-md:hidden">
          <div className="pt-8 pl-16 font-thin">
            <h1 className="font-normal">Product Type</h1>
            <div className="flex text-sm pt-3 flex-col gap-2 pl-2">
              <div>
                <input
                  type="checkbox"
                  className="mr-2  text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 "
                />
                <label htmlFor="checkbox">Furniture</label>
              </div>
              <div>
                <input
                  type="checkbox"
                  className="mr-2  text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 "
                />
                <label htmlFor="checkbox">Homeware</label>
              </div>
              <div>
                <input
                  type="checkbox"
                  className="mr-2  text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 "
                />
                <label htmlFor="checkbox">Sofas</label>
              </div>
              <div>
                <input
                  type="checkbox"
                  className="mr-2  text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 "
                />
                <label htmlFor="checkbox">Light Fittings</label>
              </div>
            </div>
          </div>
          <div className="pt-8 pl-16 font-thin">
            <h1 className="font-normal">Price</h1>
            <div className="flex text-sm pt-3 flex-col gap-2 pl-2">
              <div>
                <input
                  type="checkbox"
                  className="mr-2  text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 "
                />
                <label htmlFor="checkbox">200$-1000$</label>
              </div>
              <div>
                <input
                  type="checkbox"
                  className="mr-2  text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 "
                />
                <label htmlFor="checkbox">100$-200$</label>
              </div>
              <div>
                <input
                  type="checkbox"
                  className="mr-2  text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 "
                />
                <label htmlFor="checkbox">0-100$</label>
              </div>
            </div>
          </div>
        </div>
        <div className=" grid grid-cols-4 gap-3 p-10 w-[80%] max-md:w-full max-md:grid-cols-2 max-md:p-8">
          <Link
            className="hover:scale-105 duration-300 cursor-pointer mt-5"
            to="/product"
          >
            <img
              src="https://images.unsplash.com/photo-1592078615290-033ee584e267?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8Y2hhaXJ8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60"
              className="h-[300px] w-[200px] max-md:h-[250px] max-md:w-[150px] object-cover"
              alt="img"
            />
            <h1 className="mt-5 font-light text-lg">The Dandy Chair</h1>
            <p className="mt-1 font-light text-sm">$250</p>
          </Link>
          <Link
            to="/product"
            className="hover:scale-105 duration-300 cursor-pointer mt-5"
          >
            <img
              src="https://images.unsplash.com/photo-1581783342308-f792dbdd27c5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHJ1c3RpYyUyMHZhc2UlMjBzZXR8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60"
              className="h-[300px] w-[200px] max-md:h-[250px] max-md:w-[150px] object-cover"
              alt="img"
            />
            <h1 className="mt-5 font-light text-lg">Rustic Vase Set</h1>
            <p className="mt-1 font-light text-sm">$155</p>
          </Link>
          <Link
            to="/product"
            className="hover:scale-105 duration-300 cursor-pointer mt-5"
          >
            <img
              src="https://images.unsplash.com/photo-1526657782461-9fe13402a841?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1984&q=80"
              className="h-[300px] w-[200px] max-md:h-[250px] max-md:w-[150px] object-cover"
              alt="img"
            />
            <h1 className="mt-5 font-light text-lg">The Laptop Cabin</h1>
            <p className="mt-1 font-light text-sm">$100</p>
          </Link>
          <Link
            to="/product"
            className="hover:scale-105 duration-300 cursor-pointer mt-5"
          >
            <img
              src="https://images.unsplash.com/photo-1595428774223-ef52624120d2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y3VwYm9hcmR8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60"
              className="h-[300px] w-[200px] max-md:h-[250px] max-md:w-[150px] object-cover"
              alt="img"
            />
            <h1 className="mt-5 font-light text-lg">CupBoard</h1>
            <p className="mt-1 font-light text-sm">$550</p>
          </Link>
          <Link
            className="hover:scale-105 duration-300 cursor-pointer mt-5"
            to="/product"
          >
            <img
              src="https://images.unsplash.com/photo-1607701777602-2ed12f239fdc?auto=format&fit=crop&q=80&w=1935&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              className="h-[300px] w-[200px] max-md:h-[250px] max-md:w-[150px] object-cover"
              alt="img"
            />
            <h1 className="mt-5 font-light text-lg">The Dandy Chair</h1>
            <p className="mt-1 font-light text-sm">$250</p>
          </Link>
          <Link
            className="hover:scale-105 duration-300 cursor-pointer mt-5"
            to="/product"
          >
            <img
              src="https://images.unsplash.com/photo-1586105251261-72a756497a11?auto=format&fit=crop&q=80&w=2158&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              className="h-[300px] w-[200px] max-md:h-[250px] max-md:w-[150px] object-cover"
              alt="img"
            />
            <h1 className="mt-5 font-light text-lg">Rustic Vase Set</h1>
            <p className="mt-1 font-light text-sm">$155</p>
          </Link>
          <Link
            to="/product"
            className="hover:scale-105 duration-300 cursor-pointer mt-5"
          >
            <img
              src="https://images.unsplash.com/photo-1532490389938-2856e3f1560a?auto=format&fit=crop&q=80&w=2080&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              className="h-[300px] w-[200px] max-md:h-[250px] max-md:w-[150px] object-cover"
              alt="img"
            />
            <h1 className="mt-5 font-light text-lg">The Laptop Cabin</h1>
            <p className="mt-1 font-light text-sm">$100</p>
          </Link>
          <Link
            to="/product"
            className="hover:scale-105 duration-300 cursor-pointer mt-5"
          >
            <img
              src="https://images.unsplash.com/photo-1518831696273-f1886ea5f920?auto=format&fit=crop&q=80&w=1974&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              className="h-[300px] w-[200px] max-md:h-[250px] max-md:w-[150px] object-cover"
              alt="img"
            />
            <h1 className="mt-5 font-light text-lg">CupBoard</h1>
            <p className="mt-1 font-light text-sm">$550</p>
          </Link>
          <Link
            className="hover:scale-105 duration-300 cursor-pointer mt-5"
            to="/product"
          >
            <img
              src="https://images.unsplash.com/photo-1518358246973-95637f1df901?auto=format&fit=crop&q=80&w=1964&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              className="h-[300px] w-[200px] max-md:h-[250px] max-md:w-[150px] object-cover"
              alt="img"
            />
            <h1 className="mt-5 font-light text-lg">The Dandy Chair</h1>
            <p className="mt-1 font-light text-sm">$250</p>
          </Link>
          <Link
            to="/product"
            className="hover:scale-105 duration-300 cursor-pointer mt-5"
          >
            <img
              src="https://images.unsplash.com/photo-1529031748770-4b25f079ee22?auto=format&fit=crop&q=80&w=1935&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              className="h-[300px] w-[200px] max-md:h-[250px] max-md:w-[150px] object-cover"
              alt="img"
            />
            <h1 className="mt-5 font-light text-lg">Rustic Vase Set</h1>
            <p className="mt-1 font-light text-sm">$155</p>
          </Link>
          <Link
            to="/product"
            className="hover:scale-105 duration-300 cursor-pointer mt-5"
          >
            <img
              src="https://images.unsplash.com/photo-1597072689227-8882273e8f6a?auto=format&fit=crop&q=80&w=1935&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              className="h-[300px] w-[200px] max-md:h-[250px] max-md:w-[150px] object-cover"
              alt="img"
            />
            <h1 className="mt-5 font-light text-lg">The Laptop Cabin</h1>
            <p className="mt-1 font-light text-sm">$100</p>
          </Link>
          <Link
            to="/product"
            className="hover:scale-105 duration-300 cursor-pointer mt-5"
          >
            <img
              src="https://images.unsplash.com/photo-1581428982868-e410dd047a90?auto=format&fit=crop&q=80&w=1974&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              className="h-[300px] w-[200px] max-md:h-[250px] max-md:w-[150px] object-cover"
              alt="img"
            />
            <h1 className="mt-5 font-light text-lg">CupBoard</h1>
            <p className="mt-1 font-light text-sm">$550</p>
          </Link>
        </div>
      </div>
      <div className="flex items-center justify-center mt-10 mb-10">
        <Link to="/collection">
          <button className="pt-3 pb-3 pr-10 pl-10 border bg-black text-white hover:scale-110 duration-300  shadow-xl max-md:text-sm max-md:p-3">
            Load More
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Collection;
