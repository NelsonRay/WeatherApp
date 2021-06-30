import React from 'react';
import {
  View,
  StyleSheet,
  SafeAreaView,
  Text,
  TouchableOpacity,
} from 'react-native';
import colors from '../../../constants/colors';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

function Header({onPress}) {
  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity onPress={onPress}>
        <MaterialCommunityIcons
          name="chevron-left"
          size={30}
          color={colors.dark}
        />
      </TouchableOpacity>

      <Text style={styles.text}>Search</Text>
      <MaterialCommunityIcons
        name="chevron-left"
        size={30}
        color={colors.dark}
        style={{color: colors.bgColor}}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 20,
    marginBottom: 10,
  },

  text: {
    fontSize: 22,
    fontWeight: '600',
    color: colors.dark,
    alignSelf: 'center',
  },
});

export default Header;
