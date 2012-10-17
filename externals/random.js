$(document).ready(function(){

	// changing the background image
	var randomnumber = Math.ceil(Math.random()*10);
	if(randomnumber < 9) {
		var url = "url('images/rotatable_bkds/surrealist_0" + randomnumber + ".jpg')";
	}
	else {
		var url = "url('images/rotatable_bkds/surrealist_" + randomnumber + ".jpg')";
	}
	console.log(url);

	$("#background").css("background-image", url);
	$("#midground").css("background-image", url);
	$("#foreground").css("background-image", url);

	console.log($("#background").css("background"));

	// changing the active menu item
	$(".small_menu").click(function() {
		var active_menu = $(this).children("a").attr("id");
		$(".active").removeClass("active");
		$(active_menu).addClass("active");
	});
});