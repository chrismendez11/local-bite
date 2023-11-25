/* eslint-disable no-undef */
export function getPlaceDetails(placeId) {
  return new Promise((resolve, reject) => {
    var service
    var request = {
      placeId,
      fields: ['opening_hours', 'utc_offset_minutes', 'formatted_phone_number']
    }
  
    if (!placeId) {
      reject('placeId is missing')
      return
    }
  
    service = new google.maps.places.PlacesService(document.createElement('div'))
    service.getDetails(request, callback)
  
    function callback(place, status) {
      if (status == google.maps.places.PlacesServiceStatus.OK) {
        resolve(place)
      } else {
        reject('Failed')
      }
    }
  })
}
