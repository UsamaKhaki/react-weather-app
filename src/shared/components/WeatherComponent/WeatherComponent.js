import useWeatherComponent from './useWeatherComponent';
import moment from '@utils/moment';

const WeatherComponent = ({ active, onClick, data }) => {
  const { date, crTempreture, humidity, windSpeed, lowestTemp, highestTemp, icon, id } = data;

  const {} = useWeatherComponent();

  return (
    <div className={`weather-card ${active ? 'active' : ''}`} onClick={() => onClick(data)}>
      <div className="flex gap-7 items-center mb-2">
        <img src={icon} alt="rainy-weather" />
        <div>
          <h6 className="text-[13px]">{moment(date, 'YYYY-MM-DD').format('MMMM DD, YYYY')}</h6>
          <h4 className="text-[20px] font-semibold leading-8">
            Current Weather | {crTempreture}°C
          </h4>
          <h5 className="text-[13px]">
            <b className="font-[500]">Humidity:</b> {humidity}
          </h5>
          <h5 className="text-[13px]">
            <b className="font-[500]">Wind Speed:</b> {windSpeed}
          </h5>
        </div>
      </div>
      <div className="flex items-center justify-between">
        <h5 className="flex flex-col">
          {lowestTemp}°C
          <span>Lowest Temp</span>
        </h5>
        <h5 className="flex flex-col text-right">
          {highestTemp}°C
          <span>Highest Temp</span>
        </h5>
      </div>
    </div>
  );
};

export default WeatherComponent;
