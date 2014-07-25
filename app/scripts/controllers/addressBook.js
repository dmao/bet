'use strict';

/**
 * @ngdoc function
 * @name betApp.controller:AddressBookCtrl
 * @description
 * # AboutCtrl
 * Controller of the betApp
 */
angular.module('betApp')
    .controller('AddressBook', function ($scope) {
        $scope.awesomeThings = [
            'HTML5 Boilerplate',
            'AngularJS',
            'Karma'
        ];
    });