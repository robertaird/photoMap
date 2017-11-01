angular.module('instaMapped')
  .component('mapView', {
    // require: '^ngModel',
    bindings: {
      user: '<',
      // photos: '<',
      // ngChange: '=',
      // ngModel: '=',
    },
    controller: function mapControl($http) {
      this.photos = [{ location: { latitude: 43, longitude: 34 } },
        { location: { latitude: 3, longitude: 37 } },
        { location: { latitude: -43, longitude: -34 } }];
      this.thumbs = [];
      this.testUrl = 'https://scontent.cdninstagram.com/t51.2885-15/s150x150/e35/c107.0.866.866/21689161_493570764361728_6028430128323756032_n.jpg';
      this.testIcon = {
        url: 'https://scontent.cdninstagram.com/t51.2885-15/s150x150/e35/c107.0.866.866/21689161_493570764361728_6028430128323756032_n.jpg',
        scaledSize: [50, 50],
        origin: [0, 0],
        anchor: [25, 25],
      };

      this.showInfo = (event, id) => {
        // console.log($(event.target).attr("data-id"));
        console.log(id);
        $http.post(`http://localhost:8000/photos?id=${id}`).then((result) => {
          console.log(result);
        });
      };

      this.generateThumbnails = (photos) => {
        photos.forEach((photo) => {
          // url://photo.image.thumbnail,
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
          this.generateThumbnails(photos);
          this.photos = photos;
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
