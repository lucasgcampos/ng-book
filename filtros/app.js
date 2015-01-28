angular.module('myApp', []).controller('MyController', function($scope) {
	$scope.exemplos = {
		uppercase: "uppercase",
		lowercase: "LOWERCASE",
		limitDecimal: 12.3456,
		currency: 123.698,
		date: new Date()

	};
});