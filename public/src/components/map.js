angular.module('instaMapped')
  .component('mapView', {
    bindings: {
      user: '<',
    },
    controller: function mapControl($http) {
      this.$onInit = () => {
        console.log(this.user)
      }
      this.googleMapsUrl = `https://maps.googleapis.com/maps/api/js?key=${window.GOOGLE_MAP_KEY}`;
    },
    templateUrl: '/src/templates/map.html',
  });
