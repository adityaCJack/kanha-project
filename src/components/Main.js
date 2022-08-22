import React from "react";
import Slider from "./Slider";

function Main() {
  return (
    <>
      <div className="main">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 mt-3">
              <div className="list-group shadow">
                <a
                  href="#"
                  className="list-group-item list-group-item-action "
                  aria-current="true"
                >
                  Rainfall Sensors
                </a>
                <a href="#" className="list-group-item list-group-item-action">
                  Wind Anemometer
                </a>
                <a href="#" className="list-group-item list-group-item-action">
                  Weather Stations
                </a>
                <a href="#" className="list-group-item list-group-item-action">
                  Controllers
                </a>
                <a href="#" className="list-group-item list-group-item-action">
                  Indicators/Displays
                </a>
                <a href="#" className="list-group-item list-group-item-action">
                  Temp/Humidity Sensors
                </a>
                <a href="#" className="list-group-item list-group-item-action">
                  Barometric Pressure
                </a>
                <a href="#" className="list-group-item list-group-item-action">
                  Solar Radiation
                </a>
                <a href="#" className="list-group-item list-group-item-action">
                  Replacement Parts
                </a>
              </div>
            </div>

            <Slider />
          </div>
        </div>
      </div>
    </>
  );
}

export default Main;
