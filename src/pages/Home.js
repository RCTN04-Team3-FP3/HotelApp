/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react/react-in-jsx-scope */
import {faSearch} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {useRef, useState} from 'react';
import {
  SafeAreaView,
  Text,
  View,
  Animated,
  Dimensions,
  FlatList,
  Button,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import {ScrollView, TextInput} from 'react-native-gesture-handler';
import Card from '../components/Card';
import CarouselCard from '../components/CarouselCard';
import DatePicker from '../components/DatePicker';
import Modal from 'react-native-modal';

const {width} = Dimensions.get('screen');
const cardWidth = width / 1.8;

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
  const [activeCardIndex, setActiveCardIndex] = useState(0);
  const scrollX = useRef(new Animated.Value(0)).current;
  const [inDate, setInDate] = useState(null);
  const [outDate, setOutDate] = useState(null);
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
          <TouchableOpacity
            onPress={() => setModalVisible(!modalVisible)}
            style={styles.guest}>
            <Text>Guest</Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity
          style={styles.search}
          onPress={() => {
            navigation.navigate('List', city);
            setCity(null);
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
            <CarouselCard city={item} navigation={navigation} />
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
            paddingBottom: 200,
          }}
          renderItem={({item}) => (
            <CarouselCard city={item} navigation={navigation} />
          )}
        />
        {/* <View>
          <Animated.FlatList
            onMomentumScrollEnd={e => {
              setActiveCardIndex(
                Math.round(e.nativeEvent.contentOffset.x / cardWidth),
              );
            }}
            onScroll={Animated.event(
              [{nativeEvent: {contentOffset: {x: scrollX}}}],
              {useNativeDriver: true},
            )}
            horizontal
            data={hotel}
            contentContainerStyle={{
              paddingVertical: 30,
              paddingLeft: 20,
              // paddingRight: cardWidth / 2 - 40,
            }}
            showsHorizontalScrollIndicator={false}
            renderItem={({item, index}) => (
              <Card
                hotel={item}
                index={index}
                cardWidth={cardWidth}
                scrollX={scrollX}
                activeCardIndex={activeCardIndex}
                navigation={navigation}
              />
            )}
            snapToInterval={cardWidth}
          />
        </View> */}
        {/* {hotel.map((item) => (<ListCard hotel={item} />))} */}
        {/* <ListCard /> */}
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
    marginLeft: 5,
    backgroundColor: 'lightgrey',
    borderRadius: 30,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
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
