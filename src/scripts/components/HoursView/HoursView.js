import React from 'react';
import {View, StyleSheet, ScrollView} from 'react-native';
import Hour from './Hour';

function HoursView({hours, day: {dt}}) {
  const date = new Date(dt * 1000);
  const hoursForDate = hours.filter(hour => {
    const dateOfHour = new Date(hour.dt * 1000);
    return (
      date.getDate() === dateOfHour.getDate() &&
      date.getMonth() === dateOfHour.getMonth() &&
      date.getFullYear() === dateOfHour.getFullYear()
    );
  });

  if (hoursForDate.length === 0) {
    return null;
  }

  return (
    <View style={styles.container}>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <View style={styles.view}>
          {hoursForDate.map((hour, index) => (
            <Hour
              key={hour.dt}
              data={hour}
              addLeftMargin={{marginLeft: index === 0 ? 20 : 0}}
            />
          ))}
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {height: 70, width: '100%'},
  view: {flexDirection: 'row', flex: 1},
});

export default HoursView;
