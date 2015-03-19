
$( document ).ready(function () {
	$( "#add-button" ).click(function() {
	$( "#list" ).append("<li class='list-item'><button class='remove'>-</button> " + $("#add-item").val() + "</li>");
	})
});