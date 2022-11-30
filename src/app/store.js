/* eslint-disable prettier/prettier */
import {configureStore} from '@reduxjs/toolkit';
import hotelsSlice from '../features/hotels/hotelsSlice';

export const store = configureStore({
  reducer: {
    hotels: hotelsSlice,
  },
});
