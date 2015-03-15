'use strict';

/**
 * @ngdoc function
 * @name ngcartApp.controller:MyctrlCtrl
 * @description
 * # MyctrlCtrl
 * Controller of the ngcartApp
 */
angular.module('ngcartApp')
  .controller ('myCtrl', ['$scope', '$http', 'ngCart', function($scope, $http, ngCart) {
    ngCart.setTaxRate(7.5);
    ngCart.setShipping(2.99);    
}]);