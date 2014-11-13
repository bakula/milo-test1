'use strict';

angular.module('test1')
  .filter('pastdate', function () {
    return function(input) {
		if(Object.prototype.toString.call(input) !== '[object Date]'){
			console.debug(input,"not date object, try to convert");
			input = new Date(input);
		}
		var compare = input < new Date();
		if(compare){
			var zeroDay = (input.getDate()<10)?"0":"";
			var zeroMonth = (input.getMonth()<9)?"0":"";
			return input.getFullYear()+"-"+zeroMonth+(input.getMonth()+1)+"-"+zeroDay+input.getDate();
		}else{
			console.error(input,"Date is future");
			return '';
		}
	};
  
  });
