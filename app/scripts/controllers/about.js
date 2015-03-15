'use strict';

/**
 * @ngdoc function
 * @name ngcartApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the ngcartApp
 */
angular.module('ngcartApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
