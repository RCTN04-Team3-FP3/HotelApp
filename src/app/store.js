/* eslint-disable prettier/prettier */
import {configureStore} from '@reduxjs/toolkit';
import hotelsSlice from '../features/hotels/hotelsSlice';
import usersSlice from '../features/users/usersSlice';

export const store = configureStore({
  reducer: {
    hotels: hotelsSlice,
    users: usersSlice,
  },
});
