// Restrict within the map viewport.
let center = new google.maps.LatLng(52.369358, 4.889258);
const request = {
  // required parameters
  fields: ["displayName", "location", "businessStatus"],
  locationRestriction: {
    center: center,
    radius: 500,
  },
  // optional parameters
  includedPrimaryTypes: ["restaurant"],
  maxResultCount: 5,
  rankPreference: SearchNearbyRankPreference.POPULARITY,
  language: "en-US",
  region: "us",
};
//@ts-ignore
const { places } = await Place.searchNearby(request);