import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import colors from '../../../constants/colors';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import ToggleUnits from './ToggleUnits';

function Header({address, onPress, fahrenheit, toggleUnits}) {
  return (
    <SafeAreaView style={styles.container}>
      <ToggleUnits fahrenheit={fahrenheit} toggleUnits={toggleUnits} />
      <Text style={styles.location}>{address}</Text>
      <View style={styles.icon}>
        <TouchableOpacity onPress={onPress}>
          <MaterialCommunityIcons
            name="magnify"
            size={30}
            color={colors.dark}
          />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: 20,
    marginBottom: 10,
  },
  location: {
    fontSize: 22,
    fontWeight: '600',
    color: colors.dark,
    alignSelf: 'center',
  },
  icon: {width: 60, alignItems: 'flex-end'},
});

export default Header;
