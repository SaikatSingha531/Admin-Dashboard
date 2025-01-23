import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <>
      {/* <div className='flex justify-center flex-col items-center mr-9 mt-3 font-bold h-auto bg-black text-slate-300 rounded-md'>
       <h1>This Is A Demo Admin Dashboard Page </h1>
       <p>Created By - <span className='text-cyan-700'> Saikat Singha</span></p>

    </div> */}

      <footer className="bg-gray-800 text-white py-4 text-center mt-3 mr-9 rounded-md">
        <div className="container mx-auto">
          <p className="text-sm">Demo Admin Dashboard Page</p>
          <span>Created By - <span className="text-fuchsia-500 cursor-pointer hover:text-red-500 duration-300"> Saikat Singha</span></span>
          <div className="mt-2">
            <Link to="/terms" className="text-gray-400 hover:text-white mx-2">
              Terms of Service
            </Link>
            |
            <Link to="/privacy" className="text-gray-400 hover:text-white mx-2">
              Privacy Policy
            </Link>
          </div>
          <p className="text-xs mt-2">
            Built With React Vite And Tailwind CSS.
          </p>
        </div>
      </footer>
    </>
  );
}

export default Footer;
