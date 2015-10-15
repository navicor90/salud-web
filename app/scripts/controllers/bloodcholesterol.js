'use strict';

/**
 * @ngdoc function
 * @name saludWebApp.controller:BloodcholesterolCtrl
 * @description
 * # BloodcholesterolCtrl
 * Controller of the saludWebApp
 */
angular.module('saludWebApp')
  .controller(
    "BloodcholesterolCtrl",
    function (
        $scope,
        $cookies,
        $location,
        $rootScope) {

        if(!$cookies.get('Token')){                                        
            $location.path('/login');                                           
            }
        }
    );
  