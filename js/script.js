$(document).ready( function() {

    console.log( 'On ready' );
    
	function CreateMultipleSelectors()
	{
	}
	
	function RangeSelector($wrapperfilter){
        var elements = [];
        console.log( 'call RangeSelector' );
		console.log( $wrapperfilter );
        var $li = $wrapperfilter.children("ul#filter-bar").children("li.filter-option");
		console.log('li: ' + $li.text());
        $li.each(function(index){
			console.log( index + ": " + $( this ).text() );
			elements.push( this );});
		var selector = this;
		this.toggle = function($element) {
			console.log('in toggle');
		}
        this.min_element = elements[0];
        this.max_element = elements[elements.length - 1];        
    }
    
    var obj = new RangeSelector($("div#wrapper-filter"));
    
    $("#filter-bar li").click(function(){
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
    });
})