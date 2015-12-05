
// Declare app level module which depends on filters, and services
angular.module('app', [
  'ngResource',
  'ngRoute',
  'templates',
  'ngMaterial',
  'material.core',

  'app.version',
  'app.modules.home',
  'app.modules.game',
  'app.modules.character',
  'app.modules.profile',
,]);

angular.module('app')
.config(function(
  $routeProvider,
  $locationProvider) {
  // Define url route to each page
  $routeProvider

    .when('/',      {templateUrl: 'app/modules/home/home.html'})
    .when('/about', {templateUrl: 'app/modules/home/about.html'})
    .when('/profile', {templateUrl: 'app/modules/profile/profile.html'})
    .when('/game', {templateUrl: 'app/modules/game/game.html'})
    .when('/sheet', {templateUrl: 'app/modules/character/sheet.html'})

    // Catch all
    .otherwise({redirectTo: '/'});

  // Without server side support html5 must be disabled.
  $locationProvider.html5Mode(false);
});
