import React from "react";
import NavigationItem from "./NavigationItem";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";

import chevron from "/icons/chevron-left-solid.svg";

import "swiper/css";
import "swiper/css/navigation";
import "./NavigationBar.css";

function NavigationBar({ activeTab, setActiveTab }) {
  const handleItemClick = item => {
    setActiveTab(item);
  };

  return (
    <Swiper
      modules={[Navigation]}
      navigation={{
        prevEl: ".prev",
        nextEl: ".next",
      }}
      className="mt-1 relative group"
      slidesPerView={2}
    >
      <SwiperSlide>
        <NavigationItem
          isActive={activeTab === "race-weekend"}
          onItemClick={() => handleItemClick("race-weekend")}
        >
          Race Weekend
        </NavigationItem>
      </SwiperSlide>
      <SwiperSlide>
        <NavigationItem
          isActive={activeTab === "calendar"}
          onItemClick={() => handleItemClick("calendar")}
        >
          Calendar
        </NavigationItem>
      </SwiperSlide>
      <SwiperSlide>
        <NavigationItem
          isActive={activeTab === "standings"}
          onItemClick={() => handleItemClick("standings")}
        >
          Standings
        </NavigationItem>
      </SwiperSlide>
      <SwiperSlide>
        <NavigationItem
          isActive={activeTab === "last-race"}
          onItemClick={() => handleItemClick("last-race")}
        >
          Last Race
        </NavigationItem>
      </SwiperSlide>
      <button className="prev navbar-button left-0">
        <img src={chevron} alt="Prev" />
      </button>
      <button className="next navbar-button right-0 rotate-180">
        <img src={chevron} alt="Next" />
      </button>
    </Swiper>
  );
}

export default NavigationBar;
