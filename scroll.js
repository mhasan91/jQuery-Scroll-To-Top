 $(document).ready(function(){
	
	//Check to see if the window is top if not then display button
	$(window).scroll(function(){
		if ($(this).scrollTop() > 200) {
			$('.scrollToTop').fadeIn(2000);
		} else {
			$('.scrollToTop').fadeOut(1000);
		}
	});
	
	//Click event to scroll to top
	$('.scrollToTop').click(function(){
		$('html, body').animate({scrollTop : 0},800);
		return false;
	});
	
});