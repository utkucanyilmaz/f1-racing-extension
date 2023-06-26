import React from "react";

function NavigationItem({ isActive, children, onItemClick }) {
  return (
    <li
      onClick={onItemClick}
      className={`py-2 px-4 border-t rounded-full ${
        isActive
          ? "border-f-red"
          : "border-f-light-gray rounded-full text-f-light-gray hover:text-white hover:border-white transition-colors cursor-pointer"
      }`}
    >
      {children}
    </li>
  );
}

export default NavigationItem;
