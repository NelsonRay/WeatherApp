import React from 'react';
import {View, StyleSheet, ScrollView} from 'react-native';
import Category from './Category';

const getWindDirection = deg => {
  if (deg <= 25) {
    return 'N';
  } else if (deg > 25 && deg <= 70) {
    return 'NE';
  } else if (deg > 70 && deg <= 115) {
    return 'E';
  } else if (deg > 115 && deg <= 160) {
    return 'SE';
  } else if (deg > 160 && deg <= 205) {
    return 'S';
  } else if (deg > 205 && deg <= 250) {
    return 'SW';
  } else if (deg > 250 && deg <= 295) {
    return 'W';
  } else if (deg > 295 && deg <= 340) {
    return 'NW';
  } else {
    return 'N';
  }
};

function CategoriesView({
  data: {
    feels_like: {day: feelslike},
    temp: {min, max},
    wind_speed,
    wind_deg,
    humidity,
    clouds,
    uvi,
    pop,
  },
}) {
  const categories = [
    {title: 'Feels Like', value: Math.ceil(feelslike).toString() + '°'},
    {title: 'Min Temp', value: Math.ceil(min).toString() + '°'},
    {title: 'Max Temp', value: Math.ceil(max).toString() + '°'},
    {
      title: 'Wind',
      value: getWindDirection(wind_deg) + ' ' + Math.ceil(wind_speed) + ' MPH',
    },
    {title: 'Humidity', value: humidity.toString() + '%'},
    {title: 'Clouds', value: clouds.toString() + '%'},
    {title: 'UV Index', value: uvi.toString()},
    {title: 'Rain', value: (pop * 100).toString() + '%'},
  ];

  return (
    <View style={styles.container}>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <View style={styles.view}>
          {categories.map((category, index) => (
            <Category
              key={category.title}
              title={category.title}
              value={category.value}
              addLeftMargin={{marginLeft: index === 0 ? 20 : 0}}
            />
          ))}
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {height: 100, width: '100%'},
  view: {flexDirection: 'row'},
});

export default CategoriesView;
