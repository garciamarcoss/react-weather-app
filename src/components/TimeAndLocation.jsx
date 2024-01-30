import React from "react";
import { formatToLocalTime } from "../services/weatherService";

function TimeAndLocation({ weather: { dt, timezone, name, country } }) {
  let formattedTimezone = "";
  if (timezone === 0) {
    formattedTimezone = "UTC";
  } else if (timezone / 3600 > 0) {
    formattedTimezone = `UTC+${timezone / 3600}`;
  } else if (timezone / 3600 < 0) {
    formattedTimezone = `UTC${timezone / 3600}`;
  }
  const localTime = formatToLocalTime(dt, formattedTimezone);
  return (
    <div>
      <div className="flex items-center justify-center my-6">
        <p className="text-white text-lg sm:text-xl font-extralight">
          {localTime}
        </p>
      </div>
      <div className="flex items-center justify-center my-3">
        <p className="text-white text-3xl font-medium">{`${name}, ${country}`}</p>
      </div>
    </div>
  );
}

export default TimeAndLocation;
