import React from "react";

function TopButtons({ setQuery }) {
  const cities = [
    {
      id: 1,
      title: "Buenos Aires",
    },
    {
      id: 2,
      title: "Montevideo",
    },
    {
      id: 3,
      title: "Santiago",
    },
    {
      id: 4,
      title: "Brasilia",
    },
    {
      id: 5,
      title: "New York",
    },
  ];

  return (
    <div className="md:block hidden">
      <div className="flex items-center justify-around my-6">
        {cities.map((city, key) => (
          <button
            key={city.id}
            className="text-white text-lg font-medium"
            onClick={() => setQuery({ q: city.title })}
          >
            {city.title}
          </button>
        ))}
      </div>
    </div>
  );
}

export default TopButtons;
