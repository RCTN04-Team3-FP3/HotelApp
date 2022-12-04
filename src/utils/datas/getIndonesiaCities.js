/* eslint-disable prettier/prettier */
const indonesiaCities = [
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

export function getIndonesiaCities() {
  return indonesiaCities;
}
