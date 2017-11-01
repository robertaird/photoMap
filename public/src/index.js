const app = angular.module('instaMapped', ['ngMap', 'ngRoute'])
  .controller('MainCtrl', function ($scope, $route, $routeParams, $location) {
      $scope.$route = $route;
      $scope.$location = $location;
      $scope.$routeParams = $routeParams;
      $scope.googleMapsUrl = `https://maps.googleapis.com/maps/api/js?key=${window.GOOGLE_MAP_KEY}`;
      $scope.instagramUrl = `https://api.instagram.com/oauth/authorize/?client_id=${window.INSTAGRAM_ID}&redirect_uri=${window.REDIRECT_URI}&response_type=code`;
    })
  .config(($routeProvider, $locationProvider) => {
    $routeProvider
      .when('/', {
        templateUrl: './src/templates/login.html',
        controller: 'MainCtrl',
      }).when('/main', {
        templateUrl: './src/templates/app.html',
        controller: 'MainCtrl',
      });
    $locationProvider.html5Mode(true);
  });
