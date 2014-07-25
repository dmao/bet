'use strict';

/**
 * @ngdoc function
 * @name betApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the betApp
 */
angular.module('betApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
