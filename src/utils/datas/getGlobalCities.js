/* eslint-disable prettier/prettier */
const globalCities = [
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

export function getGlobalCities() {
  return globalCities;
}
