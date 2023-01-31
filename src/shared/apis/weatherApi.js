import store from '@store/index';
import {
  resetWeather, setCityName, setError, setForcastDays,
  setSelectedWeather
} from '@store/slice/weatherSlice';
import axiosInstance, { WEATHER_API_KEY } from '@utils/axios';
import moment from '@utils/moment';

export const getCityWeather = async (city) => {
  try {
    let result = await axiosInstance.get(
      `v1/forecast.json?key=${WEATHER_API_KEY}&q=${city}&days=10`,
    );
    if (result.data) {
      result = result.data;
      const city = result.location.name;
      const forcastDays = result.forecast.forecastday.map((item) => {
        return {
          id: item.date_epoch,
          date: item.date,
          crTempreture: item.day.avgtemp_c,
          humidity: item.day.avghumidity,
          windSpeed: item.day.maxwind_kph,
          lowestTemp: item.day.mintemp_c,
          highestTemp: item.day.maxtemp_c,
          icon: item.day.condition.icon,
          hoursData: item.hour.map((hour) => {
            return {
              id: hour.time_epoch,
              time: hour.time,
              temp: hour.temp_c,
              humidity: hour.humidity,
              wind: hour.wind_kph,
              icon: hour.condition.icon,
            };
          }),
        };
      });
      store.dispatch(
        setSelectedWeather({
          date: moment(result.current.last_updated, 'YYYY-MM-DD HH:mm').format('YYYY-MM-DD'),
          temp: result.current.temp_c,
          humidity: result.current.humidity,
          wind: result.current.wind_kph,
          icon: result.current.condition.icon,
          hoursData: result.forecast.forecastday[0].hour.map((hour) => {
            return {
              id: hour.time_epoch,
              time: hour.time,
              temp: hour.temp_c,
              humidity: hour.humidity,
              wind: hour.wind_kph,
              icon: hour.condition.icon,
            };
          }),
        }),
      );
      store.dispatch(setForcastDays(forcastDays));
      store.dispatch(setCityName(city));
    } else {
      store.dispatch(resetWeather());
      store.dispatch(setError());
    }
  } catch (error) {
    console.log(error);
  }
};
