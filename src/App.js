import TopButtons from "./components/TopButtons";
import Inputs from "./components/Inputs";
import TimeAndLocation from "./components/TimeAndLocation";
import TemperatureAndDetails from "./components/TemperatureAndDetails";
import getFormattedWeatherData from "./services/weatherService";
import { useEffect, useState } from "react";


function App() {
  const [query, setQuery] = useState({ q: "mendoza" });
  const [units, setUnits] = useState("metric");
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        const data = await getFormattedWeatherData({ ...query, units }).then(
          (data) => {
            setWeather(data);
            setError(null);
          }
        );
      } catch (error) {
        setError("No se pudo encontrar información para la ciudad buscada");
        setWeather(null);
      }
    };

    fetchWeather();
  }, [query, units]);

  return (
    <div className="mx-auto max-w-screen-md py-5 px-8 sm:px-16 md:my-16 bg-gradient-to-br from-cyan-700 to-blue-700 min-h-screen md:block md:min-h-fit shadow-xl shadow-gray-400">
      <TopButtons setQuery={setQuery} />
      <Inputs setQuery={setQuery} units={units} setUnits={setUnits} />
      {error && <div className="text-center text-white mt-10"> {error} </div>}
      {weather && (
        <div>
          <TimeAndLocation weather={weather} />
          <TemperatureAndDetails weather={weather} />
        </div>
      )}
    </div>
  );
}

export default App;
