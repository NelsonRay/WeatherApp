import React from 'react';
import {Text, StyleSheet} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import colors from '../../../constants/colors';

function Location({location, onPress}) {
  return (
    <TouchableOpacity onPress={() => onPress(location)}>
      <Text style={styles.text}>{location.address}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  text: {
    fontSize: 20,
    color: colors.medium,
    fontWeight: '500',
    marginBottom: 5,
  },
});

export default Location;
