import { setSelectedWeather } from '@store/slice/weatherSlice';
import { useState } from 'react';
import { useDispatch } from 'react-redux';

const useWeatherList = () => {
  const dispatch = useDispatch();
  const [selected, setSelected] = useState('');

  const onClickWeather = (data) => {
    dispatch(
      setSelectedWeather({
        date: data.date,
        temp: data.crTempreture,
        humidity: data.humidity,
        wind: data.windSpeed,
        icon: data.icon,
        hoursData: data.hoursData,
      }),
    );
    setSelected(data.id);
  };

  return { selected, onClickWeather };
};

export default useWeatherList;
