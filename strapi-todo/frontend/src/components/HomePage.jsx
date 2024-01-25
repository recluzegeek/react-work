import React from "react";
import { Link } from "react-router-dom";

export default function HomePage() {
  return (
    <>
      <div className="text-3xl bg-green-100">
        Welcome to React ToDo Application HomePage!
      </div>
      {<div>
        <Link
          to="/login"
          className="font-semibold text-gray-600 hover:bg-yellow-300 hover:border-yellow-300 focus:text-gray-800 focus:outline-none p-2 m-2 border-black border-solid border-4 rounded-xl relative top-10"
        >
          Click here to Login
        </Link>
        <Link
          to="/register"
          className="font-semibold text-gray-600 hover:bg-yellow-300 hover:border-yellow-300 focus:text-gray-800 focus:outline-none p-2 m-2 border-black border-solid border-4 rounded-xl relative top-10"
        >
          Click here to Register
        </Link>

      </div>
      }
    </>
  );
}
