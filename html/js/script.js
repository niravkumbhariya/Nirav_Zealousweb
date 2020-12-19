/* Script on scroll
------------------------------------------------------------------------------*/
// $(window).scroll(function() {

// });

/* Script on ready
------------------------------------------------------------------------------*/
$(window).ready(function() {
	//---- mobie nav open script ----//
	$(".hamburger").click(function(){
		if($('nav').hasClass("active")){
			$('nav').removeClass("active");
			
		}else{
			$('nav').addClass("active");
		}
	});

	$(".icon-close").click(function(){
		$('nav').removeClass("active");
	});

	//---- mobie nav open script ----//
	$("nav .dropdown").click(function(){
		if($(this).hasClass("dropdown-open")){
			$(this).removeClass("dropdown-open");
			
		}else{
			$(this).addClass("dropdown-open");
		}
	});

	$(".icon-close").click(function(){
		$('nav').removeClass("active");
	});

	//---- owl carousel script ----//
	$('.owl-carousel').owlCarousel({
	    loop:true,
	    margin:10,
	    nav:false,
	    dots: true,
	    responsive:{
	        0:{
	            items:1
	        }
	    }
	});

});	