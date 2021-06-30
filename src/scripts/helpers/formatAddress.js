export default formatAddress = address_components => {
  var city;
  var state;
  var country;

  address_components.forEach(component => {
    if (component.types.includes('locality')) {
      city = component.long_name;
    } else if (component.types.includes('administrative_area_level_1')) {
      state = component.short_name;
    } else if (component.types.includes('country')) {
      country = component.short_name;
    }
  });

  return country === 'US' ? city + ', ' + state : city + ', ' + country;
};
