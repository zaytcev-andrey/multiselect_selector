$(document).ready( function() {

    console.log( 'On ready' );
    
    function RangeSelector(){
        var elements = [];
        console.log( 'call RangeSelector' );
        var rangeValues_li = $("#filter-bar li");
        rangeValues_li.removeClass("active");
        console.log( rangeValues_li );
        rangeValues_li.each( function( index ) {
        console.log( index + ": " + $( this ).text() );        
        elements.push( this ); });        
        this.min_element = elements[0];
        this.max_element = elements[elements.length - 1];        
    }
    
    var obj = new RangeSelector();
    $(obj.min_element).addClass("active");
    $(obj.max_element).addClass("active");
    
    $("#filter-bar li").click(function(){
        //$("#filter-bar li").removeClass("active");
        $(this).addClass("active");
    });
})