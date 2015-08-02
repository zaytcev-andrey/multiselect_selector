angular.module('ui.multopleselector', []).
directive('tdMultipleselector', function( $parse ) {
	
	return function (scope, element, attrs, controller) {
        var ngModel = $parse(attrs.ngModel);
        $(function(){
        	
        	element.multipleSelector().click( function() {
    			var $this = $(this);
    			var modelPath = $this.attr('ng-model');
    			var selectedData = $this.multipleSelector('getdata');
    			scope.$apply( function( scope ){
                    // Change binded variable
                    ngModel.assign( scope, selectedData );
    			});
    			console.log("#angular binary clicked");
    	       	console.log("selected items : " + selectedData );
    	    });
        });
    }
});