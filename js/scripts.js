$(document).ready(function() {
	//Init WOW
	new WOW().init();

	//Navbar scroll effect
	$(window).scroll(function() {
	    var el = $('.navbar-default');
	    if ($(window).width() > 991){
	    	var navHeight = el.outerHeight();
	    	if ($(window).scrollTop() >= navHeight)
	    		el.addClass('scrollDown');
	    	else
	    		el.removeClass('scrollDown');
	    }
	    else
	    	el.removeClass('scrollDown');

	})
	$('.navbar-default').hover(function(){
		if ($(window).scrollTop() < $(this).outerHeight())
			$(this).addClass('scrollDown');
	},function(){
		if ($(window).scrollTop() < $(this).outerHeight())
			$(this).removeClass('scrollDown');
	});

	//Adjust qty
	$('.qty-modifier span').on('click', function(){
		//Get current value
		var input = $(this).parents('.qty-container').find('input');
		var currenValue = input.val();
		//Detect Plus or Minus and Update qty
		if ($(this).children('i').hasClass('fa-plus')){
			var newValue = parseInt(currenValue) + 1;
			if ($.isNumeric(newValue))
				input.val(newValue);
			else
				input.val(1);
		}
		else{
			var newValue = parseInt(currenValue) - 1;
			if ( ($.isNumeric(newValue)) & newValue > 1)
				input.val(newValue);
			else
				input.val(1);
		}
	});
});