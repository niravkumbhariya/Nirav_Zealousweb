/* Script on scroll
------------------------------------------------------------------------------*/
$(window).scroll(function() {
	if($(this).scrollTop() > 100){
	  $('header').addClass('sticky');
	}
	else{
	  $('header').removeClass('sticky');
	}

	// scroll top
	var scrollTop = $(".scrollToTop");
	if ($(this).scrollTop() < 500) {
    	scrollTop.removeClass("active");
    } else {
        scrollTop.addClass("active");
    }
});

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

	//---- hero banner owl carousel script ----//
	$('.hero-banner .owl-carousel').owlCarousel({
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

	//---- about us owl carousel script ----//
	$('.planning-box .owl-carousel').owlCarousel({
	    loop:false,
	    margin:16,
	    nav:false,
	    dots: true
	});

	//---- youtube popup script ----//
	$(".popup").click(function (e) {
		e.preventDefault();
	    var $this = $(this);
	    var $iframe = $("<iframe>").attr("src", $this.data("link")).css({"width": 600, "height": 400});
	    $("#video-view").append($iframe);
	    $iframe.wrap("<div class='video'>");
	    
	    if($('body').hasClass("popup-video")){
			$('body').removeClass("popup-video");
			
		}else{
			$('body').addClass("popup-video");
		}

		var popup_video = $('#video-view .video, .popup');
	    $('#wrapper').click(function (e) {
	        if ((popup_video[0] != e.target) && (!popup_video.has(e.target).length)) 
	        {
				$('body').removeClass("popup-video");
			}
	    });
	});

	//---- faq script ----//
	$("#faq .accordian-list .name").click(function(){
		$(this).parent().toggleClass('active').siblings().removeClass('active').children('.accordian-list .caption').slideUp('slow');
		$(this).siblings(".accordian-list .caption").slideToggle("2500");
	});

	//---- scroll to top script ----//
    $('.scrollToTop').on('click', function () {
        $('html, body').animate({
            scrollTop: 0
        }, 500);
        return false;
    });

});	