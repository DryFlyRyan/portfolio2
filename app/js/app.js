angular.module("portfolio", ['ui.router'])
.config(function($stateProvider, $urlRouterProvider, $locationProvider) {
  console.log("Angular's working");

  $urlRouterProvider.otherwise('/');

  $stateProvider.state('namecard', {
    templateUrl: 'partials/bannercard.html',
    controller: 'bannercardController',
    url:'/'
  })


  $locationProvider.html5Mode(true);
});
