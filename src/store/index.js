import { configureStore } from '@reduxjs/toolkit';
import utilSlice from './slice/utilSlice';
import weatherSlice from './slice/weatherSlice';

const store = configureStore({
  reducer: {
    utils: utilSlice,
    weather: weatherSlice,
  },
});

export default store;
