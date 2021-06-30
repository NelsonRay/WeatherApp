import React, {useEffect, useState} from 'react';
import {View, StyleSheet, ActivityIndicator} from 'react-native';
import CategoriesView from '../components/CategoriesView';
import useWeatherData from '../hooks/useWeatherData';
import DailyWeather from '../components/WeatherScreen/DailyWeather';
import Header from '../components/WeatherScreen/Header';
import HoursView from '../components/HoursView';
import PagerView from 'react-native-pager-view';
import useLocation from '../hooks/useLocation';
import routes from '../navigation/routes';
import colors from '../../constants/colors';

function WeatherScreen({route, navigation}) {
  const {location, getLocation} = useLocation(route.params);
  const {weather, loading, error, getWeather} = useWeatherData();
  const [fahrenheit, setFahrenheit] = useState(true);

  useEffect(() => {
    getLocation();
  }, [route.params]);

  useEffect(() => {
    if (location) {
      getWeather(
        location.coordinates.lon,
        location.coordinates.lat,
        fahrenheit,
      );
    }
  }, [location, fahrenheit]);

  const toggleUnits = () => setFahrenheit(!fahrenheit);

  return (
    <View style={styles.screen}>
      {!loading ? (
        <>
          <Header
            address={location.address}
            onPress={() => navigation.navigate(routes.SEARCH)}
            fahrenheit={fahrenheit}
            toggleUnits={toggleUnits}
          />
          <PagerView initialPage={0} style={styles.pagerView} showPageIndicator>
            {weather.daily.map((day, index) => (
              <View key={day.dt}>
                <DailyWeather data={day} index={index} />
                <CategoriesView data={day} />
                <HoursView day={day} hours={weather.hourly} />
                <View style={{height: 30}} />
              </View>
            ))}
          </PagerView>
        </>
      ) : (
        <ActivityIndicator
          animating={true}
          size="large"
          color={colors.medium}
          style={styles.indicator}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {flex: 1, justifyContent: 'center'},
  pagerView: {
    flex: 1,
    marginBottom: 15,
  },
  indicator: {alignSelf: 'center', opacity: 1},
});

export default WeatherScreen;
