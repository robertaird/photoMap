angular.module('instaMapped')
  .component('mapView', {
    controller: function mapControl() {
      this.googleMapsUrl = `https://maps.googleapis.com/maps/api/js?key=${window.GOOGLE_MAP_KEY}`;
    },
    templateUrl: '/src/templates/map.html',
  });
