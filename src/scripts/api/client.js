import {create} from 'apisauce';

const apiClient = (lon, lat, fahrenheit) => {
  const units = fahrenheit ? 'units=imperial' : 'units=metric';
  return create({
    baseURL:
      'https://api.openweathermap.org/data/2.5/onecall?lat=' +
      lat +
      '&lon=' +
      lon +
      '&exclude=current,minutely,alert&' +
      units +
      '&appid=eb2d410f117c2387bc0a47ca6b4e4202',
  });
};

export default apiClient;
