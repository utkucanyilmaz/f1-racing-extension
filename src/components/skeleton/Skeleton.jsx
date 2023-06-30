import React from "react";

function Skeleton({ width, height, className }) {
  return (
    <div
      className={`inline-block relative overflow-hidden bg-f-light-gray bg-opacity-30 h-full w-full rounded-xl after:absolute after:top-0 after:bottom-0 after:left-0 after:right-0 after:-translate-x-full after:animate-shimmer after:bg-shimmer ${className}`}
      style={{ width, height }}
    ></div>
  );
}

export default Skeleton;
