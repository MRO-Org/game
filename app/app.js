
// Declare app level module which depends on filters, and services
angular.module('app', [
  'ngResource',
  'ngRoute',
  'templates',
  'ngMaterial',
  'material.core',

  'app.version',
  'app.directives',
  'app.modules.home',
  'app.modules.game',
,]);

angular.module('app')
.config(function(
  $routeProvider,
  $locationProvider) {

  $routeProvider

    .when('/',      {templateUrl: 'app/modules/home/home.html'})
    .when('/about', {templateUrl: 'app/modules/home/about.html'})
    .when('/media', {templateUrl: 'app/modules/home/media.html'})
    .when('/profile', {templateUrl: 'app/modules/profile/profile.html'})
    .when('/game', {templateUrl: 'app/modules/game/game.html'})

    // Catch all
    .otherwise({redirectTo: '/'});

  // Without server side support html5 must be disabled.
  $locationProvider.html5Mode(false);
});
