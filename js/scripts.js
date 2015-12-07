$(document).ready(function() {
	$(window).scroll(function() {
	    if ($(window).width() > 991){
			var el = $('.navbar-default');
	    	var navHeight = el.outerHeight();
	    	if ($(window).scrollTop() >= navHeight)
	    		el.addClass('scrollDown');
	    	else
	    		el.removeClass('scrollDown');
	    }
	})	
});