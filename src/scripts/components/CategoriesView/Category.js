import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import colors from '../../../constants/colors';

function Category({title, value, addLeftMargin}) {
  return (
    <View style={[styles.container, addLeftMargin]}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.value}>{value}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 130,
    height: 80,
    alignContent: 'space-between',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    flexDirection: 'column',
    backgroundColor: colors.white,
    shadowColor: colors.medium,
    shadowOffset: {width: 5, height: 5},
    shadowOpacity: 0.5,
    shadowRadius: 5,
    elevation: 2,
    paddingVertical: 15,
    paddingHorizontal: 10,
    borderRadius: 15,
    marginRight: 15,
    marginLeft: 0,
  },
  title: {color: colors.medium, fontSize: 18, fontWeight: '600'},
  value: {color: colors.dark, fontSize: 18, fontWeight: '500'},
  view: {
    flex: 1,
  },
});

export default Category;
