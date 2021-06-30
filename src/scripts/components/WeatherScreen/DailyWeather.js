import React from 'react';
import {View, StyleSheet, Image, Text} from 'react-native';
import colors from '../../../constants/colors';
import getImgSrc from '../../helpers/getImgSrc';

const capitalizeDescription = description => {
  const words = description.split(' ');

  for (let i = 0; i < words.length; i++) {
    words[i] = words[i][0].toUpperCase() + words[i].substr(1);
  }

  return words.join(' ');
};

const weekdays = [
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
];

function DailyWeather({
  data: {
    dt,
    temp: {day},
    weather,
  },
  index,
}) {
  const date = new Date(dt * 1000);
  const weekday =
    index === 0 ? 'Today' : index === 1 ? 'Tomorrow' : weekdays[date.getDay()];
  const temperature = Math.ceil(day);
  const icon = weather[0].icon;
  const description = capitalizeDescription(weather[0].description);

  return (
    <View style={styles.container}>
      <Text style={styles.weekday}>{weekday}</Text>
      <Image source={getImgSrc(icon)} style={styles.image} />
      <Text style={styles.description}>{description}</Text>
      <Text style={styles.temp}>{temperature}°</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    alignItems: 'center',
    marginBottom: 30,
  },
  image: {
    flex: 1,
    width: '85%',
    resizeMode: 'contain',
  },
  description: {fontSize: 22, color: colors.medium, fontWeight: '500'},
  temp: {fontSize: 80, color: colors.dark, fontWeight: '600'},
  weekday: {
    fontSize: 20,
    color: colors.medium,
    fontWeight: '500',
    alignSelf: 'flex-start',
    marginLeft: 20,
  },
});

export default DailyWeather;
