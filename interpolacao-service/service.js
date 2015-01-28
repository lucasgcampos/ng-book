angular.module('emailParser', [])

	.config(['$interpolateProvider', function($interpolateProvider) {
		$interpolateProvider.startSymbol('__');
		$interpolateProvider.endSymbol('__');
	}])

	.factory('EmailParser', ['$interpolate', function($interpolate) {
		// a service to handle parsing
		return {
			parse: function(text, context) {
				var template = $interpolate(text);
				return template(context);
			}
		}
	}]);