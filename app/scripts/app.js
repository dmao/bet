'use strict';

/**
 * @ngdoc overview
 * @name betApp
 * @description
 * # betApp
 *
 * Main module of the application.
 */
angular
  .module('betApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
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
      .when('/address-book', {
        templateUrl: 'views/address-book.html',
        controller: 'AddressBookCtrl'
      })
      .when('/new', {
        templateUrl: 'views/address-Book-new.html',
        controller: 'AddressBookCtrl'
      })
      .when('/edit:id', {
        templateUrl: 'views/address-Book-edit.html',
        controller: 'AddressBookCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });

