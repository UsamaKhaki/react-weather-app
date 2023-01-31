import { getCityWeather } from '@apis/weatherApi';
import { useEffect } from 'react';

const useHome = () => {
  useEffect(() => {
    getCityWeather('lahore');
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      getCityWeather('lahore');
    }, 300000);

    return () => clearInterval(interval);
  }, []);

  return {};
};

export default useHome;
