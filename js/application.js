$( document ).ready(function() {

	$(".toggle-icon").click(function() {
  	$(this).toggleClass("active");
  	$(".side-nav").toggleClass("shrink");
	});

});