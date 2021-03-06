'use strict';

/**
 * @ngdoc function
 * @name saludWebApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the saludWebApp
 */
angular.module('saludWebApp')
  .controller('DropboxAuthStartCtrl', function ($scope,Auth,MyStorageCredentials ,$window,StorageLocations,StorageCredentials,MyUser) {

    Auth.isLogged(function(){

    $scope.locations = {
      'dropbox':{'msg':'Conectar con mi Dropbox', 'isConnected':false},
      'drive':{'msg':'Conectar con mi Google Drive','isConnected':false} // está en true para que quede deshabilitado
      }
    MyStorageCredentials.query(function(response){
      var credentials = response.resource;
      $.each(credentials,function(i,c){

        switch(c.storage_location.name.toLowerCase()){
          case 'dropbox':
            $scope.locations.dropbox.msg ='Dropbox ya está conectado';
            $scope.locations.dropbox.isConnected = true
            break;
          case 'google drive':
            $scope.locations.drive.msg = 'Google Drive ya está conectado';
            $scope.locations.drive.isConnected = true
            break;
          default:
            break;
          }
        });

      });

    $scope.isDisabled = function(loc){
      if ($scope.locations[loc].isConnected ){
        return 'disabled'
        }
      }


    window.handleAuthResult = function(authResult) {
      if (authResult && !authResult.error) {
        window.location = "/#/drive-auth-finish#"+authResult.access_token;
      }
    }

  });
  });
