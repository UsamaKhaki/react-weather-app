import WeatherComponent from '@components/WeatherComponent/WeatherComponent';
import React from 'react';
import useWeatherList from './useWeatherList';
import { useSelector } from 'react-redux';

const WeatherList = () => {
  const { onClickWeather, selected } = useWeatherList();
  const data = useSelector((state) => state.weather.forcastDays);

  return (
    <div className="carousle-slider">
      {data.map((item, index) => {
        return (
          <WeatherComponent
            key={item.id}
            onClick={onClickWeather}
            active={selected ? selected === item.id : index === 0}
            data={item}
          />
        );
      })}
    </div>
  );
};

export default WeatherList;
