import {useState} from 'react';
import client from '../api/client';

export default useWeatherData = () => {
  const [weather, setWeather] = useState();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const getWeather = async (lon, lat, fahrenheit) => {
    setLoading(true);
    try {
      setWeather((await client(lon, lat, fahrenheit).get()).data);
      setLoading(false);
      setError(false);
    } catch (e) {
      setError(true);
      console.log(e);
    }
  };

  return {weather, loading, error, getWeather};
};
