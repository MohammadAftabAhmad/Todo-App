import React from "react";
import { Link } from "react-router-dom";


function Nav({ title = "enter your title", name, mode, togglemode }) {
  return (
    <div>
      <nav
        className={`border-gray-200 ${
          mode === "black"
            ? "bg-black text-white"
            : mode === "white"
            ? "bg-white text-black"
            : ""
        }`}
      >
        <div className=" px-[100px] flex flex-wrap items-center  shadow-white shadow-xl  justify-between overflow-hidden mx-auto p-4">
          <a
            href="https://flowbite.com/"
            className="flex items-center space-x-3 rtl:space-x-reverse"
          >
            <span className="self-center text-2xl font-semibold whitespace-nowrap ">
              {title}
              {name}
            </span>
          </a>

          <div
            className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
            id="navbar-user"
          >
            <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 ">
              <li>
                <Link
                  to="/"
                  className="block py-2 px-3  bg-blue-700 rounded-sm md:bg-transparent md:text-blue-700 md:p-0"
                  aria-current="page"
                >
                  Home
                </Link>
              </li>
             

          <li>
            <Link
              to="/about"
              className="block py-2 px-3 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
            >
              About
            </Link>
          </li>

              <li>
                <Link
                  to="/services"
                  className="block py-2 px-3  rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0  md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                >
                  Services
                </Link>
              </li>
              <li>
                <a
                  href="#"
                  className="block py-2 px-3 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                >
                  Pricing
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block py-2 px-3  rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                >
                  Contact
                </a>
              </li>
              <li>
                <label class="inline-flex items-center mb-3 cursor-pointer  ">
  <input type="checkbox" onClick={togglemode} class="sr-only peer" />
  <div class="w-7 h-4 mt-1  bg-gray-200 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 
              peer-checked:after:translate-x-3 after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border 
              after:rounded-full after:h-3 after:w-3 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600 dark:peer-checked:bg-blue-600 relative">
  </div>
  <span class={`ms-2 text-${mode === 'white'?'black':'white'}`}>Enable DarkMode </span>
</label>

              </li>
            </ul>
          </div>
        </div>
      </nav>  
    </div>
  );
}

export default Nav;
