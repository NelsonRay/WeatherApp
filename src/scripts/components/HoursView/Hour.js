import React from 'react';
import {View, StyleSheet, Text, Image} from 'react-native';
import colors from '../../../constants/colors';
import getImgSrc from '../../helpers/getImgSrc';

const formatHour = hour => {
  var formattedHour;

  if (hour < 13) {
    if (hour == 0) {
      formattedHour = '12';
    } else {
      formattedHour = hour.toString();
    }
  } else {
    formattedHour = (hour - 12).toString();
  }

  const timeOfDay = hour < 12 ? 'AM' : 'PM';

  return formattedHour + timeOfDay;
};

function Hour({data: {dt, temp, weather}, addLeftMargin}) {
  const date = new Date(dt * 1000);
  const hour = formatHour(date.getHours());
  const icon = weather[0].icon;
  const temperature = Math.ceil(temp);

  return (
    <View style={[styles.container, addLeftMargin]}>
      <Text style={styles.hour}>{hour}</Text>
      <Image source={getImgSrc(icon)} style={styles.image} />
      <Text style={styles.temp}>{temperature}°</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 70,
    width: 60,
    justifyContent: 'center',
    alignItems: 'center',
  },
  hour: {fontSize: 16, fontWeight: '500', color: colors.medium},
  image: {flex: 1, resizeMode: 'contain'},
  temp: {fontSize: 16, fontWeight: '500', color: colors.medium},
});

export default Hour;
