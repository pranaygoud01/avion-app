import React from "react";
import { Link } from "react-router-dom";

function Register() {
  return (
    <div className="flex justify-center items-center h-screen bg-gradient-to-br from-zinc-100 to-zinc-300">
      <div className="w-8/12 grid grid-cols-2 h-[600px] rounded-xl shadow-2xl max-md:grid-cols-1 max-md:w-11/12  max-md:m-3">
        <div className="p-20 font-thin bg-white rounded-l-xl max-md:rounded-xl">
          <h1 className=" text-3xl max-md:text-xl">Sign Up</h1>
          <p className="mt-4 text-sm font-light">
            Are you member?
            <Link
              className="font-semibold text-blue-500 hover:underline cursor-pointer pl-1"
              to="/login"
            >
              Login
            </Link>
          </p>
          <div className="mt-10 flex flex-col gap-3">
            <p>Username</p>
            <input type="text" className="border-2 border-neutral-400 p-2 " />
            <p>Email</p>
            <input type="text" className="border-2 border-neutral-400 p-2 " />
            <p>Password</p>
            <input
              type="password"
              className="border-2 border-neutral-400 p-2  "
            />
            <button className="pt-3 pb-3 mt-3 bg-black text-xs text-white hover:bg-neutral-900">
              {" "}
              Register
            </button>
          </div>
          <Link
            className="font-semibold flex justify-center text-sm items-center hover:underline mt-5"
            to="/"
          >
            Continue Without Register
          </Link>
        </div>
        <div className="max-md:hidden">
          <img
            src="https://images.unsplash.com/photo-1550581190-9c1c48d21d6c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2009&q=80"
            className="h-[600px] object-cover rounded-r-xl"
            alt="log"
          />
        </div>
      </div>
    </div>
  );
}

export default Register;
