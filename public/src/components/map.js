angular.module('instaMapped')
  .component('mapView', {
    bindings: {
      user: '<',
    },
    controller: function mapControl($http) {
      this.photos = [];
      this.testUrl = 'https://scontent.cdninstagram.com/t51.2885-15/s150x150/e35/c107.0.866.866/21689161_493570764361728_6028430128323756032_n.jpg';
      this.testIcon = {
      url:'https://scontent.cdninstagram.com/t51.2885-15/s150x150/e35/c107.0.866.866/21689161_493570764361728_6028430128323756032_n.jpg',
      scaledSize:[50,50],
      origin: [0,0],
      anchor: [25,25] 
      }
      this.getPhotos = (user) => {
        $http.get(`http://localhost:8000/photos?id=${user}`).then((result) => {
          this.photos = result.data;
          console.log(this.photos);
        });
      };
      this.$onInit = () => {
        this.getPhotos(this.user);
      };
      this.googleMapsUrl = `https://maps.googleapis.com/maps/api/js?key=${window.GOOGLE_MAP_KEY}`;
    },
    templateUrl: '/src/templates/map.html',
  });
