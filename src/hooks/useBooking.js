/* eslint-disable prettier/prettier */
import {useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
const useBooking = () => {
  const dispatch = useDispatch();
  const {userProfile} = useSelector(state => state.users);
  const [modalVisible, setModalVisible] = useState(false);
  const [inDate, setInDate] = useState(null);
  const [outDate, setOutDate] = useState(null);

  return {
    dispatch,
    userProfile,
    modalVisible,
    setModalVisible,
    inDate,
    setInDate,
    outDate,
    setOutDate,
  };
};

export default useBooking;
