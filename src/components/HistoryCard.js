/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

const HistoryCard = ({navigation, hotel}) => {
  return (
    <TouchableOpacity activeOpacity={1}>
      <SafeAreaView style={styles.card}>
        <View style={styles.content}>
            <View style={styles.imageContainer}>
            <Image source={{uri: `${hotel.image}`}} style={styles.cardImage} />
            </View>
            <View style={styles.itemContainer}>
                <View style={styles.titleContainer}>
                    <Text style={{fontWeight: 'bold', fontSize: 18}}>{hotel.name}</Text>
                </View>
                <View style={styles.priceContainer}>
                    <Text>Total price: ${hotel.totalPrice}</Text>
                </View>
            </View>
        </View>
      </SafeAreaView>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    height: 100,
    elevation: 15,
    margin: 10,
    borderRadius: 15,
    backgroundColor: 'white',
  },
  content: {
    flex: 1,
    flexDirection: "row",
  },
  imageContainer: {
    flex: 1,
  },
  itemContainer: {
    flex: 3,
    borderRadius: 15,
  },
    cardImage: {
    height: 100,
    width: 100,
    borderTopLeftRadius: 15,
    borderBottomLeftRadius: 15,
  },
  titleContainer: {
    padding: 10,
  },
  priceContainer: {
    paddingLeft: 10
  }
});

export default HistoryCard;
