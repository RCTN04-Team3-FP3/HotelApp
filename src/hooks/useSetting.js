import { useDispatch, useSelector } from "react-redux";
const useSetting = () => {
    const dispatch = useDispatch();
    const {loggedIn, userProfile} = useSelector(state => state.users);
    return {dispatch, loggedIn, userProfile}
}

export default useSetting;