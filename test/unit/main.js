'use strict';

describe('controllers', function(){
  var scope;

  beforeEach(module('test1'));

  beforeEach(inject(function($rootScope) {
  	scope = $rootScope.$new();
  }));

  it('should define date values', inject(function($controller) {
    expect(scope.awesomeThings).toBeUndefined();

    $controller('MainCtrl', {
      $scope: scope
  	});
    expect(scope.past).not.toBeNull();
    expect(scope.now).not.toBeNull();
    expect(scope.future).not.toBeNull();
    expect(scope.text).not.toBeNull();
    expect(scope.textPast).not.toBeNull();
  }));
});

describe('filters', function(){
  var scope;

  beforeEach(module('test1'));

  beforeEach(inject(function($rootScope) {
  	scope = $rootScope.$new();
  }));
 it('has a bool filter', inject(function($filter) {
        expect($filter('pastdate')).not.toBeNull();
    }));
it("should return valid formatted date ", inject(function (pastdateFilter) {
        expect(pastdateFilter(new Date("10/10/2015"))=="").toBeTruthy();
        expect(pastdateFilter(new Date("10/10/2011"))=="2011-10-10").toBeTruthy();
        expect(pastdateFilter("")=="").toBeTruthy();
        expect(pastdateFilter("vcxvcxv")=="").toBeTruthy();
    }));
	
});