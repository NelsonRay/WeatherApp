import React, {useState, useEffect} from 'react';
import {View, StyleSheet} from 'react-native';
import Header from '../components/SearchScreen/Header';
import SearchInput from '../components/SearchScreen/SearchInput';
import routes from '../navigation/routes';
import Geocoder from 'react-native-geocoding';
import formatAddress from '../helpers/formatAddress';
import useCachedLocations from '../hooks/useCachedLocations';
import LocationsView from '../components/LocationsView.js/LocationsView';

function SearchScreen({navigation}) {
  const {locations, getLocations, addLocation, clear} = useCachedLocations();
  const [error, setError] = useState(false);

  useEffect(getLocations, []);

  const getCoordinates = async text => {
    if (text.trim() === '') return setError(true);

    Geocoder.init('AIzaSyDw1drYWQzuN4GImIkTDeRvHpm1EICKQXs');
    const response = await Geocoder.from(text);
    if (response.status === 'OK') {
      const coordinates = {
        lon: response.results[0].geometry.location.lng,
        lat: response.results[0].geometry.location.lat,
      };
      const address = formatAddress(response.results[0].address_components);

      addLocation(address, coordinates.lon, coordinates.lat);

      navToWeatherScreen({address, coordinates});
    } else {
      setError(true);
    }
  };

  const navToWeatherScreen = location =>
    navigation.navigate(routes.HOME, location);

  return (
    <View style={styles.screen}>
      <Header onPress={() => navigation.goBack()} />
      <SearchInput submit={getCoordinates} />
      {locations && (
        <LocationsView
          locations={locations}
          onPress={navToWeatherScreen}
          clear={clear}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {flex: 1},
});

export default SearchScreen;
