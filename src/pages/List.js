/* eslint-disable prettier/prettier */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/react-in-jsx-scope */
import {useEffect, useState} from 'react';
import {SafeAreaView, ScrollView, Text} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import ListCard from '../components/ListCard';
import {fetchHotels} from '../features/hotels/hotelsSlice';

const List = ({navigation, route}) => {
  // const [id, setId] = useState();

  // const options = {
  //   method: 'GET',
  //   headers: {
  //     'X-RapidAPI-Key': '78e03438famsh5de0a1e4983a9d9p1412b3jsn0e43caf98b08',
  //     'X-RapidAPI-Host': 'hotels4.p.rapidapi.com',
  //   },
  // };

  // fetch(
  //   `https://hotels4.p.rapidapi.com/locations/v3/search?q=${route.params}`,
  //   options,
  // )
  //   .then(response => response.json())
  //   .then(response => setId(response.sr[0].gaiaId))
  //   .catch(err => console.error(err));
  // console.log(id);

  const dispatch = useDispatch();
  const doFetchHotels = () => {
    dispatch(fetchHotels(route.params));
  };
  useEffect(() => {
    doFetchHotels();
  }, [route.params]);

  const {hotels, loading} = useSelector(state => state.hotels);
  return (
    <ScrollView>
      {!loading &&
        hotels.map((hotel, index) => <ListCard key={index} hotel={hotel} navigation={navigation}/>)}
    </ScrollView>
  );
};

export default List;
