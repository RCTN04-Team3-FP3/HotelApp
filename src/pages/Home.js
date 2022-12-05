/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {
  SafeAreaView,
  Text,
  FlatList,
  ScrollView,
} from 'react-native';
import CarouselCard from '../components/CarouselCard';
import DatePicker from '../components/DatePicker';
import Modal from 'react-native-modal';
import {getIndonesiaCities} from '../utils/datas/getIndonesiaCities';
import {getGlobalCities} from '../utils/datas/getGlobalCities';
import {colors} from '../utils/styles/colors';
import Search from '../components/Search';

const Home = ({navigation}) => {
  const indonesiaCities = getIndonesiaCities();
  const globalCities = getGlobalCities();

  const [city, setCity] = useState(null);
  const [inDate, setInDate] = useState(null);
  const [outDate, setOutDate] = useState(null);
  const [guest, setGuest] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <SafeAreaView>
      <Modal
        isVisible={modalVisible}
        onBackdropPress={() => setModalVisible(!modalVisible)}
        style={{margin: 10}}>
        <DatePicker
          data={{inDate, outDate, setInDate, setOutDate, setModalVisible}}
        />
      </Modal>
      <Search
        props={{
          city,
          setCity,
          inDate,
          setInDate,
          outDate,
          setOutDate,
          guest,
          setGuest,
          modalVisible,
          setModalVisible,
          navigation,
        }}
      />
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={{marginBottom: 20}}>
        <Text
          style={{
            fontWeight: 'bold',
            color: colors.primary[1],
            fontSize: 24,
            margin: 20,
          }}>
          INDONESIA DESTINATIONS
        </Text>
        <FlatList
          data={indonesiaCities}
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
            color: colors.primary[1],
            fontSize: 24,
            margin: 20,
          }}>
          GLOBAL DESTINATION
        </Text>
        <FlatList
          data={globalCities}
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

export default Home;
