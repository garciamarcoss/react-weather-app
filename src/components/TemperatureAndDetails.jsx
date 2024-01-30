// import React from "react";
// import {
//   UilArrowUp,
//   UilArrowDown,
//   UilTemperature,
//   UilTear,
//   UilWind,
//   UilSun,
//   UilSunset,
// } from "@iconscout/react-unicons";
// import { formatToLocalTime, iconUrlFromCode } from "../services/weatherService";

// function TemperatureAndDetails({
//   weather: {
//     details,
//     icon,
//     temp,
//     temp_min,
//     temp_max,
//     sunrise,
//     sunset,
//     speed,
//     humidity,
//     feels_like,
//     timezone,
//   },
// }) {
//   let formattedTimezone = "";
//   if (timezone === 0) {
//     formattedTimezone = "UTC";
//   } else if (timezone / 3600 > 0) {
//     formattedTimezone = `UTC+${Math.abs(timezone / 3600)}`;
//   } else if (timezone / 3600 < 0) {
//     formattedTimezone = `UTC${timezone / 3600}`;
//   }
//   const translateWeatherDetails = () => {
//     switch (details) {
//       case "Clear":
//         return "Despejado";
//       case "Clouds":
//         return "Nublado";
//       case "Rain":
//         return "Lluvia";
//       case "Mist":
//         return "Neblina";
//       default:
//         return details; // Devuelve el valor original si no coincide con ninguno de los casos anteriores
//     }
//   };

//   return (
//     <div>
//       <div className="flex items-center justify-center py-6 text-2xl text-cyan-300">
//         <p>{translateWeatherDetails()}</p>
//       </div>
//       <div className="flex flex-row items-center justify-between text-white py-3">
//         <img src={iconUrlFromCode(icon)} alt="" className="w-20" />
//         <p className="text-5xl">{`${temp.toFixed()}°`}</p>
//         <div className="flex flex-col space-y-2">
//           <div className="flex font-light text-sm items-center justify-center">
//             <UilTemperature size={18} className="mr-1" />
//             Sensación Térmica:
//             <span className="font-medium ml-1">{`${feels_like.toFixed()}°`}</span>
//           </div>
//           <div className="flex font-light text-sm items-center justify-center">
//             <UilTear size={18} className="mr-1" />
//             Humedad:
//             <span className="font-medium ml-1">{`${humidity.toFixed()}%`}</span>
//           </div>
//           <div className="flex font-light text-sm items-center justify-center">
//             <UilWind size={18} className="mr-1" />
//             Viento:
//             <span className="font-medium ml-1">{`${speed.toFixed()} km/h`}</span>
//           </div>
//         </div>
//       </div>
//       <div className="flex flex-row items-center justify-center space-x-2 text-white text-sm py-3">
//         <UilSun />
//         <p className="font-light">
//           Amanecer{" "}
//           <span className="font-medium ml-1">
//             {formatToLocalTime(sunrise, formattedTimezone, "hh:mm a")}
//           </span>
//         </p>
//         <p className="font-light">|</p>
//         <UilSunset />
//         <p className="font-light">
//           Atardecer{" "}
//           <span className="font-medium ml-1">
//             {formatToLocalTime(sunset, formattedTimezone, "hh:mm a")}
//           </span>
//         </p>
//         <p className="font-light">|</p>
//         <UilArrowUp />
//         <p className="font-light ">
//           Máx{" "}
//           <span className="font-medium ml-1">{`${temp_max.toFixed()}°`}</span>
//         </p>
//         <p className="font-light">|</p>
//         <UilArrowDown />
//         <p className="font-light">
//           Mín{" "}
//           <span className="font-medium ml-1">{`${temp_min.toFixed()}°`}</span>
//         </p>
//       </div>
//     </div>
//   );
// }

// export default TemperatureAndDetails;

import React from "react";
import {
  UilArrowUp,
  UilArrowDown,
  UilTemperature,
  UilTear,
  UilWind,
  UilSun,
  UilSunset,
} from "@iconscout/react-unicons";
import { formatToLocalTime, iconUrlFromCode } from "../services/weatherService";

function TemperatureAndDetails({
  weather: {
    details,
    icon,
    temp,
    temp_min,
    temp_max,
    sunrise,
    sunset,
    speed,
    humidity,
    feels_like,
    timezone,
  },
}) {
  let formattedTimezone = "";
  if (timezone === 0) {
    formattedTimezone = "UTC";
  } else if (timezone / 3600 > 0) {
    formattedTimezone = `UTC+${Math.abs(timezone / 3600)}`;
  } else if (timezone / 3600 < 0) {
    formattedTimezone = `UTC${timezone / 3600}`;
  }
  const translateWeatherDetails = () => {
    switch (details) {
      case "Clear":
        return "Despejado";
      case "Clouds":
        return "Nublado";
      case "Rain":
        return "Lluvia";
      case "Mist":
        return "Neblina";
      default:
        return details; // Devuelve el valor original si no coincide con ninguno de los casos anteriores
    }
  };

  return (
    <div>
      <div className="flex items-center justify-center py-3 text-2xl text-cyan-300">
        <p>{translateWeatherDetails()}</p>
      </div>
      <div className="grid md:grid-cols-2 text-white ">
        <div className="flex flex-row justify-center  items-center md:justify-end mb-4">
          <img src={iconUrlFromCode(icon)} alt="" className="w-20 mr-2" />
          <p className="text-5xl">{`${temp.toFixed()}°`}</p>
        </div>
        <div className="flex flex-col space-y-2 text-lg">
          <div className="flex font-light items-center justify-center">
            <UilTemperature size={18} className="mr-1" />
            Sensación Térmica:
            <span className="font-medium ml-1">{`${feels_like.toFixed()}°`}</span>
          </div>
          <div className="flex font-light items-center justify-center">
            <UilTear size={18} className="mr-1" />
            Humedad:
            <span className="font-medium ml-1">{`${humidity.toFixed()}%`}</span>
          </div>
          <div className="flex font-light items-center justify-center">
            <UilWind size={18} className="mr-1" />
            Viento:
            <span className="font-medium ml-1">{`${speed.toFixed()} km/h`}</span>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1  text-white text-lg md:flex md:flex-row items-center justify-center space-x-2 md:text-base md:mt-3 md:py-3">
        <div className="flex flex-row items-center justify-center mt-2 ">
          <UilSun />
          <p className="font-light  ">
            Amanecer{" "}
            <span className="font-medium ml-1">
              {formatToLocalTime(sunrise, formattedTimezone, "hh:mm a")}
            </span>
          </p>
          <p className="font-light hidden md:block md:ml-2">|</p>
        </div>
        <div className="flex flex-row items-center justify-center mt-2">
          <UilSunset />
          <p className="font-light ">
            Atardecer{" "}
            <span className="font-medium ml-1">
              {formatToLocalTime(sunset, formattedTimezone, "hh:mm a")}
            </span>
          </p>
          <p className="font-light hidden md:block md:ml-2">|</p>
        </div>
        <div className="flex flex-row items-center justify-center mt-2">
          <UilArrowUp />
          <p className="font-light  ">
            Máx{" "}
            <span className="font-medium ml-1">{`${temp_max.toFixed()}°`}</span>
          </p>
          <p className="font-light hidden md:block md:ml-2">|</p>
        </div>
        <div className="flex flex-row items-center justify-center mt-2">
          <UilArrowDown />
          <p className="font-light">
            Mín{" "}
            <span className="font-medium ml-1">{`${temp_min.toFixed()}°`}</span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default TemperatureAndDetails;
