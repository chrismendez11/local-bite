/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import { ref } from "vue";
import { useRestaurantsStore } from '../stores/restaurants.store'
import { useLocationStore } from '../stores/location.store'
import { storeToRefs } from "pinia";
import { getPlaceDetails } from "./place-details.api";
import { createPhotoMarker } from "./place-photos.api";

var service;
const arr = ref([])

export function initMap(radius) {
  return new Promise((resolve, reject) => {
    const useLocation = useLocationStore();
    const { location } = storeToRefs(useLocation);
    var pyrmont = new google.maps.LatLng(location.value.lat, location.value.lon);
    var request = {
      location: pyrmont,
      radius: radius ? radius : '500',
      type: ['restaurant'],
    };
    service = new google.maps.places.PlacesService(document.createElement('div'));

    service.nearbySearch(request, (results, status) => {
      if (status == google.maps.places.PlacesServiceStatus.OK) {
        const promises = results.map(async (place) => {
          const placeDetails = await getPlaceDetails(place.place_id);
          const photo = await createPhotoMarker(place);
          return {
            ...place,
            ...placeDetails,
            photoUrl: photo,
          };
        });

        Promise.all(promises)
          .then((places) => {
            arr.value = places;
            const useRestaurants = useRestaurantsStore();
            useRestaurants.setupRestaurants(arr.value);
            resolve(arr.value); // Resuelve la promesa con el array de lugares
          })
          .catch((error) => {
            reject(error); // Rechaza la promesa si hay un error
          });
      } else {
        reject(new Error(`Error en la búsqueda cercana: ${status}`));
      }
    });
  });
}
window.initMap = initMap