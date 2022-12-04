/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/react-in-jsx-scope */
import {useEffect} from 'react';
import {ActivityIndicator, ScrollView, SafeAreaView} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import ListCard from '../components/ListCard';
import {fetchHotels} from '../features/hotels/hotelsSlice';
import {colors} from '../utils/styles/colors';

const List = ({navigation, route}) => {
  const {hotels, loading} = useSelector(state => state.hotels);
  const data = route.params;
  const city = data.city;
  const inDay = data.inDate.date();
  const inMonth = data.inDate.month() + 1;
  const inYear = data.inDate.year();
  const outDay = data.outDate.date();
  const outMonth = data.outDate.month() + 1;
  const outYear = data.outDate.year();
  const guest = Number(data.guest);

  const dispatch = useDispatch();
  const doFetchHotels = () => {
    dispatch(
      fetchHotels({
        city,
        inDay,
        inMonth,
        inYear,
        outDay,
        outMonth,
        outYear,
        guest,
      }),
    );
  };
  useEffect(() => {
    doFetchHotels();
  }, []);

  if (loading) {
    return (
      <SafeAreaView>
        <ActivityIndicator
          size="large"
          color={colors.primary[3]}
          style={{padding: 50}}
        />
      </SafeAreaView>
    );
  }
  return (
    <ScrollView>
      {!loading &&
        hotels.map((hotel, index) => (
          <ListCard key={index} hotel={hotel} navigation={navigation} />
        ))}
    </ScrollView>
  );
};

export default List;
