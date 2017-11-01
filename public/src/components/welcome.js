angular.module('instaMapped')
  .component('welcomeView', {
    bindings: {
      user: '<',
    },
    controller: function welcomeControl() {

    },
    templateUrl: '/src/templates/welcome.html',
  });
