/* eslint-disable prettier/prettier */
import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';

const initialState = {
  hotels: [],
  topHotels: [],
  loading: false,
  error: '',
};

export const fetchHotels = createAsyncThunk('hotels/fetchHotels', async (id) => {
  const options = {
    method: 'POST',
    headers: {
      'content-type': 'application/json',
      'X-RapidAPI-Key': '78e03438famsh5de0a1e4983a9d9p1412b3jsn0e43caf98b08',
      'X-RapidAPI-Host': 'hotels4.p.rapidapi.com',
    },
    body: `{"destination":{"regionId":"${id}"},"checkInDate":{"day":10,"month":10,"year":2022},"checkOutDate":{"day":15,"month":10,"year":2022},"rooms":[{"adults":2}],"resultsStartingIndex":0,"resultsSize":20,"sort":"RECOMMENDED"}`,
  };

  const result = await fetch(
    'https://hotels4.p.rapidapi.com/properties/v2/list',
    options,
  )
    .then(response => response.json())
    .catch(err => console.error(err));
  return result.data.propertySearch.properties;
});

// export const fetchTopHotels = createAsyncThunk(
//   'topHotels/fetchTopHotels',
//   async () => {
//     const options = {
//       method: 'POST',
//       headers: {
//         'content-type': 'application/json',
//         'X-RapidAPI-Key': '78e03438famsh5de0a1e4983a9d9p1412b3jsn0e43caf98b08',
//         'X-RapidAPI-Host': 'hotels4.p.rapidapi.com',
//       },
//       body: '{"destination":{"regionId":"602651"},"checkInDate":{"day":10,"month":10,"year":2022},"checkOutDate":{"day":15,"month":10,"year":2022},"rooms":[{"adults":2}],"resultsStartingIndex":0,"resultsSize":10,"sort":"RECOMMENDED"}',
//     };

//     const result = await fetch(
//       'https://hotels4.p.rapidapi.com/properties/v2/list',
//       options,
//     )
//       .then(response => response.json())
//       // .then(response => console.log(response.data.propertySearch.properties))
//       .catch(err => console.error(err));
//     return result.data.propertySearch.properties;
//   },
// );

const hotelsSlice = createSlice({
  name: 'hotels',
  initialState,
  extraReducers(builder) {
    builder
      .addCase(fetchHotels.pending, state => {
        return {...state, loading: true};
      })
      .addCase(fetchHotels.fulfilled, (state, action) => {
        console.log('fulfilled');
        return {...state, hotels: action.payload, loading: false};
      })
      // .addCase(fetchTopHotels.fulfilled, (state, action) => {
      //   if (!state.topHotels.length) {
      //     return {...state, topHotels: action.payload, loading: false};
      //   }
      // })
      .addCase(fetchHotels.rejected, (state, action) => {
        return {...state, loading: false, error: action.error.message};
      });
  },
});

export default hotelsSlice.reducer;
