angular.module('instaMapped')
  .component('app', {
    controller: function appControl() {
      this.googleMapsUrl = `https://maps.googleapis.com/maps/api/js?key=${window.GOOGLE_MAP_KEY}`;
      console.log(this.googleMapsUrl);
    },
    templateUrl: '/src/templates/app.html',
  });
