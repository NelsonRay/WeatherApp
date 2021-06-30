import React, {useState} from 'react';
import {View, StyleSheet, TextInput} from 'react-native';
import colors from '../../../constants/colors';

function SearchInput({submit}) {
  const [text, setText] = useState();

  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Search a location..."
        value={text}
        onChangeText={setText}
        style={styles.input}
        autoCapitalize="words"
        autoFocus
        textAlign="center"
        onSubmitEditing={() => submit(text)}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginVertical: 20,
    height: 50,
    width: '80%',
    borderRadius: 15,
    alignSelf: 'center',
    justifyContent: 'center',
    backgroundColor: colors.light,
    shadowColor: colors.medium,
    shadowOffset: {height: 2, width: 1},
    shadowOpacity: 0.3,
    shadowRadius: 0,
  },
  input: {fontSize: 22, color: colors.medium, fontWeight: '500'},
});

export default SearchInput;
