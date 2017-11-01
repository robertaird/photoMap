angular.module('instaMapped')
  .component('welcomeView', {
    bindings: {
      user: '<',
    },
    controller: function welcomeControl($http) {
      this.getUser = () => {
        $http.get(`http://localhost:8000/users?id=${this.user}`).then((result) => {
          console.log(result.data);
        });
      };
      this.getUser();
    },
    templateUrl: '/src/templates/welcome.html',
  });
