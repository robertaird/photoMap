angular.module('instaMapped')
  .service('Search', function Search($http) {
    this.getPhotos = photos => $http.get();
    this.getUser = user => $http.get();
  });
