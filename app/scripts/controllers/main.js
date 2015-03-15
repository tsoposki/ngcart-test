'use strict';

/**
 * @ngdoc function
 * @name ngcartApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the ngcartApp
 */
angular.module('ngcartApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
