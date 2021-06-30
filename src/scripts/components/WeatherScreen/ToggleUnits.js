import React from 'react';
import {View, StyleSheet, Text, TouchableWithoutFeedback} from 'react-native';
import colors from '../../../constants/colors';

function ToggleUnits({fahrenheit, toggleUnits}) {
  return (
    <TouchableWithoutFeedback onPress={toggleUnits}>
      <View style={styles.container}>
        <View
          style={[
            styles.fContainer,
            {backgroundColor: fahrenheit ? colors.yellow : colors.light},
          ]}>
          <Text
            style={[
              styles.text,
              {color: !fahrenheit ? colors.medium : colors.white},
            ]}>
            F°
          </Text>
        </View>

        <View
          style={[
            styles.cContainer,
            {backgroundColor: !fahrenheit ? colors.yellow : colors.light},
          ]}>
          <Text
            style={[
              styles.text,
              {color: fahrenheit ? colors.medium : colors.white},
            ]}>
            C°
          </Text>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 60,
    height: 25,
    flexDirection: 'row',
    borderRadius: 15,
    overflow: 'hidden',
  },
  fContainer: {
    flex: 1,
    backgroundColor: colors.light,
    justifyContent: 'center',
    alignItems: 'center',
  },
  cContainer: {
    flex: 1,
    backgroundColor: colors.light,
    justifyContent: 'center',
    alignItems: 'center',
  },
  divider: {width: 0.5, backgroundColor: colors.medium},
  text: {fontSize: 14, fontWeight: '500'},
});

export default ToggleUnits;
