// utilsSlice.js
import {createSlice} from '@reduxjs/toolkit';

const utilsSlice = createSlice({
  name: 'utils',
  initialState: {
    // Define your utility state here
    reservation: {},
  },
  reducers: {
    // Define actions for updating utility state
    updateReservation: (state, action) => {
      state.reservation = action.payload;
    },
  },
});

export const {updateReservation} = utilsSlice.actions;
export default utilsSlice.reducer;
