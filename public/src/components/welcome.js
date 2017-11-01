angular.module('instaMapped')
  .component('welcomeView', {
    bindings: {
      user: '<',
    },
    controller: function welcomeControl($http) {
      this.profile = { username: 'hold please' };
      this.getUser = (user) => {
        $http.get(`http://localhost:8000/users?id=${user}`).then((result) => {
          this.profile = result.data;
        });
      };
      this.$onInit = () => {
        this.getUser(this.user);
      };
    },
    templateUrl: '/src/templates/welcome.html',
  });
