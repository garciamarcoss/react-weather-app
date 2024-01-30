// import React from "react";
// import { UilSearch, UilLocationPoint } from "@iconscout/react-unicons";
// import { useState } from "react";

// function Inputs({ setQuery, units, setUnits }) {
//   const [city, setCity] = useState("");

//   const handleUnitsChange = (e) => {
//     const selectUnit = e.currentTarget.name;
//     if (units !== selectUnit) setUnits(selectUnit)
//   };

//   const handleSearchClick = () => {
//     if (city !== "") setQuery({ q: city });
//   };

//   return (
//     <div className="flex flex-row justify-center my-6">
//       <div className="flex flex-row w-3/4 items-center justify-center space-x-4">
//         <input
//           value={city}
//           onChange={(e) => setCity(e.currentTarget.value)}
//           type="text"
//           placeholder="Buscar ciudad..."
//           className="text-xl font-light p-2 w-full shadow-xl focus:outline-none capitalize placeholder:lowercase"
//         />
//         <UilSearch
//           size={25}
//           className="text-white cursor-pointer transition ease-out hover:scale-125"
//           onClick={handleSearchClick}
//         />
//         <UilLocationPoint
//           size={25}
//           className="text-white cursor-pointer transition ease-out hover:scale-125"
//         />
//       </div>

//       <div className="flex flex-row w-1/4 items-center justify-center">
//         <button
//           name="metric"
//           className="text-xl text-white font-light transition ease-out hover:scale-125"
//           onClick={handleUnitsChange}

//         >
//           °C
//         </button>
//         <p className="text-xl text-white mx-1">|</p>
//         <button
//           name="imperial"
//           className="text-xl text-white font-light transition ease-out hover:scale-125"
//           onClick={handleUnitsChange}
//         >
//           °F
//         </button>
//       </div>
//     </div>
//   );
// }

// export default Inputs;

import React, { useState } from "react";
import { UilSearch, UilLocationPoint } from "@iconscout/react-unicons";

function Inputs({ setQuery, units, setUnits }) {
  const [city, setCity] = useState("");

  const handleUnitsChange = (e) => {
    const selectUnit = e.currentTarget.name;
    if (units !== selectUnit) setUnits(selectUnit);
  };

  const handleSearchClick = () => {
    if (city !== "") setQuery({ q: city });
  };

  return (
    <div className="my-6 px-4 sm:px-6 md:px-8 md:flex md:justify-around lg:px-12 xl:px-24">
      <div className="flex items-center md:w-3/4 space-x-4">
        <input
          value={city}
          onChange={(e) => setCity(e.currentTarget.value)}
          type="text"
          placeholder="Buscar ciudad..."
          className="text-xl font-light p-2 w-full shadow-xl focus:outline-none capitalize placeholder:lowercase"
        />
        <UilSearch
          size={25}
          className="text-white cursor-pointer transition ease-out hover:scale-125"
          onClick={handleSearchClick}
        />
        <UilLocationPoint
          size={25}
          className="text-white cursor-pointer transition ease-out hover:scale-125"
        />
      </div>
      <div className="flex justify-center mt-4 md:mt-0 items-center">
        <button
          name="metric"
          className="text-xl text-white font-light transition ease-out hover:scale-125"
          onClick={handleUnitsChange}
        >
          °C
        </button>
        <p className="text-xl text-white mx-1">|</p>
        <button
          name="imperial"
          className="text-xl text-white font-light transition ease-out hover:scale-125"
          onClick={handleUnitsChange}
        >
          °F
        </button>
      </div>
    </div>
  );
}

export default Inputs;
