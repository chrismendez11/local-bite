/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
export function createPhotoMarker(place) {
    var photo = place.photos && place.photos[0];
    if (!photo) {
      return;
    }

    return photo.getUrl({maxWidth: photo.height, maxHeight: photo.height})
}
// window.createPhotoMarker = createPhotoMarker