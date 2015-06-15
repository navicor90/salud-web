'use strict';

describe('Controller: ProfileinformationNewCtrl', function () {

  // load the controller's module
  beforeEach(module('saludWebApp'));

  var ProfileinformationNewCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ProfileinformationNewCtrl = $controller('ProfileinformationNewCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
