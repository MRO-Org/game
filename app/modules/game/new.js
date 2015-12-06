angular.module('app')
.controller('NewGameCtrl', function($scope) {
	$scope.game = {
      type : 'role'
    };
	 $scope.avatarData = [{
        id: "social:group",
        title: 'Role Play: no rules, only people',
        value: 'role'
      },{
        id: "mdi:map",
        title: 'Tabletop: Play with virtual table',
        value: 'tabletop'
      },{
        id: "mdi:dice",
        title: 'The D20 System: Role Play with virtual table and D20',
        value: 'd20'
   	 },{
        id: "mdi:sword",
        title: 'AD&D like',
        value: 'community-adnd_clone'
      }];
    $scope.radioData = [
      { label: '1', value: 1 },
      { label: '2', value: 2 },
      { label: '3', value: '3', isDisabled: true },
      { label: '4', value: '4' }
    ];

});
