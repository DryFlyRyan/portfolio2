angular.module("portfolio", [
  'ui.router',
  'oc.lazyLoad',
  'ngAnimate',
  'ui.bootstrap',
  'angularModalService'
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
        loadMyDirectives:function($ocLazyLoad) {
          return $ocLazyLoad.load(
            {
              name: 'portfolio',
              files: [
                'scripts/controllers/main.js'
              ]
            })
            $ocLazyLoad.load(
            {
              name: 'tooltip',
              files: [
                'scripts/directives/tooltip.js'
              ]
            })
        }
      }
    })
    .state('portfolio.biography',{
      templateUrl:'partials/biography.html'
    })
    .state('portfolio.projects',{
      templateUrl:'partials/projects.html',
      controller: 'projectCtrl',
      resolve: {
        loadMyFiles:function($ocLazyLoad) {
          return $ocLazyLoad.load(
            {
              name: 'portfolio',
              files: [
                'scripts/controllers/modal.js',
                'scripts/controllers/projects.js'

              ]
            }
          )
        }
      }
    })
    .state('portfolio.contact',{
      templateUrl:'partials/contact.html'
    })


}]);
