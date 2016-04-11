angular.module("portfolio", [
  'ui.router',
  'oc.lazyLoad',
  'ngAnimate'
]).config(['$stateProvider', '$urlRouterProvider', '$ocLazyLoadProvider', '$locationProvider', function($stateProvider, $urlRouterProvider, $ocLazyLoadProvider, $locationProvider) {

  $ocLazyLoadProvider.config({
    debug:false,
    events:true,
  });

  $urlRouterProvider.otherwise('/portfolio')

  $stateProvider
    .state('portfolio', {
      url: '/portfolio',
      templateUrl: 'partials/main.html',
      controller: 'mainCtrl',
      resolve: {
        loadMyFiles:function($ocLazyLoad) {
          return $ocLazyLoad.load(
            {
              name: 'portfolio',
              files: [
                'scripts/controllers/main.js',
              ]
          })
        }
      }
    })
    .state('portfolio.biography',{
      templateUrl:'partials/biography.html'
    })
    .state('portfolio.projects',{
      templateUrl:'partials/projects.html'
    })
    .state('portfolio.contact',{
      templateUrl:'partials/contact.html'
    })


}]);
