'use strict';

/**
 * @ngdoc function
 * @name betApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the betApp
 */
angular.module('betApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
