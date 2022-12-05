import {useDispatch, useSelector} from 'react-redux';
const useBooking = () => {
    const dispatch = useDispatch();
    const {userProfile} = useSelector(state => state.users);
    return {dispatch, userProfile}
}

export default useBooking;