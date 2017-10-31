angular.module('instaMapped')
  .component('app', {
    controller: function appControl() {
      this.googleMapsUrl = `https://maps.googleapis.com/maps/api/js?key=${window.GOOGLE_MAP_KEY}`;
      this.instagramUrl = `https://api.instagram.com/oauth/authorize/?client_id=${window.INSTAGRAM_ID}&redirect_uri=${window.REDIRECT_URI}&response_type=code`;
    },
    templateUrl: '/src/templates/login.html',
  });
