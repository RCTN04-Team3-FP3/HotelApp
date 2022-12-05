/* eslint-disable prettier/prettier */
/* eslint-disable react-hooks/exhaustive-deps */
import {useSelector, useDispatch} from 'react-redux';
import {useEffect} from 'react';
import {fetchHotels} from '../features/hotels/hotelsSlice';

const useGetListData = route => {
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
  const inDate = data.inDate;
  const outDate = data.outDate;

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

  return {hotels, loading, inDate, outDate};
};

export default useGetListData;
