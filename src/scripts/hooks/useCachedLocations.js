import {useState} from 'react';
import {Cache} from 'react-native-cache';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default useCachedLocations = () => {
  const [locations, setLocations] = useState([]);

  const cache = new Cache({
    namespace: 'myapp',
    policy: {maxEntries: 5000},
    backend: AsyncStorage,
  });

  const getLocations = async () => {
    // await clearItems();
    const entries = await cache.getAll();

    const items = [];

    for (let entry in entries) {
      items.push({
        timestamp: Date.parse(entries[entry]['created']),
        value: JSON.parse(entries[entry]['value']),
      });
    }

    // sorts locations by timestamp
    items.sort((a, b) => a.timestamp < b.timestamp);

    // removes the timestamp property
    setLocations(items.map(item => item.value));
  };

  const addLocation = async (address, lon, lat) => {
    if (await locationExists(address)) return;

    const json = JSON.stringify({
      address,
      coordinates: {lon, lat},
    });

    await cache.set(address, json);
  };

  const locationExists = async address => {
    const value = await cache.peek(address);
    return value != undefined;
  };

  const clear = async () => {
    await cache.clearAll();
    setLocations([]);
  };

  return {locations, getLocations, addLocation, clear};
};
