import React from "react";
import Skeleton from "../skeleton/Skeleton";

function LoadingPlaceholder() {
  return (
    <>
      <div className="flex flex-col gap-1">
        <Skeleton
          width={273}
          height={126}
          className={"rounded-b-xl rounded-t-none"}
        />
        <div className="flex gap-x-4">
          <Skeleton width={120} height={32} />
          <Skeleton width={100} height={32} />
        </div>
        <div className="flex gap-x-1">
          <Skeleton width={88} height={56} />
          <Skeleton width={88} height={56} />
          <Skeleton width={88} height={56} />
        </div>
        <Skeleton width={273} height={246} />
      </div>
    </>
  );
}

export default LoadingPlaceholder;
