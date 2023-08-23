import React from "react";
import Skeleton from "../skeleton/Skeleton";

function LoadingPlaceholder() {
  return (
    <>
      <div className="flex flex-col gap-1">
        <Skeleton
          width={"19.5rem"}
          height={"9rem"}
          className={"rounded-b-xl rounded-t-none"}
        />
        <div className="flex gap-x-4">
          <Skeleton width={"8rem"} height={"2.3rem"} />
          <Skeleton width={"6.6rem"} height={"2.3rem"} />
        </div>
        <div className="flex gap-x-1">
          <Skeleton width={"6.3rem"} height={"4rem"} />
          <Skeleton width={"6.3rem"} height={"4rem"} />
          <Skeleton width={"6.3rem"} height={"4rem"} />
        </div>
        <Skeleton width={"19.5rem"} height={"17.45rem"} />
      </div>
    </>
  );
}

export default LoadingPlaceholder;
