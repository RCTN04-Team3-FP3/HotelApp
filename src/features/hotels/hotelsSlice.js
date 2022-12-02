/* eslint-disable prettier/prettier */
/* eslint-disable no-shadow */
import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  hotels: [],
  details: {},
  loading: false,
  error: '',
};

const httpClient = axios.create({
  baseURL: 'https://hotels4.p.rapidapi.com/',
  headers: {
    'content-type': 'application/json',
    'X-RapidAPI-Key': 'da43c6ff7emsh709d855910fd898p1b7934jsn79b0a074bbb9',
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
        const data = {
          id: hotel.id,
          name: hotel.name,
          reviews: hotel.reviews,
          image: hotel.propertyImage.image.url,
          price: hotel.price.lead.amount.toFixed(1),
        };
        return data;
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

const fetchDetail = id => {
  return httpClient
    .post('properties/v2/detail', {
      propertyId: id,
    })
    .then(res => {
      const data = {
        location: res.data.data.propertyInfo.summary.location.address.addressLine,
        desc: res.data.data.propertyInfo.summary.policies.shouldMention.body[0],
      };
      return data;
    });
};

export const fetchDetailHotel = createAsyncThunk(
  'detail/fetchDetail',
  async id => {
    try {
      const res = fetchDetail(id).then(res => res);
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
      .addCase(fetchDetailHotel.fulfilled, (state, action) => {
        return {...state, details: action.payload};
      })
      .addCase(fetchHotels.rejected, (state, action) => {
        return {...state, loading: false, error: action.error.message};
      });
  },
});

export default hotelsSlice.reducer;
