
	// jQuery(document).ready(function(){
	// 	$(".slick-list").toggleClass("bigger");
	// 	});

var api = $("#my-menu").data("mmenu");
api.bind("opened", function(){
	$(".hamburger").addClass("is-active");
	$("body").addClass("back-color")
}).bind("closed", function(){
	$(".hamburger").removeClass("is-active");
	$("body").removeClass("back-color")
});

$(".hamburger").click(function(){
	api.close();
});