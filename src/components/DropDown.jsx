import React from "react";

const DropDown = () => {
  return (
    <ul className="absolute border-t-[1px] border-t-blue left-0 top-full mt-2 w-48 bg-white shadow-md rounded-md py-2 transition-all duration-300 z-50">
      <li>
        <a
          href="#aboutUs"
          className="block px-4 py-2 hover:bg-gray-100 text-blue"
        >
          More Free Templates
        </a>
      </li>
      <li>
        <a
          href="#aboutUs"
          className="block px-4 py-2 hover:bg-gray-100 text-gray-700"
        >
          Our Team
        </a>
      </li>
      <li>
        <a
          href="#aboutUs"
          className="block px-4 py-2 hover:bg-gray-100 text-gray-700"
        >
          More Links
        </a>
      </li>
    </ul>
  );
};

export default DropDown;
