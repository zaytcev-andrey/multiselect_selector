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
    }
    ISelectControl.prototype.Select = function($element) {
         throw new Error("ISelectControl.Select not implemented");
    } 
    
    function MultipleSelectControl($wrapperfilter){
        ISelectControl.apply(this, $wrapperfilter);
        console.log( 'call MultipleSelectControl' );
        console.log('$ul : ' + this._$ul.text());
		console.log('li: ' + this._$li.text());
		var control_ = this;
        this._$li.click(function(){
            control_.Select($(this));
        });
    }
    
    MultipleSelectControl.prototype = Object.create(ISelectControl.prototype);
    MultipleSelectControl.prototype.constructor = MultipleSelectControl;
    
    MultipleSelectControl.prototype.Select = function($element) {
        $element.hasClass("active")? 
		$element.removeClass("active"): $element.addClass("active");
        this._$li.each( function( index ) {
            console.log( index + ": " + $( this ).text() );
        });
        $element.each( function( index ) {
            console.log( index + "this : " + $( this ).text() );
        });
        var $ids = [];            
        this._$li.each( function( index ) {
			if ($(this).hasClass("active"))
				$ids.push($(this).attr("data-target"));
        });
        this._$ul.attr("data-ids", $ids);
        console.log( "ids: " + $ids );
    }
	
	function ToggleSelectControl($wrapperfilter){
        ISelectControl.apply(this, $wrapperfilter);
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
        var $ids = [];            
		$ids.push($element.attr("data-target"));
        this._$ul.attr("data-ids", $ids);
        console.log( "ids: " + $ids );
    }
    
	CreateMultipleSelectors();
    
    /*$("#filter-bar li").click(function(){
        $(this).hasClass("active")? 
		$(this).removeClass("active"): $(this).addClass("active");
		$(this).parent().children().each( function( index ) {
        console.log( index + ": " + $( this ).text() );
		});
		$(this).each( function( index ) {
        console.log( index + "this : " + $( this ).text() );
		});
		var $ids = [];
		var $parent = $(this).parent();
		$parent.children().each( function( index ) {
			if($(this).hasClass("active"))
				$ids.push($(this).attr("data-target"));
		});		
		$parent.attr("data-ids", $ids);
		console.log( "ids: " + $ids );
        obj.Select($(this));
    });*/
})