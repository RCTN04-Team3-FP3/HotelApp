/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react/react-in-jsx-scope */
import {useRef, useState} from 'react';
import {
  SafeAreaView,
  Text,
  View,
  Animated,
  Dimensions,
  FlatList,
} from 'react-native';
import {ScrollView, TextInput} from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Card from '../components/Card';
import TopHotelCard from '../components/TopHotelCard';

const {width} = Dimensions.get('screen');
const cardWidth = width / 1.8;

const Home = ({ navigation }) => {
  const hotels = [
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
  const [activeCardIndex, setActiveCardIndex] = useState(0);
  const scrollX = useRef(new Animated.Value(0)).current;

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: 'white'}}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.searchInputContainer}>
          <Icon name="search" size={30} style={{marginLeft: 20}} />
          <TextInput
            placeholder="Search"
            style={{fontSize: 20, paddingLeft: 10}}
          />
        </View>
        <Text style={{fontWeight: 'bold', color: 'grey', marginHorizontal: 20}}>
          TOP DESTINATIONS
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
            data={hotels}
            contentContainerStyle={{
              paddingVertical: 30,
              paddingLeft: 20,
              paddingRight: cardWidth / 2 - 40,
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
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginHorizontal: 20,
          }}>
          <Text style={{fontWeight: 'bold', color: 'grey'}}>TOP DESTINATIONS</Text>
        </View>
        <FlatList
          data={hotels}
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{
            paddingLeft: 20,
            marginTop: 20,
            paddingBottom: 30,
          }}
          renderItem={({item}) => <TopHotelCard hotel={item} />}
        />
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
