angular.module('instaMapped')
  .component('mapView', {
    bindings: {
      user: '<',
    },
    controller: function mapControl($http) {
      this.googleMapsUrl = `https://maps.googleapis.com/maps/api/js?key=${window.GOOGLE_MAP_KEY}`;
      this.photos = [{ location: { latitude: 43, longitude: 34 } },
        { location: { latitude: 3, longitude: 37 } },
        { location: { latitude: -43, longitude: -34 } }];

      this.showInfo = (event, id) => {
        console.log(event, id);
        // $http.post(`http://localhost:8000/photos?id=${id}`).then((result) => {
        //   console.log(result);
        // });
      };

      this.generateThumbnails = (photos) => {
        photos.forEach((photo) => {
          photo.thumbnail = {
            url: photo.images.thumbnail,
            scaledSize: [50, 50],
            origin: [0, 0],
            anchor: [25, 25],
          };
        });
      };

      this.getPhotos = (user) => {
        $http.get(`http://localhost:8000/photos?id=${user}`).then((result) => {
          const { photos } = result.data;
          if (photos.length > 0) {
            this.generateThumbnails(photos);
            this.photos = photos;
          }
        });
      };

      this.$onInit = () => {
        this.getPhotos(this.user);
      };
    },
    templateUrl: '/src/templates/map.html',
  });
