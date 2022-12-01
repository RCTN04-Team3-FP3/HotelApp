/* eslint-disable prettier/prettier */
/* eslint-disable no-shadow */
import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  hotels: [],
  topHotels: [],
  loading: false,
  error: '',
};

export const httpClient = axios.create({
  baseURL: 'https://hotels4.p.rapidapi.com/',
  headers: {
    'content-type': 'application/json',
    'X-RapidAPI-Key': '78e03438famsh5de0a1e4983a9d9p1412b3jsn0e43caf98b08',
    'X-RapidAPI-Host': 'hotels4.p.rapidapi.com',
  },
});

const fetchId = city => {
  return httpClient
    .get('locations/v3/search', {
      params: {
        q: city,
      },
    })
    .then(res => res.data.sr[0].gaiaId);
};

const fetchProperty = id => {
  return httpClient
    .post('properties/v2/list', {
      destination: {regionId: `${id}`},
      checkInDate: {day: 10, month: 10, year: 2022},
      checkOutDate: {day: 15, month: 10, year: 2022},
      rooms: [{adults: 2}],
      resultsStartingIndex: 0,
      resultsSize: 20,
      sort: 'RECOMMENDED',
    })
    .then(res =>
      res.data.data.propertySearch.properties.map(hotel => {
        const detail = {
          name: hotel.name,
          reviews: hotel.reviews,
          image: hotel.propertyImage.image.url,
          price: hotel.price.options[0].formattedDisplayPrice,
        };
        return detail;
      }),
    );
};

export const fetchHotels = createAsyncThunk(
  'hotels/fetchHotels',
  async city => {
    try {
      const res = fetchId(city).then(res =>
        fetchProperty(res).then(res => res),
      );
      return res;
    } catch (error) {
      throw error;
    }
  },
);

const hotelsSlice = createSlice({
  name: 'hotels',
  initialState,
  extraReducers(builder) {
    builder
      .addCase(fetchHotels.pending, state => {
        return {...state, loading: true};
      })
      .addCase(fetchHotels.fulfilled, (state, action) => {
        return {...state, hotels: action.payload, loading: false};
      })
      .addCase(fetchHotels.rejected, (state, action) => {
        return {...state, loading: false, error: action.error.message};
      });
  },
});

export default hotelsSlice.reducer;
