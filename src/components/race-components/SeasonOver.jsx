import React from "react";

function SeasonOver({ races }) {
  return (
    <div className="font-bold text-lg text-center flex flex-col gap-y-4">
      {races[0].season} Season is Over!{" "}
      <p className="font-normal text-sm">
        <span className="block">Get ready for the next season,</span>
        <span className="block">see you soon!</span>
      </p>
    </div>
  );
}

export default SeasonOver;
