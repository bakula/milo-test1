'use strict';

angular.module('test1')
  .controller('MainCtrl', function ($scope) {
	function getDate(dayOffset){
		var d = new Date();	
		d.setTime(d.getTime()+dayOffset*24*60*60*1000);
		d.setSeconds(0);
		d.setMinutes(0);
		d.setHours(0);
		d.setMilliseconds(0);
		return d;
	}
	
	$scope.past = getDate(-1);
	$scope.now = getDate(0);
	$scope.future = getDate(1);
	$scope.text = "10/10/2015";//month/day/year
	$scope.textPast = "10/10/2012";//month/day/year
  
  });
