import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

const useGetDetail = ({route}) => {
    const {details} = useSelector(state => state.hotels);
    const {favorite, loggedIn} = useSelector(state => state.users);
    const dispatch = useDispatch();
    const hotel = route.params;

    const isFavorite = favorite.some(fav => fav.id === hotel.id);

    return {details, favorite, loggedIn, dispatch, isFavorite, hotel}
}

export default useGetDetail;