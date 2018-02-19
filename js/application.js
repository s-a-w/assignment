$(document).ready(function() {

	$(".toggle-icon").click(function () {
  	$(this).toggleClass("active");
  	$(".side-nav").toggleClass("shrink");
	});

	$(".profile-wrap").click(function (event) {
		event.stopPropagation();
		$(".user-dropDown").toggleClass("hide");
	});

	$(document).click(function() {
	    $('.user-dropDown').addClass('hide');
	});

});
