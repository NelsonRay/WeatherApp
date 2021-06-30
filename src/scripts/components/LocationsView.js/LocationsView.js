import React from 'react';
import {
  View,
  StyleSheet,
  ScrollView,
  Text,
  TouchableOpacity,
} from 'react-native';
import colors from '../../../constants/colors';
import Location from './Location';

function LocationsView({locations, onPress, clear}) {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.text}>Locations</Text>
        <TouchableOpacity onPress={clear}>
          <Text style={styles.text}>Clear</Text>
        </TouchableOpacity>
      </View>
      {locations.length !== 0 ? (
        <ScrollView showsVerticalScrollIndicator={false} style={styles.view}>
          {locations.map(location => (
            <Location
              key={location.address}
              location={location}
              onPress={onPress}
            />
          ))}
        </ScrollView>
      ) : (
        <Text style={styles.noLocation}>No Locations</Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '80%',
    alignSelf: 'center',
  },

  header: {flexDirection: 'row', justifyContent: 'space-between'},
  noLocation: {
    fontSize: 16,
    color: colors.medium,
    fontWeight: '500',
    alignSelf: 'center',
    marginTop: 15,
  },
  text: {fontSize: 16, color: colors.dark, fontWeight: '500', marginBottom: 10},

  view: {flex: 1},
});

export default LocationsView;
