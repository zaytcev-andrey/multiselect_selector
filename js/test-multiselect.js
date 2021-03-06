$(document).ready( function() {
	
	$("#multiple").multipleSelector().click(function() {
		console.log("#multiple clicked");
		console.log("selected items : " + $(this).multipleSelector('getdata') );
	});
	
	$("#toggle").multipleSelector().click(function() {
		console.log("#toggle clicked");
		console.log("selected items : " + $(this).multipleSelector('getdata') );
	});
	
	$("#binary").multipleSelector().click(function() {
		console.log("#binary clicked");
		console.log("selected items : " + $(this).multipleSelector('getdata') );
	});

	$("#binary-small").multipleSelector().click(function () {
	    console.log("#binary clicked");
	    console.log("selected items : " + $(this).multipleSelector('getdata'));
	});
});

var angular_app = angular.module('angular_app', ['ui.multopleselector']);

function mainController($scope) {	
	
	$scope.current_data = {
			ids : "nothing"
	};
	
	$scope.options = [ { 
		option : 'option-1',
		value : 'value-1'
	}, {
		option : 'option-2',
		value : 'value-2'
	}, {
		option : 'option-3',
		value : 'value-3'
	}, {
		option : 'option-4',
		value : 'value-4'
	}, {
		option : 'option-5',
		value : 'value-5'
	} ];
	
	$scope.current_data.ids = [ $scope.options[ 0 ].option, $scope.options[ 2 ].option ].join(',');
}