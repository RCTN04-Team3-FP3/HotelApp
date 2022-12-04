/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react/react-in-jsx-scope */
import {
  faCalendar,
  faPerson,
  faSearch,
} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {
  Alert,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {colors} from '../utils/styles/colors';

const Search = ({props}) => {
  return (
    <View style={styles.container}>
      <View style={styles.searchInputContainer}>
        <FontAwesomeIcon icon={faSearch} />
        <TextInput
          placeholder="Search"
          style={{fontSize: 18, paddingLeft: 20}}
          onChangeText={props.setCity}
          value={props.city}
        />
      </View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginHorizontal: 10,
        }}>
        <TouchableOpacity
          onPress={() => props.setModalVisible(!props.modalVisible)}
          style={styles.dateButton}>
          <FontAwesomeIcon icon={faCalendar} />
          {!props.inDate && (
            <Text style={{fontSize: 18, paddingLeft: 20, color: 'grey'}}>
              Choose Date
            </Text>
          )}
          {props.inDate && (
            <Text
              style={{
                fontSize: 16,
                paddingLeft: 20,
                color: colors.primary[1],
              }}>{`${props.inDate.format('ll')} - ${props.outDate.format(
              'll',
            )}`}</Text>
          )}
        </TouchableOpacity>
        <View style={styles.guestContainer}>
          <FontAwesomeIcon icon={faPerson} />
          <TextInput
            keyboardType="numeric"
            placeholder="Guest"
            style={{fontSize: 18, paddingLeft: 10}}
            onChangeText={props.setGuest}
            value={props.guest}
          />
        </View>
      </View>
      <TouchableOpacity
        style={styles.confirm}
        onPress={() => {
          if (props.city && props.inDate && props.outDate && props.guest) {
            const city = props.city;
            const inDate = props.inDate;
            const outDate = props.outDate;
            const guest = props.guest;
            props.navigation.navigate('List', {city, inDate, outDate, guest});
            props.setCity(null);
            props.setInDate(null);
            props.setOutDate(null);
            props.setGuest(null);
          } else {
            Alert.alert('Please Input all the field!');
          }
        }}>
        <Text
          style={{fontSize: 18, color: colors.primary[1], fontWeight: 'bold'}}>
          Confirm
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 10,
    backgroundColor: colors.blue[1],
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 1,
    shadowRadius: 7,
    elevation: 12,
    borderRadius: 10,
  },
  searchInputContainer: {
    height: 50,
    backgroundColor: colors.blue[2],
    margin: 10,
    paddingHorizontal: 20,
    borderRadius: 30,
    flexDirection: 'row',
    alignItems: 'center',
  },
  dateButton: {
    height: 50,
    flex: 2,
    marginRight: 5,
    paddingHorizontal: 20,
    backgroundColor: colors.blue[2],
    borderRadius: 30,
    flexDirection: 'row',
    alignItems: 'center',
  },
  guestContainer: {
    height: 50,
    backgroundColor: colors.blue[2],
    paddingHorizontal: 20,
    borderRadius: 30,
    flexDirection: 'row',
    alignItems: 'center',
  },
  confirm: {
    height: 50,
    backgroundColor: colors.blue[4],
    margin: 10,
    borderRadius: 30,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default Search;
