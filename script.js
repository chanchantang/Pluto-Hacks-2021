$(".hamburger-link a").on("click", function(e) {
	e.preventDefault();

	$(".fixed-nav").toggleClass("visible");
	$(".burger-icon").toggleClass("talk-x");
});

$(window).on("scroll", function() {
	if($(window).scrollTop() >= $(".app-about").offset().top) {
		var i = 0;

		var loop = setInterval(function() {
			$(".desc-text.t"+ ++i).addClass("visible");
			if(i >= 3) clearInterval(loop);
		}, 200);
	}
});

// $("a, button").on("click", function(e) {
// 	e.stopPropagation();

// 	var $el = $(this);

// 	if(!$el.hasClass("clickedOnce")) {
// 		e.preventDefault();

// 		setTimeout(function() {
// 			$el.addClass("clickedOnce");
// 		}, 200);
// 	}
// });

$("#hero button").on("click", function(e) {
	e.preventDefault();

	$("body").animate({
		scrollTop: $("#twocards").offset().top
	}, 500);
});

$("section").on("click", function(e) {
	var $el = $(this);
});