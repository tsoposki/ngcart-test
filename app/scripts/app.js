'use strict';

/**
 * @ngdoc overview
 * @name ngcartApp
 * @description
 * # ngcartApp
 *
 * Main module of the application.
 */
angular
  .module('ngcartApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'ngCart'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
        .when('/cart', {
        templateUrl: 'views/cart.html',
        controller: 'myCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
