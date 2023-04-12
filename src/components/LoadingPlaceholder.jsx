import React from "react";
import "./LoadingPlaceholder.css";

function LoadingPlaceholder() {
  return (
    <>
      <div className="race-info-placeholder">
        <div className="race-info-placeholder__flag placeholder-anim"></div>
        <div className="race-info-placeholder__text">
          <div className="year-placeholder placeholder-anim"></div>
          <div className="name-placeholder placeholder-anim"></div>
          <div className="date-placeholder placeholder-anim"></div>
        </div>
      </div>
      <div className="countdown-placeholder">
        <div className="box placeholder-anim"></div>
        <div className="box placeholder-anim"></div>
        <div className="box placeholder-anim"></div>
        <div className="box placeholder-anim"></div>
      </div>
      <div className="sessions-table-placeholder">
        <div className="row">
          <div className="col placeholder-anim"></div>
          <div className="col placeholder-anim"></div>
          <div className="col placeholder-anim time"></div>
        </div>
        <div className="row">
          <div className="col placeholder-anim"></div>
          <div className="col placeholder-anim"></div>
          <div className="col placeholder-anim time"></div>
        </div>
        <div className="row">
          <div className="col placeholder-anim"></div>
          <div className="col placeholder-anim"></div>
          <div className="col placeholder-anim time"></div>
        </div>
        <div className="row">
          <div className="col placeholder-anim"></div>
          <div className="col placeholder-anim"></div>
          <div className="col placeholder-anim time"></div>
        </div>
        <div className="row">
          <div className="col placeholder-anim"></div>
          <div className="col placeholder-anim"></div>
          <div className="col placeholder-anim time"></div>
        </div>
      </div>
    </>
  );
}

export default LoadingPlaceholder;
