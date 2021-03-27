$(window).on("load", function() {

	$(".loader-gif .inner").fadeOut(500, function() {
		$(".loader-gif").fadeOut(750);
	});

	$(".items").isotope({
    	filter: '*',
    	animationOptions: {
    		duration: 1500,
    		easing: 'linear',
    		queue: false
    	}
})

$(document).ready(function() {
    $('#opening-slides').superslides({
    	animation: 'fade',
    	play:5000
    });

    var typed = new Typed(".typed", {
        strings: ["Student", "Pentester", "CTF player", "Blogger"],
        typeSpeed: 70,
        loop: true,
        startDelay: 1000,
        showCursor: false
    });
    
    var typed_name = new Typed(".typed_name", {
        strings: ["Evani Sree Suketh Narayan"],
        typeSpeed: 35,
        showCursor: false
    });

    $('.owl-carousel').owlCarousel({
	    loop:true,
	    margin:10,
	    nav:true,
	    responsive:{
	        0:{
	            items:1
	        },
	        480:{
	            items:2
	        },
	        768:{
	            items:3
	        },
	        938:{
	        	items:4
	        }
	    }
    });



    var skillStartOffset = $(".skills_section").offset().top;

    $(window).scroll(function() {
    
	    if(window.pageYOffset > skillStartOffset - $(window).height() + 200) {
	        $('.chart').easyPieChart({
		        easing: "easeInOut",
		        barColor: 'green',
		        trackColor: 'black',
		        scaleColor: 'black',
		        lineWidth: 4,
		        size: 152,
		        onStep: function(from, to, percent) {
		            $(this.el).find('.percent').text(Math.round(percent));
		        }
	        });  
	    }

    });

    $("[data-fancybox]").fancybox();
    
    });

    $("#filters a").click(function() {

    	$("#filters .current").removeClass("current");
    	$(this).addClass("current");

    	var selector = $(this).attr("data-filter");

	    	$(".items").isotope({
	    	filter: selector,
	    	animationOptions: {
	    		duration: 1500,
	    		easing: 'linear',
	    		queue: false
	    	}
	    });

	    return false;
    })

    /*$(".counter").each(function(){
    	var element = $(this);
    	var endVal = parseInt(element.text());
*/
 	//$(".count").CountUp(200);
    //})

});