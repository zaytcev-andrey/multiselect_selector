$(document).ready( function() {
    
	function CreateMultipleSelectors()
	{
		var selectors = [];
		$("div#wrapper-filter").each(function(index) {
			var select_method = $(this).attr("select-method");
			switch (select_method) {
				case "multiple":
					selectors.push(new MultipleSelectControl($(this)));
					break;
				case "toggle":
					selectors.push(new ToggleSelectControl($(this)));
					break;
				default:
					throw new Error("Selector " + select_method + " not implemented");
			}
		});
	}
    
    function ISelectControl( $wrapperfilter ) {                      
        this._$ul = $($wrapperfilter).children("ul#filter-bar");
        this._$li = this._$ul.children("li.filter-option");
        this._data_target = [];
        var dt_str = this._$ul.attr( "data-target" ) ? this._$ul.attr( "data-target" ) : "";        
        this._data_target = dt_str.split(',');
        
        this._get_li_by_target = function( data_target ) {
        	return this._$ul.children("li.filter-option[data-target='" + data_target + "']");
        }
    }
    
    ISelectControl.prototype.Select = function($element) {
         throw new Error("ISelectControl.Select not implemented");
    } 
    
    function MultipleSelectControl($wrapperfilter){
        ISelectControl.apply(this, $wrapperfilter);
		
		for ( var id in this._data_target ) {
			var $element = this._get_li_by_target( this._data_target[ id ] );
			$element.addClass("active");
		}
		
		var control_ = this;
        this._$li.click(function(){
            control_.Select($(this));
        });
    }
    
    MultipleSelectControl.prototype = Object.create(ISelectControl.prototype);
    MultipleSelectControl.prototype.constructor = MultipleSelectControl;
    
    MultipleSelectControl.prototype.Select = function($element) {
    	if ( $element.hasClass("active") ) {
			$element.removeClass("active");
			var index = this._data_target.indexOf( $element.attr("data-target") );
			this._data_target.splice( index, 1 );
		} else {
			$element.addClass("active");
			this._data_target.push( $element.attr("data-target") );
		}
        
        this._$ul.attr( "data-target", this._data_target );
    }
	
    function ToggleSelectControl($wrapperfilter){
        ISelectControl.apply(this, $wrapperfilter);
		
		if ( this._data_target.length > 1 )
			throw new Error("ToggleSelectControl can not have more than one element in data-target attribute");
		
		this._get_li_by_target( this._data_target[ 0 ] ).addClass("active");

		var control_ = this;
        this._$li.click(function(){
            control_.Select($(this));
        });
    }
	
	ToggleSelectControl.prototype = Object.create(ISelectControl.prototype);
    ToggleSelectControl.prototype.constructor = ToggleSelectControl;
    
    ToggleSelectControl.prototype.Select = function($element) {
    	this._$li.removeClass("active");
    	$element.addClass("active");     
    	this._data_target = $element.attr("data-target");
        this._$ul.attr( "data-target", this._data_target );
        console.log( "ToggleSelectControl::data-target: " + this._data_target );
    }
    
	CreateMultipleSelectors();
})
