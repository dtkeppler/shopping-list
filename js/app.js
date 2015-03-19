
$( document ).ready(function () {
	$( "#add-button" ).click(function() {
		$( "#list" ).append("<li class='list-item'><button class='remove-button'>-</button> " + $("#add-item").val() + "</li>");
	})
	$(".remove-button" ).click(function() {
		alert("The remove button has been clicked");
	})
});