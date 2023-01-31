import SearchWeather from '@components/SearchWeather/index';
import Title from '@components/Title/index';
import WeatherList from '@components/WeatherList/WeatherList';
import moment from '@utils/moment';
import { useSelector } from 'react-redux';
import useHome from './useHome';

const Home = () => {
  const { cityName, hasError, selectedWeather } = useSelector((state) => state.weather);
  const { date, temp, humidity, wind, icon, hoursData } = selectedWeather;
  useHome();

  return (
    <div className="py-40">
      <div className="container text-center mb-6 md:mb-40">
        <Title title="Daily Temperature Guide" />
        <SearchWeather />
      </div>
      {cityName && (
        <>
          <div className="container text-center mb-6 md:mb-40">
            <p className="text-para">
              <b className="font-bold">City name:</b> {cityName}
            </p>
          </div>
          <WeatherList />
          <div className="container mb-6 md:mb-40">
            <div className="flex justify-between items-center">
              <div className="card text-lg">
                <h5 className="mb-2">
                  Current Weather <span className="text-primary">| {temp} °C</span>
                </h5>
                <h5 className="mb-2">
                  <b className="font-medium">Date:</b> {moment(date).format('MMMM DD, YYYY')}
                </h5>
                <h5 className="mb-2">
                  <b className="font-medium">Humidity:</b> {humidity}
                </h5>
                <h5 className="mb-2">
                  <b className="font-medium">Wind Speed:</b> {wind} mph
                </h5>
              </div>
              <img src={icon} alt="" />
            </div>
          </div>
          <div className="container">
            <div className="overflow-x-auto">
              <table className="w-full weather-table">
                <thead className="border-y border-para">
                  <tr>
                    <th>Time</th>
                    <th>Weather State</th>
                    <th>Humidity</th>
                    <th>Wind Speed</th>
                    <th>Temperature</th>
                  </tr>
                </thead>
                <tbody>
                  {hoursData.map((item, index) => (
                    <tr key={index}>
                      <td>{moment(item.time, 'YYYY-MM-DD hh:mm').format('hh:mm A')}</td>
                      <td>
                        <img src={item.icon} alt="" />
                      </td>
                      <td>{item.humidity}</td>
                      <td>{item.wind} mph</td>
                      <td>{item.temp} °C</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </>
      )}
      {hasError && (
        <div className="container text-center">
          <p className="text-para">Invalid city name</p>
        </div>
      )}
    </div>
  );
};

export default Home;
