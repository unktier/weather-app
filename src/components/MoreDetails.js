import React from "react";
import WindDirection from "./WindDirection/WindDirection";
import CloudCover from "./CloudCover";
import "./MoreDetails.css";

/*
    reference
    0m Wind Speed	1	Below 0.3m/s (calm)
    2	0.3-3.4m/s (light)
    3	3.4-8.0m/s (moderate)
    4	8.0-10.8m/s (fresh)
    5	10.8-17.2m/s (strong)
    6	17.2-24.5m/s (gale)
    7	24.5-32.6m/s (storm)
    8	Over 32.6m/s (hurricane)

*/

const MoreDetails = ({
  posX,
  posY,
  isWeatherHover,
  wind10m,
  cloudCover,
  windIndex,
  windIndexCheck,
}) => {
  const style = {
    left: posX + 10,
    right: posY,
  };

  if (isWeatherHover && windIndex === windIndexCheck) {
    return (
      <div className="more-details" style={style}>
        <CloudCover cloudCover={cloudCover} />
        <div className="wind-speed">
          <span className="type-text">Wind Speed:&emsp;</span>
          {wind10m.speed} m/s
        </div>
        <div className="wind-direction">
          <span className="type-text">Direction:&emsp;&emsp;&nbsp;</span>
          {wind10m.direction}
        </div>
        <WindDirection
          className="wind-direction-icon"
          windDirection={wind10m.direction}
        />
      </div>
    );
  }

  return <div></div>;
};

export default MoreDetails;
