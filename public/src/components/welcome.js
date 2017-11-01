angular.module('instaMapped')
  .component('welcomeView', {
    bindings: {
      user: '<',
    },
    controller: function welcomeControl($http) {
      this.profile = { username: 'hold please' };
      this.removeLink = 'http://photomapped.herokuapp.com/removeuser?id=';
      this.getUser = (user) => {
        $http.get(`http://photomapped.herokuapp.com/users?id=${user}`).then((result) => {
          this.profile = result.data;
        });
      };
      this.$onInit = () => {
        this.getUser(this.user);
        this.removeLink = `http://photomapped.herokuapp.com/removeuser?id=${this.user}`;
        // console.log(this.user, 'on init', this.removeLink);
      };
    },
    templateUrl: '/src/templates/welcome.html',
  });
