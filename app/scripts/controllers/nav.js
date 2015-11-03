'use strict';

/**
 * @ngdoc function
 * @name saludWebApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the saludWebApp
 */
angular.module('saludWebApp')
.controller('NavCtrl', function ($scope,Auth,$rootScope,Notifications , global, MyProfile) {


  // Evento informante del estado de logueo del usuario. 
  // (ver archivo services/authorization.js)
  $rootScope.$on('isLoggedEvent', function(event, args) {
    
    // El usuario está logueado
    if (args[0]){

      if (!$rootScope.first_name || $rootScope == undefined){
          MyProfile.get({},function(response){
            $rootScope.first_name = response.resource.first_name;
            $rootScope.last_name = response.resource.last_name;
            $scope.user_name=$rootScope.first_name + ' ' + $rootScope.last_name;
          });
      }else{
            $scope.user_name=$rootScope.first_name + ' ' + $rootScope.last_name;
      }

      $scope.is_logged = true;

      $scope.msgs = ["Bienvenido a YesDoc..."]

      Notifications.query({quantity:10,unread:true},function(response){
        $scope.notifications = response.resource;
        $.each($scope.notifications,function(i,n){
          n.created_datetime = (new Date(n.created_datetime+'Z'));
          });
        });



    // El usuario NO está logueado
    }else{

      $scope.is_logged = false;

      $scope.msgs = []

      $scope.notifications = []

      $scope.user_name = null;

    }



    if(!$scope.$$phase) {
      $scope.$apply();
    }

  });

  $scope.redirect = function(n){

    Notifications.update({id:n.id},function(){});
    
    global.notificationRedirect(n);

  }

});
