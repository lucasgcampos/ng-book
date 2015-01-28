angular.module('myApp', []).controller('MyController', function($scope) {
	$scope.exemplos = {
		uppercase: "uppercase",
		lowercase: "LOWERCASE",
		limitDecimal: 12.3456,
		currency: 123.698,
		date: new Date(),
		string: "string",
		array: [1, 2, 3, 4, 5, 6, 7 , 8, 9, 0]
	};
});