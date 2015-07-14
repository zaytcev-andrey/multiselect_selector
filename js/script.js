$(document).ready( function() {

    console.log( 'On ready' );
    
	function CreateMultipleSelectors()
	{
	}
    
    function ISelectControl($wrapperfilter) {                      
        this._$ul = $($wrapperfilter).children("ul#filter-bar");
        this._$li = this._$ul.children("li.filter-option");
    }
    ISelectControl.prototype.Select = function($element) {
        alert(this);
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
        $element.parent().children().each( function( index ) {
            console.log( index + ": " + $( this ).text() );
        });
        $element.each( function( index ) {
            console.log( index + "this : " + $( this ).text() );
        });
        var $ids = [];            
        this._$ul.children().each( function( index ) {
        if($element.hasClass("active"))
            $ids.push($element.attr("data-target"));
        });		
        this._$ul.attr("data-ids", $ids);
        console.log( "ids: " + $ids );
    }
    
    var obj = new MultipleSelectControl($("div#wrapper-filter"));
    
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