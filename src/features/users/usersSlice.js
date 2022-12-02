/* eslint-disable prettier/prettier */
import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  email: 'team03@gmail.com',
  password: 'team03',
  loggedIn: false,
  favorite: [],
  history: [],
  userProfile: {
    firstName: 'Team03',
    lastName: 'Hacktiv',
    address: 'Indonesia',
  },
};

const usersSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setFirstName: (state, action) => {
      state.userProfile.firstName = action.payload;
    },
    setLastName: (state, action) => {
      state.userProfile.lastName = action.payload;
    },
    setAddress: (state, action) => {
      state.userProfile.address = action.payload;
    },
    setIsLoggedIn: (state, action) => {
      state.loggedIn = action.payload;
    },
    addToHistory: (state, action) => {
      state.history.push(action.payload);
    },
    saveToFavorite: (state, action) => {
      state.favorite.push(action.payload);
    },
    deleteFavorite: (state, action) => {
      const index = state.favorite.findIndex(fav => fav.id === action.payload);
      state.favorite.splice(index, 1);
    },
  },
});

export const {
  setFirstName,
  setLastName,
  setAddress,
  setIsLoggedIn,
  addToHistory,
  saveToFavorite,
  deleteFavorite,
} = usersSlice.actions;

export default usersSlice.reducer;
