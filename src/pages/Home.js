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
} from 'react-native';
import {ScrollView, TextInput} from 'react-native-gesture-handler';
import Card from '../components/Card';
import CarouselCard from '../components/CarouselCard';

const {width} = Dimensions.get('screen');
const cardWidth = width / 1.8;

const Home = ({navigation}) => {
  const hotel = [
    {
      id: '1',
      name: 'Silver Hotel & SPA',
      location: 'Green street,Central district',
      price: 120,
      image: require('../assets/hotel1.jpg'),
      details: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Consequat nisl vel pretium lectus quam id leo. Velit euismod in pellentesque massa placerat duis ultricies lacus sed. Justo laoreet sit amet cursus sit`,
    },
    {
      id: '2',
      name: 'Bring Hotel',
      location: 'Yuki street',
      price: 70,
      image: require('../assets/hotel2.jpg'),
      details: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Consequat nisl vel pretium lectus quam id leo. Velit euismod in pellentesque massa placerat duis ultricies lacus sed. Justo laoreet sit amet cursus sit`,
    },
    {
      id: '3',
      name: 'Aluna Hotel',
      location: 'Almond street',
      price: 90,
      image: require('../assets/hotel3.jpg'),
      details: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Consequat nisl vel pretium lectus quam id leo. Velit euismod in pellentesque massa placerat duis ultricies lacus sed. Justo laoreet sit amet cursus sit`,
    },
    {
      id: '4',
      name: 'Green Hotel',
      location: 'Main street',
      price: 100,
      image: require('../assets/hotel4.jpg'),
      details: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Consequat nisl vel pretium lectus quam id leo. Velit euismod in pellentesque massa placerat duis ultricies lacus sed. Justo laoreet sit amet cursus sit`,
    },
  ];
  const cities = [
    {
      id: '1',
      city: 'Jakarta',
      image: require('../assets/jakarta.jpg'),
    },
    {
      id: '2',
      city: 'Bandung',
      image: require('../assets/bandung.jpg'),
    },
    {
      id: '3',
      city: 'Padang',
      image: require('../assets/padang.jpg'),
    },
    {
      id: '4',
      city: 'Bali',
      image: require('../assets/bali.jpg'),
    },
    {
      id: '5',
      city: 'Yogyakarta',
      image: require('../assets/yogyakarta.jpg'),
    },
    {
      id: '6',
      city: 'Batam',
      image: require('../assets/batam.jpg'),
    },
    {
      id: '7',
      city: 'Malang',
      image: require('../assets/malang.jpg'),
    },
  ];
  const [city, setCity] = useState(null);
  const [activeCardIndex, setActiveCardIndex] = useState(0);
  const scrollX = useRef(new Animated.Value(0)).current;

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: 'white'}}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.searchInputContainer}>
          <FontAwesomeIcon icon={faSearch} style={{paddingLeft: 60}} />
          <TextInput
            placeholder="Search"
            style={{fontSize: 20, paddingRight: 100}}
            onChangeText={setCity}
            value={city}
          />
        </View>
        <Button
          onPress={() => {
            navigation.navigate('List', city);
            setCity(null);
          }}
          title="Search"
          color="blue"
          style={{width: '90%'}}
        />
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginHorizontal: 20,
          }}>
          <Text style={{fontWeight: 'bold', color: 'grey', fontSize: 24}}>
            TOP DESTINATIONS
          </Text>
        </View>
        <FlatList
          data={cities}
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{
            paddingLeft: 20,
            marginTop: 20,
            paddingBottom: 30,
          }}
          renderItem={({item}) => (
            <CarouselCard city={item} navigation={navigation} />
          )}
        />
        <Text style={{fontWeight: 'bold', color: 'grey', marginLeft: 20, fontSize: 24}}>
          RECOMMENDED HOTELS
        </Text>
        <View>
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
        </View>
        {/* {hotel.map((item) => (<ListCard hotel={item} />))} */}
        {/* <ListCard /> */}
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = {
  header: {
    marginTop: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
  },
  searchInputContainer: {
    height: 50,
    backgroundColor: 'lightgrey',
    marginTop: 15,
    margin: 20,
    borderRadius: 30,
    flexDirection: 'row',
    alignItems: 'center',
  },
};

export default Home;
