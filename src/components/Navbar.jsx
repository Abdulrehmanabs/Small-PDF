import React from "react";

export const Navbar = () => {
  return (
    <nav className="bg-transparent">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-6">
        <a href="#">
          <span className="self-center text-white text-2xl font-semibold whitespace-nowrap">
            Giridot
          </span>
        </a>
        <div className="order-2">
          <button
            type="button"
            className="text-white font-bold text-sm py-2 me-6"
          >
            LOGIN
          </button>
          <button
            type="button"
            className="text-[#081E4A] bg-[#FEB92C] font-bold rounded-2xl text-sm px-4 py-2 text-center"
          >
            SUBMIT
          </button>
        </div>
        <div
          className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
          id="navbar-cta"
        >
          <ul className="flex  space-x-8 rtl:space-x-reverse ">
            <li>
              <a href="#" className="py-2 px-3 md:p-0 text-white rounded-2xl">
                Features
              </a>
            </li>
            <li>
              <a href="#" className="py-2 px-3 md:p-0 text-white rounded-2xl">
                Newsletter
              </a>
            </li>
            <li>
              <a href="#" className="py-2 px-3 md:p-0 text-white rounded-2xl">
                News
              </a>
            </li>
            <li>
              <a href="#" className="py-2 px-3 md:p-0 text-white rounded-2xl">
                Advertise
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
