//owl Carousel
    $(document).ready(function() {
      $("#owl-demo").owlCarousel({
          autoPlay: 5000, 
          items : 1,
		  navigation:true,
		   singleItem: true,
          itemsDesktop : [1199,3],
          itemsDesktopSmall : [979,3]
      });
    });
//Scroll Top	
$(document).ready(function(){
		// hide #back-top first
		$(".scrollToTop").hide();
		// fade in #back-top
		$(function () {
			$(window).scroll(function () {
				if ($(this).scrollTop() > 100) {
					$('.scrollToTop').fadeIn();
				} else {
					$('.scrollToTop').fadeOut();
				}
			});
			// scroll body to 0px on click
			$('.scrollToTop').click(function () {
				$('body,html').animate({
					scrollTop: 0
				}, 800);
				return false;
			});
		});

	});
	
//Flexslider
	$(window).load(function(){
	  $('.flexslider').flexslider({
		animation: "slide",
			controlNav: false,
			directionNav: true,
			slideshowSpeed: 5000, 
			animationLoop: true,
			itemWidth: 210,
			itemMargin: 5,
			minItems: 2,
			maxItems: 5, 
		//pauseOnHover: true, 
		start: function(slider){
		  $('body').removeClass('loading');
		}
	  });
	  });

 //Dropdown Menu
 jQuery(function(cash) {
    if($(window).width()>320){
        $('.navbar .dropdown').hover(function() {
            $(this).find('.dropdown-menu').first().stop(true, true).delay(250).slideDown();

        }, function() {
            $(this).find('.dropdown-menu').first().stop(true, true).delay(100).slideUp();

        });
		  $('.navbar .dropdown > a').click(function(){
            location.href = this.href;
        });

    }
});


//wow
new WOW().init();


//easing header
//jQuery to collapse the navbar on scroll
$(window).scroll(function() {
    if ($(".navbar").offset().top > 50) {
        $(".navbar-fixed-top").addClass("top-nav-collapse");
    } else {
        $(".navbar-fixed-top").removeClass("top-nav-collapse");
    }
});

//jQuery for page scrolling feature - requires jQuery Easing plugin
$(function() {
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
});
	
	
//Fadeout Scroll
$(window).scroll(function() {    
    var scroll = $(window).scrollTop();
        $('.lilliputian-title').css({'opacity':( 100-scroll )/100});
});

//Overlay
    $(document).ready(function(){
        if (Modernizr.touch) {
            // show the close overlay button
            $(".close-overlay").removeClass("hidden");
            // handle the adding of hover class when clicked
            $(".img").click(function(e){
                if (!$(this).hasClass("hover")) {
                    $(this).addClass("hover");
                }
            });
            // handle the closing of the overlay
            $(".close-overlay").click(function(e){
                e.preventDefault();
                e.stopPropagation();
                if ($(this).closest(".img").hasClass("hover")) {
                    $(this).closest(".img").removeClass("hover");
                }
            });
        } else {
            // handle the mouseenter functionality
            $(".img").mouseenter(function(){
                $(this).addClass("hover");
            })
            // handle the mouseleave functionality
            .mouseleave(function(){
                $(this).removeClass("hover");
            });
        }
    });
	
/* Toggle */
	$('.content_hide').click(function(){
		$(this).toggleClass('toggled-on');
		$('.content_show').slideToggle('toggled-on');
	});
	
	
$('.contentt_hide').click(function(){
		$(this).toggleClass('toggled-on');
		$('.contentt_show').slideToggle('toggled-on');
	});
	
	
/*isotop*/

$( document ).ready(function() {
  /* activate jquery isotope */
  var $container = $('#posts').isotope({
    itemSelector : '.item',
    isFitWidth: true
  });

  $(window).smartresize(function(){
    $container.isotope({
      columnWidth: '.col-md-3'
    });
  });
  
  $container.isotope({ filter: '*' });

    // filter items on button click
  $('#filters').on( 'click', 'button', function() {
    var filterValue = $(this).attr('data-filter');
    $container.isotope({ filter: filterValue });
  });
});

//Fancy Lightbox
$(document).ready(function() {
	/*
	 *  Simple image gallery. Uses default settings
	 */

	$('.fancybox').fancybox();

	/*
	 *  Different effects
	 */

	// Change title type, overlay closing speed
	$(".fancybox-effects-a").fancybox({
		helpers: {
			title : {
				type : 'outside'
			},
			overlay : {
				speedOut : 0
			}
		}
	});

	// Disable opening and closing animations, change title type
	$(".fancybox-effects-b").fancybox({
		openEffect  : 'none',
		closeEffect	: 'none',

		helpers : {
			title : {
				type : 'over'
			}
		}
	});

	// Set custom style, close if clicked, change title type and overlay color
	$(".fancybox-effects-c").fancybox({
		wrapCSS    : 'fancybox-custom',
		closeClick : true,

		openEffect : 'none',

		helpers : {
			title : {
				type : 'inside'
			},
			overlay : {
				css : {
					'background' : 'rgba(238,238,238,0.85)'
				}
			}
		}
	});

	// Remove padding, set opening and closing animations, close if clicked and disable overlay
	$(".fancybox-effects-d").fancybox({
		padding: 0,

		openEffect : 'elastic',
		openSpeed  : 150,

		closeEffect : 'elastic',
		closeSpeed  : 150,

		closeClick : true,

		helpers : {
			overlay : null
		}
	});

	/*
	 *  Button helper. Disable animations, hide close button, change title type and content
	 */

	$('.fancybox-buttons').fancybox({
		openEffect  : 'none',
		closeEffect : 'none',

		prevEffect : 'none',
		nextEffect : 'none',

		closeBtn  : false,

		helpers : {
			title : {
				type : 'inside'
			},
			buttons	: {}
		},

		afterLoad : function() {
			this.title = 'Image ' + (this.index + 1) + ' of ' + this.group.length + (this.title ? ' - ' + this.title : '');
		}
	});


	/*
	 *  Thumbnail helper. Disable animations, hide close button, arrows and slide to next gallery item if clicked
	 */

	$('.fancybox-thumbs').fancybox({
		prevEffect : 'none',
		nextEffect : 'none',

		closeBtn  : false,
		arrows    : false,
		nextClick : true,

		helpers : {
			thumbs : {
				width  : 50,
				height : 50
			}
		}
	});

	/*
	 *  Media helper. Group items, disable animations, hide arrows, enable media and button helpers.
	*/
	$('.fancybox-media')
		.attr('rel', 'media-gallery')
		.fancybox({
			openEffect : 'none',
			closeEffect : 'none',
			prevEffect : 'none',
			nextEffect : 'none',

			arrows : false,
			helpers : {
				media : {},
				buttons : {}
			}
		});

	/*
	 *  Open manually
	 */

	$("#fancybox-manual-a").click(function() {
		$.fancybox.open('1_b.jpg');
	});

	$("#fancybox-manual-b").click(function() {
		$.fancybox.open({
			href : 'iframe.html',
			type : 'iframe',
			padding : 5
		});
	});

	$("#fancybox-manual-c").click(function() {
		$.fancybox.open([
			{
				href : '1_b.jpg',
				title : 'My title'
			}, {
				href : '2_b.jpg',
				title : '2nd title'
			}, {
				href : '3_b.jpg'
			}
		], {
			helpers : {
				thumbs : {
					width: 75,
					height: 50
				}
			}
		});
	});


});
//CALL TO SKYPE

function hasSkype() {
    if ($.browser.safari || $.browser.opera) {
        return true;
    } else if ($.browser.msie) {
        try {
            if (new ActiveXObject("Skype.Detection")) return true;
        } catch(e) { }
    } else {
        if (typeof(navigator.mimeTypes["application/x-skype"]) == "object") {
            return true;
        }
    }
    return false;
}

$('a[href^="tel:"]').each(function() {
    if(hasSkype()) {
        // if Skype is available, update the link to use Skype
        $(this).attr('href','skype:'+$(this).attr('data-skype')+'?call');
    }
});

//BOotstrap Tooltip
$(document).ready(function(){
    $('[data-toggle="tooltip"]').tooltip();   
});


// form controller  script
  $(document).ready(function(){
   $('#contact').validate({
     rules:{
       name:{
         required:true,
       },
       email:{
         required:true ,
         email:true,
       }
     }
   });
 });