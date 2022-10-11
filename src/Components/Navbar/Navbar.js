import React from "react";
import { NavLink } from "react-router-dom";
import icon from "../../images/icons8-code-50.png";

const Navbar = () => {
  return (
    <div>
      <header class='text-gray-600 body-font'>
        <div class='container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center'>
          <a class='flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0'>
            <img src={icon} alt='' />
            <span class='ml-3 text-xl'>Web Dev Quiz</span>
          </a>
          <nav class='md:ml-auto flex flex-wrap items-center text-base justify-center'>
            <NavLink
              to='/home'
              aria-label='Topics'
              title='Topics'
              className={({ isActive }) =>
                isActive
                  ? "font-medium mr-5 tracking-wide text-blue-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                  : "font-medium mr-5 tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400 hover:text-orange-400"
              }>
              Topics
            </NavLink>
            <NavLink
              to='/statistics'
              aria-label='statistics'
              title='statistics'
              className={({ isActive }) =>
                isActive
                  ? "font-medium mr-5 tracking-wide text-blue-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                  : "font-medium mr-5 tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400 hover:text-orange-400"
              }>
              Statistics
            </NavLink>
            <NavLink
              to='/blog'
              aria-label='blog'
              title='blog'
              className={({ isActive }) =>
                isActive
                  ? "font-medium mr-5 tracking-wide text-blue-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                  : "font-medium mr-5 tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400 hover:text-orange-400"
              }>
              Blog
            </NavLink>
          </nav>
        </div>
      </header>
    </div>
  );
};

export default Navbar;
