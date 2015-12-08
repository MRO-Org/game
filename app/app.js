
// Declare app level module which depends on filters, and services
angular.module('app', [
  'ngResource',
  'ngRoute',
  'templates',
  'ngMaterial',
  'material.core',
  'md.data.table',

  'app.version',
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
    .when('/game/search', {templateUrl: 'app/modules/game/search.html'})
    .when('/game/new',    {templateUrl: 'app/modules/game/new.html'})
    .when('/game/:id',        {templateUrl: 'app/modules/game/game.html'})
    .when('/sheet', {templateUrl: 'app/modules/character/sheet.html'})
    .when('/chat', {templateUrl: 'app/modules/chat/chat.html'})

    // Catch all
    .otherwise({redirectTo: '/'});

  // Without server side support html5 must be disabled.
  $locationProvider.html5Mode(false);
})

.config(['$mdIconProvider', function($mdIconProvider) {
    $mdIconProvider
                .iconSet('action', 'img/icons/sets/action-icons.svg', 24)
                .iconSet('alert', 'img/icons/sets/alert-icons.svg', 24)
                .iconSet('av', 'img/icons/sets/av-icons.svg', 24)
                .iconSet('communication', 'img/icons/sets/communication-icons.svg', 24)
                .iconSet('content', 'img/icons/sets/content-icons.svg', 24)
                .iconSet('device', 'img/icons/sets/device-icons.svg', 24)
                .iconSet('editor', 'img/icons/sets/editor-icons.svg', 24)
                .iconSet('file', 'img/icons/sets/file-icons.svg', 24)
                .iconSet('hardware', 'img/icons/sets/hardware-icons.svg', 24)
                .iconSet('icons', 'img/icons/sets/icons-icons.svg', 24)
                .iconSet('image', 'img/icons/sets/image-icons.svg', 24)
                .iconSet('maps', 'img/icons/sets/maps-icons.svg', 24)
                .iconSet('navigation', 'img/icons/sets/navigation-icons.svg', 24)
                .iconSet('notification', 'img/icons/sets/notification-icons.svg', 24)
                .iconSet('social', 'img/icons/sets/social-icons.svg', 24)
                .iconSet('toggle', 'img/icons/sets/toggle-icons.svg', 24)
                .iconSet('mdi', 'img/icons/sets/mdi-icons.svg', 24)
}]);

angular.module('app')
.controller('NavCtrl', function($scope, $mdSidenav, $localStorage,
    $sessionStorage) {
  // ACTION
  $scope.openLeftMenu = function() {
    $mdSidenav('left').toggle();
  };
  $scope.closeLeftMenu = function() {
    $mdSidenav('left').toggle();
  };
});
