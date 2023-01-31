import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  loadingCnt: 0,
  showLoading: true,
};

export const utilSlice = createSlice({
  name: 'utilSlice',
  initialState,
  reducers: {
    plusLoadingCnt: (state) => {
      state.loadingCnt += 1;
    },
    minusLoadingCnt: (state) => {
      if (state.loadingCnt > 0) {
        state.loadingCnt -= 1;
      }
    },
    resetLoading(state) {
      state.loadingCnt = 0;
      state.showLoading = true;
    },
  },
});

export default utilSlice.reducer;
export const { plusLoadingCnt, minusLoadingCnt, resetLoading, setTabName } = utilSlice.actions;
