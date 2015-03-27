$( document ).ready(function () {
	$( "#add-button" ).click(function() {
		if(!$( "#add-item" ).val()) {
			alert("Please enter an item into the list!");
		}
		else {$( "#list" ).append("<li class='list-item'><input type='checkbox'><span> " + $("#add-item").val() + "</span><button class='remove-button'>-</button> </li>");
		$( "#add-item" ).val('');
		}
	})


	$( "input[type='checkbox']").click(function() {
   		if (this.checked) {
        	//alert($(this).next().attr('class'));
        	$(this).next().addClass("strikethrough");
    	} 
    	else {
        	//alert('Unchecked');
        	$(this).nextSibling.removeClass("strikethrough");
    	}
	})


});

$(document).on('click', ".remove-button", function () {
    //alert($(this).parent().attr('class'));
		$(this).parent().remove();
    return false;
});
