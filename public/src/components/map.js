angular.module('instaMapped')
  .component('mapView', {
    bindings: {
      user: '<',
    },
    controller: function mapControl($http) {
      this.photos = [];
      this.getPhotos = (user) => {
        $http.get(`http://localhost:8000/photos?id=${user}`).then((result) => {
          this.photos = result.data;
        });
      };
      this.$onInit = () => {
        this.getPhotos(this.user);
      };
      this.googleMapsUrl = `https://maps.googleapis.com/maps/api/js?key=${window.GOOGLE_MAP_KEY}`;
    },
    templateUrl: '/src/templates/map.html',
  });
