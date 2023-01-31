import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  hasError: false,
  cityName: '',
  forcastDays: [],
  selectedWeather: {
    date: '',
    temp: 0,
    humidity: 0,
    wind: 0,
    hoursData: [],
  },
};

const weatherSlice = createSlice({
  name: 'weather',
  initialState,
  reducers: {
    setCityName: (state, action) => {
      state.cityName = action.payload;
      state.hasError = false;
    },
    setForcastDays: (state, action) => {
      state.forcastDays = action.payload;
    },
    setSelectedWeather: (state, action) => {
      state.selectedWeather = action.payload;
    },
    resetWeather: (state) => {
      state.cityName = '';
      state.forcastDays = [];
      state.selectedWeather = {
        date: '',
        temp: 0,
        humidity: 0,
        wind: 0,
        hoursData: [],
      };
      state.hasError = false;
    },
    setError: (state, action) => {
      state.hasError = true;
    },
  },
});

export const { setCityName, setForcastDays, setSelectedWeather, resetWeather, setError } =
  weatherSlice.actions;

export default weatherSlice.reducer;
