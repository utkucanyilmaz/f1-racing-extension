import React from "react";

function NavigationItem({ isActive, children, onItemClick, className }) {
  return (
    <button
      onClick={onItemClick}
      className={`py-2 px-4 border-t rounded-xl ${
        isActive
          ? "border-f-red"
          : "border-f-light-gray rounded-full text-f-light-gray hover:text-white hover:border-white transition-colors cursor-pointer"
      } ${className}`}
    >
      {children}
    </button>
  );
}

export default NavigationItem;
