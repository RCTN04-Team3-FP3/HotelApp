/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react/react-in-jsx-scope */
import {faSearch} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {useState} from 'react';
import {
  SafeAreaView,
  Text,
  View,
  FlatList,
  StyleSheet,
  TouchableOpacity,
  Alert,
} from 'react-native';
import {ScrollView, TextInput} from 'react-native-gesture-handler';
import CarouselCard from '../components/CarouselCard';
import DatePicker from '../components/DatePicker';
import Modal from 'react-native-modal';

const Home = ({navigation}) => {
  const cities = [
    {
      city: 'Jakarta',
      image: require('../assets/jakarta.jpg'),
    },
    {
      city: 'Bandung',
      image: require('../assets/bandung.jpg'),
    },
    {
      city: 'Bali',
      image: require('../assets/bali.jpg'),
    },
    {
      city: 'Yogyakarta',
      image: require('../assets/yogyakarta.jpg'),
    },
    {
      city: 'Batam',
      image: require('../assets/batam.jpg'),
    },
    {
      city: 'Malang',
      image: require('../assets/malang.jpg'),
    },
  ];

  const globals = [
    {
      city: 'Paris',
      image: require('../assets/paris.jpg'),
    },
    {
      city: 'New York',
      image: require('../assets/new-york.jpg'),
    },
    {
      city: 'London',
      image: require('../assets/london.jpg'),
    },
    {
      city: 'Bangkok',
      image: require('../assets/bangkok.jpg'),
    },
    {
      city: 'Hong Kong',
      image: require('../assets/hong-kong.jpg'),
    },
    {
      city: 'Dubai',
      image: require('../assets/dubai.jpg'),
    },
    {
      city: 'Singapore',
      image: require('../assets/singapore.jpg'),
    },
    {
      city: 'Macau',
      image: require('../assets/macau.jpg'),
    },
    {
      city: 'Tokyo',
      image: require('../assets/tokyo.jpg'),
    },
    {
      city: 'Moscow',
      image: require('../assets/moscow.jpg'),
    },
  ];
  const [city, setCity] = useState(null);
  const [inDate, setInDate] = useState(null);
  const [outDate, setOutDate] = useState(null);
  const [guest, setGuest] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <SafeAreaView style={{backgroundColor: 'white'}}>
      <Modal
        isVisible={modalVisible}
        onBackdropPress={() => setModalVisible(!modalVisible)}
        style={{margin: 10}}>
        <DatePicker
          data={{inDate, outDate, setInDate, setOutDate, setModalVisible}}
        />
      </Modal>
      <View style={{backgroundColor: '#E3FDFD'}}>
        <View style={styles.searchInputContainer}>
          <FontAwesomeIcon icon={faSearch} style={{paddingLeft: 60}} />
          <TextInput
            placeholder="Search"
            style={{fontSize: 20, paddingRight: 100}}
            onChangeText={setCity}
            value={city}
          />
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginHorizontal: 10,
          }}>
          <TouchableOpacity
            onPress={() => setModalVisible(!modalVisible)}
            style={styles.dateButton}>
            {!inDate && <Text>Choose Date</Text>}
            {inDate && (
              <Text>{`${inDate.format('ll')} - ${outDate.format('ll')}`}</Text>
            )}
          </TouchableOpacity>
          <TextInput
            onChangeText={setGuest}
            keyboardType="numeric"
            style={styles.guest}
            value={guest}
            placeholder="Guest"
          />
        </View>
        <TouchableOpacity
          style={styles.search}
          onPress={() => {
            if (city && inDate && outDate && guest) {
              navigation.navigate('List', {city, inDate, outDate, guest});
              setCity(null);
              setInDate(null);
              setOutDate(null);
              setGuest(null);
            } else {
              Alert.alert('Please Input all the field!');
            }
          }}>
          <Text>Search</Text>
        </TouchableOpacity>
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Text
          style={{
            fontWeight: 'bold',
            color: 'grey',
            fontSize: 24,
            margin: 20,
          }}>
          INDONESIA DESTINATIONS
        </Text>
        <FlatList
          data={cities}
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{
            paddingLeft: 20,
          }}
          renderItem={({item}) => (
            <CarouselCard item={item} navigation={navigation} />
          )}
        />
        <Text
          style={{
            fontWeight: 'bold',
            color: 'grey',
            fontSize: 24,
            margin: 20,
          }}>
          GLOBAL DESTINATION
        </Text>
        <FlatList
          data={globals}
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{
            paddingLeft: 20,
            paddingBottom: 210,
          }}
          renderItem={({item}) => (
            <CarouselCard item={item} navigation={navigation} />
          )}
        />
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  header: {
    marginTop: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
  },
  searchInputContainer: {
    height: 50,
    backgroundColor: 'lightgrey',
    margin: 10,
    borderRadius: 30,
    flexDirection: 'row',
    alignItems: 'center',
  },
  dateButton: {
    height: 50,
    flex: 2,
    marginRight: 5,
    backgroundColor: 'lightgrey',
    borderRadius: 30,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  guest: {
    height: 50,
    flex: 1,
    backgroundColor: 'lightgrey',
    borderRadius: 30,
    textAlign: 'center',
  },
  search: {
    height: 50,
    backgroundColor: 'lightblue',
    margin: 10,
    borderRadius: 30,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default Home;
