'use strict';

/**
 * @ngdoc function
 * @name betApp.controller:AddressBookCtrl
 * @description
 * # AddressBookCtrl
 * Controller of the betApp
 */
angular.module('betApp')
    .controller('AddressBookCtrl', function ($scope,$location) {


        $scope.contacts  = [
            {id: 0, firstName:'Stephen',lastName: 'Gaugin',title: 'Head of office', email:'test@bet.com', address: '123 Allabet street', city: 'London',zipCode: '1090', country: 'France', smallImg: 'http://lorempixel.com/75/75/people/1/',largeImg: 'http://lorempixel.com/125/125/people/1/'},
            {id: 1, firstName:'Emile',lastName: 'Van Gogh',title: 'Head of office', email:'test@bet.com', address: '123 Allabet street', city: 'London',zipCode: '1090', country: 'France', smallImg: 'http://lorempixel.com/75/75/people/2/',largeImg: 'http://lorempixel.com/125/125/people/2/'},
            {id: 2, firstName:'Etienne',lastName: 'Renoir',title: 'Head of office', email:'test@bet.com', address: '123 Allabet street', city: 'London',zipCode: '1090', country: 'France', smallImg: 'http://lorempixel.com/75/75/people/3/',largeImg: 'http://lorempixel.com/125/125/people/3/'},
            {id: 3, firstName:'Jules',lastName: 'Picasso',title: 'Head of office', email:'test@bet.com', address: '123 Allabet street', city: 'London',zipCode: '1090', country: 'France', smallImg: 'http://lorempixel.com/75/75/people/4/',largeImg: 'http://lorempixel.com/125/125/people/4/'},
            {id: 4, firstName:'Jérome',lastName: 'Bosch',title: 'Head of office', email:'test@bet.com', address: '123 Allabet street', city: 'London',zipCode: '1090', country: 'France', smallImg: 'http://lorempixel.com/75/75/people/5/',largeImg: 'http://lorempixel.com/125/125/people/5/'}
        ];

/*        $scope.$watch($scope.contacts, function() {
            console.log('hey, myVar has changed!');
        });*/



        $scope.deleteContact = function(id) {
            //search contact with given id and delete it
            for(var i in $scope.contacts) {
                if($scope.contacts[i].id === id) {
                    $scope.contacts.splice(i,1);
                }
            }
        };

        $scope.addContact = function() {
            var nextId = $scope.contacts.length + 1;
            $scope.newContact.id = nextId;
            $scope.contacts.push($scope.newContact);
            $location.path('/address-book');
            $scope.$apply();
            // the scope is updated, but not the view
            console.log($scope.contacts);
        };
    });