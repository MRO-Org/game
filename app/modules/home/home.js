angular.module('app')
.controller('HomeCtrl', function($scope) {
  $scope.chatUrl = '#/chat';
  $scope.profilUrl = '#/profile';
  $scope.gameNewUrl = '#/game/new';
  $scope.gameSearchUrl = '#/game/search';
});
