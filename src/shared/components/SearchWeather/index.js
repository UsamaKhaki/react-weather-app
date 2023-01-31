import React, { useState } from 'react';
import { getCityWeather } from '@apis/weatherApi';

const SearchWeather = () => {
  const [text, setText] = useState('');

  const handleChange = (e) => {
    const cityName = e.target.value;
    setText(cityName);
  };

  // on enter key press
  const handleKeyPress = (e) => {
    if (e.keyCode === 13) {
      if (text) {
        getCityWeather(text.toLowerCase());
        return;
      }
      ifEmptyCityName();
    }
  };

  const handleSearch = (e) => {
    if (text) {
      getCityWeather(text.toLowerCase());
      return;
    }
    ifEmptyCityName();
  };

  const ifEmptyCityName = () => {
    if (text === '') {
      getCityWeather('lahore');
    }
  };

  return (
    <div className="w-full max-w-[400px] mx-auto flex space-x-4 mb-6 md:mb-40">
      <input
        type="text"
        className="form-control"
        placeholder="Search City"
        value={text}
        onKeyUp={handleKeyPress}
        onChange={handleChange}
      />
      <button onClick={handleSearch} className="btn btn-primary">
        Search
      </button>
    </div>
  );
};

export default SearchWeather;
