angular.module('app.modules.profile', [])
.controller('ProfilCtrl', function($scope) {
	// CONST
	$scope.wikiUrl = 'http://github.com/MRO-Org/contribute/';
	$scope.langs = [
		{ value: 'fr', 	name: 'Français' },
		{ value: 'en', 	name: 'English' }
	];
	// ACTIONS
	$scope.save = function() {
		alert('TODO!');
	};
	// INIT
	$scope.user = {
		name: 'mysusername',
		email: 'mysusername@gmail.com',
		lang: 'fr'
	};
});
