import { useDispatch, useSelector } from "react-redux";
import { Alert } from "react-native";
import {setIsLoggedIn} from '../features/users/usersSlice';

const useLogin = (navigation, emailInput, passwordInput) => {
    const dispatch = useDispatch();
    const {email, password} = useSelector(state => state.users);
    const onPressLogin = () => {
        if (emailInput === email && passwordInput === password) {
          dispatch(setIsLoggedIn(true));
          navigation.goBack();
        } else {
          Alert.alert('Wrong email or password!');
        }
    };
    return onPressLogin;
}

export default useLogin;