angular.module('instaMapped')
  .component('login', {
    controller: function loginControl() {
      this.instagramUrl = `https://api.instagram.com/oauth/authorize/?client_id=${window.INSTAGRAM_ID}&redirect_uri={${window.REDIRECT_URI}&response_type=code`;
    },
    templateUrl: '/src/templates/login.html',
  });
