import {useState} from 'react';
import RNLocation from 'react-native-location';
import useCachedLocations from './useCachedLocations';
import Geocoder from 'react-native-geocoding';

export default useLocation = loc => {
  const [location, setLocation] = useState();
  const {addLocation, getLocations} = useCachedLocations();

  const getLocation = async () => {
    // if a location is passed, then return
    if (loc) {
      setLocation(loc);
      return;
    }

    // else get user's current location

    await RNLocation.configure({
      allowsBackgroundLocationUpdates: true,
      distanceFilter: 1000,
    });
    await RNLocation.requestPermission({ios: 'whenInUse'});
    RNLocation.subscribeToLocationUpdates(async locations => {
      // get locations from array and its coordinates
      const newLocation = locations[locations.length - 1];
      const coordinates = {
        lon: newLocation.longitude,
        lat: newLocation.latitude,
      };

      // get the address from the coordinates
      Geocoder.init('AIzaSyDw1drYWQzuN4GImIkTDeRvHpm1EICKQXs');
      const address_components = (
        await Geocoder.from({
          longitude: coordinates.lon,
          latitude: coordinates.lat,
        })
      ).results[0].address_components;
      const address = formatAddress(address_components);

      // cached a location object with address and coordinate values
      await getLocations();
      await addLocation(address, coordinates.lon, coordinates.lat);

      setLocation({address, coordinates});
    });
  };

  return {location, getLocation};
};
