(function($) {

	"use strict";

	//Hide Loading Box (Preloader)
	function handlePreloader() {
		if($('.loader-wrap').length){
			$('.loader-wrap').delay(1000).fadeOut(500);
		}
		TweenMax.to($(".loader-wrap .overlay"), 1.2, {
            force3D: true,
            left: "100%",
            ease: Expo.easeInOut,
        });
	}

	if ($(".preloader-close").length) {
        $(".preloader-close").on("click", function(){
            $('.loader-wrap').delay(200).fadeOut(500);
        })
    }

	//Update Header Style and Scroll to Top
	function headerStyle() {
		if($('.main-header').length){
			var windowpos = $(window).scrollTop();
			var siteHeader = $('.main-header');
			var scrollLink = $('.scroll-top');
			if (windowpos >= 110) {
				siteHeader.addClass('fixed-header');
				scrollLink.addClass('open');
			} else {
				siteHeader.removeClass('fixed-header');
				scrollLink.removeClass('open');
			}
		}
	}

	headerStyle();

    $( ".main-header .navigation li.dropdown" ).click(function() {
		//alert(1);
		$(this).siblings().removeClass('open');
		$( this ).toggleClass("open");
		$('body').on('click', '.anything', function() {
			//code
			$(this).siblings().removeClass('open');
		});
		
		
	  });
	  

	  $('.mobile-nav-toggler').on('click', function() {
		$('body').addClass('mobile-menu-visible');
	});

	//Submenu Dropdown Toggle
	if($('.main-header li.dropdown ul').length){
		$('.main-header .navigation li.dropdown').append('<div class="dropdown-btn"><span class="fas fa-angle-down"></span></div>');

	}

	//Mobile Nav Hide Show
	if($('.mobile-menu').length){

		$('.mobile-menu .menu-box').mCustomScrollbar();

		var mobileMenuContent = $('.main-header .menu-area .main-menu').html();
		$('.mobile-menu .menu-box .menu-outer').append(mobileMenuContent);
		$('.sticky-header .main-menu').append(mobileMenuContent);

		//Dropdown Button
		$('.mobile-menu li.dropdown .dropdown-btn').on('click', function() {
			$(this).toggleClass('open');
			$(this).prev('ul').slideToggle(500);
		});
		//Dropdown Button
		$('.mobile-menu li.dropdown .dropdown-btn').on('click', function() {
			$(this).prev('.megamenu').slideToggle(900);
		});
		//Menu Toggle Btn
		$('.mobile-nav-toggler').on('click', function() {
			$('body').addClass('mobile-menu-visible');
		});

		//Menu Toggle Btn
		$('.mobile-menu .menu-backdrop,.mobile-menu .close-btn').on('click', function() {
			$('body').removeClass('mobile-menu-visible');
		});
	}


	//Side Nav Hide Show
	if($('.side-menu').length){

		$('.side-menu .menu-box').mCustomScrollbar();

		var mobileMenuContent = $('.main-header .menu-area .main-menu').html();
		$('.side-menu .menu-box .menu-outer').append(mobileMenuContent);

		//Dropdown Button
		$('.side-menu li.dropdown .dropdown-btn').on('click', function() {
			$(this).toggleClass('open');
			$(this).prev('ul').slideToggle(500);
		});
		//Dropdown Button
		$('.side-menu li.dropdown .dropdown-btn').on('click', function() {
			$(this).prev('.megamenu').slideToggle(900);
		});
	}


	// Scroll to a Specific Div
	if($('.scroll-to-target').length){
		$(".scroll-to-target").on('click', function() {
			var target = $(this).attr('data-target');
		   // animate
		   $('html, body').animate({
			   scrollTop: $(target).offset().top
			 }, 1000);

		});
	}

	// Elements Animation
	if($('.wow').length){
		var wow = new WOW({
		mobile:       false
		});
		wow.init();
	}

	//Contact Form Validation
	if($('#contact-form').length){
		$('#contact-form').validate({
			rules: {
				username: {
					required: true
				},
				email: {
					required: true,
					email: true
				},
				phone: {
					required: true
				},
				subject: {
					required: true
				},
				message: {
					required: true
				}
			}
		});
	}

	//Fact Counter + Text Count
	if($('.count-box').length){
		$('.count-box').appear(function(){

			var $t = $(this),
				n = $t.find(".count-text").attr("data-stop"),
				r = parseInt($t.find(".count-text").attr("data-speed"), 10);

			if (!$t.hasClass("counted")) {
				$t.addClass("counted");
				$({
					countNum: $t.find(".count-text").text()
				}).animate({
					countNum: n
				}, {
					duration: r,
					easing: "linear",
					step: function() {
						$t.find(".count-text").text(Math.floor(this.countNum));
					},
					complete: function() {
						$t.find(".count-text").text(this.countNum);
					}
				});
			}

		},{accY: 0});
	}


	//LightBox / Fancybox
	if($('.lightbox-image').length) {
		$('.lightbox-image').fancybox({
			openEffect  : 'fade',
			closeEffect : 'fade',
			helpers : {
				media : {}
			}
		});
	}


	//Tabs Box
	if($('.tabs-box').length){
		$('.tabs-box .tab-buttons .tab-btn').on('click', function(e) {
																//  alert(1);
			e.preventDefault();
			var target = $($(this).attr('data-tab'));

			if ($(target).is(':visible')){
				return false;
			}else{
				target.parents('.tabs-box').find('.tab-buttons').find('.tab-btn').removeClass('active-btn');
				$(this).addClass('active-btn');
				target.parents('.tabs-box').find('.tabs-content').find('.tab').fadeOut(0);
				target.parents('.tabs-box').find('.tabs-content').find('.tab').removeClass('active-tab');
				$(target).fadeIn(300);
				$(target).addClass('active-tab');
			}
		});
	}



	//Accordion Box
	if($('.accordion-box').length){
		$(".accordion-box").on('click', '.acc-btn', function() {

			var outerBox = $(this).parents('.accordion-box');
			var target = $(this).parents('.accordion');

			if($(this).hasClass('active')!==true){
				$(outerBox).find('.accordion .acc-btn').removeClass('active');
			}

			if ($(this).next('.acc-content').is(':visible')){
				return false;
			}else{
				$(this).addClass('active');
				$(outerBox).children('.accordion').removeClass('active-block');
				$(outerBox).find('.accordion').children('.acc-content').slideUp(300);
				target.addClass('active-block');
				$(this).next('.acc-content').slideDown(300);
			}
		});
	}


	// banner-carousel
	if ($('.banner-carousel').length) {
        const bannerCarousel = $('.banner-carousel').owlCarousel({
            loop: true,
            margin: 0,
            nav: true,
            animateOut: 'fadeOut',
            animateIn: 'fadeIn',
            active: true,
            smartSpeed: 1000,
            autoplay: 6000,
            navText: ['<span class="fa fa-angle-left"></span>', '<span class="fa fa-angle-right"></span>'],
            responsive: {
                0: {
                    items: 1
                },
                600: {
                    items: 1
                },
                800: {
                    items: 1
                },
                1024: {
                    items: 1
                }
            }
        });

        let isCarouselPaused = false;

        $('#pause-btn').click(function() {
            if (!isCarouselPaused) {
                bannerCarousel.trigger('stop.owl.autoplay');
                isCarouselPaused = true;
                $(this).html('<span class="fa fa-play" title="Play Slider"></span>');
            } else {
                bannerCarousel.trigger('play.owl.autoplay');
                isCarouselPaused = false;
                $(this).html('<span class="fa fa-pause" title="Pause Slider"></span>');
            }
        });
    }



    // project-carousel-2
	if ($('.project-carousel-2').length) {
        $('.project-carousel-2').owlCarousel({
            loop:true,
			margin:0,
			nav:true,
			dots:false,
			animateOut: 'fadeOut',
    		animateIn: 'fadeIn',
    		active: true,
			smartSpeed: 1000,
			autoplay: 6000,
            navText: [ '<span class="fa fa-arrow-left"></span>', '<span class="fa fa-arrow-right"></span>' ],
            responsive:{
                0:{
                    items:1
                },
                600:{
                    items:1
                },
                800:{
                    items:1
                },
                1024:{
                    items:1
                }
            }
        });
    }

     // sidebar-carousel
	if ($('.sidebar-carousel').length) {
        $('.sidebar-carousel').owlCarousel({
            loop:true,
			margin:30,
			nav:true,
			smartSpeed: 500,
			autoplay: 1000,
			navText: [ '<span class="fas fa-arrow-left"></span>', '<span class="fas fa-arrow-right"></span>' ],
			responsive:{
                0:{
                    items:1
                },
                600:{
                    items:1
                },
                800:{
                    items:1
                },
                1024:{
                    items:1
                }
            }
        });
    }


     // news-carousel
	if ($('.news-carousel').length) {
        $('.news-carousel').owlCarousel({
            loop:true,
			margin:30,
			nav:true,
			smartSpeed: 500,
			autoplay: 1000,
			navText: [ '<span class="fas fa-angle-left"></span>', '<span class="fas fa-angle-right"></span>' ],
			responsive:{
                0:{
                    items:1
                },
                600:{
                    items:1
                },
                800:{
                    items:1
                },
                1024:{
                    items:1
                }
            }
        });
    }


    //three-item-carousel
	if ($('.three-item-carousel').length) {
		$('.three-item-carousel').owlCarousel({
			loop:true,
			margin:30,
			nav:true,
			smartSpeed: 1000,
			autoplay: 500,
			navText: [ '<span class="fas fa-arrow-left"></span>', '<span class="fas fa-arrow-right"></span>' ],
			responsive:{
				0:{
					items:1
				},
				480:{
					items:1
				},
				600:{
					items:2
				},
				800:{
					items:2
				},
				1024:{
					items:3
				}
			}
		});
	}


	 //project-carousel
	if ($('.project-carousel').length) {
		$('.project-carousel').owlCarousel({
			loop:true,
			margin:0,
			nav:true,
			smartSpeed: 1000,
			autoplay: 500,
			navText: [ '<span class="fas fa-arrow-left"></span>', '<span class="fas fa-arrow-right"></span>' ],
			responsive:{
				0:{
					items:1
				},
				480:{
					items:1
				},
				600:{
					items:2
				},
				800:{
					items:2
				},
				1024:{
					items:3
				}
			}
		});
	}


	// Four Item Carousel
	if ($('.four-item-carousel').length) {
		$('.four-item-carousel').owlCarousel({
			loop:true,
			margin:30,
			nav:true,
			autoHeight: true,
			smartSpeed: 500,
			autoplay: 5000,
			navText: [ '<span class="fas fa-angle-left"></span>', '<span class="fas fa-angle-right"></span>' ],
			responsive:{
				0:{
					items:1
				},
				600:{
					items:2
				},
				800:{
					items:3
				},
				1024:{
					items:3
				},
				1200:{
					items:4
				}
			}
		});
	}


	//Client Testimonial Carousel
	if ($('.client-testimonial-carousel').length && $('.client-thumbs-carousel').length) {

		var $sync3 = $(".client-testimonial-carousel"),
			$sync4 = $(".client-thumbs-carousel"),
			flag = false,
			duration = 500;

			$sync3
				.owlCarousel({
					loop:true,
					items: 1,
					margin: 0,
					nav: true,
					navText: [ '<span class="fa fa-angle-left"></span>', '<span class="fa fa-angle-right"></span>' ],
					dots: false,
					autoplay: true,
					autoplayTimeout: 5000
				})
				.on('changed.owl.carousel', function (e) {
					if (!flag) {
						flag = false;
						$sync4.trigger('to.owl.carousel', [e.item.index, duration, true]);
						flag = false;
					}
				});

			$sync4
				.owlCarousel({
					loop:true,
					margin:10,
					items: 1,
					nav: false,
					navText: [ '<span class="icon fa fa-long-arrow-left"></span>', '<span class="icon fa fa-long-arrow-right"></span>' ],
					dots: true,
					center: false,
					autoplay: true,
					autoplayTimeout: 5000,
					responsive: {
						0:{
				            items:1,
				            autoWidth: false
				        },
				        400:{
				            items:1,
				            autoWidth: false
				        },
				        600:{
				            items:1,
				            autoWidth: false
				        },
				        1000:{
				            items:1,
				            autoWidth: false
				        },
						1200:{
				            items:1,
				            autoWidth: false
				        }
				    },
				})

		.on('click', '.owl-item', function () {
			$sync3.trigger('to.owl.carousel', [$(this).index(), duration, true]);
		})
		.on('changed.owl.carousel', function (e) {
			if (!flag) {
				flag = true;
				$sync3.trigger('to.owl.carousel', [e.item.index, duration, true]);
				flag = false;
			}
		});
	}


	//two-column-carousel
	if ($('.two-column-carousel').length) {
		$('.two-column-carousel').owlCarousel({
			loop:true,
			margin:30,
			nav:true,
			smartSpeed: 3000,
			autoplay: 4000,
			navText: [ '<span class="fa fa-caret-left"></span>', '<span class="fa fa-caret-right"></span>' ],
			responsive:{
				0:{
					items:1
				},
				480:{
					items:1
				},
				600:{
					items:1
				},
				800:{
					items:2
				},
				1024:{
					items:2
				}
			}
		});
	}


	//two-column-carousel
    if ($('.subsidiaries-carousel').length) {
        $('.subsidiaries-carousel').owlCarousel({
            loop:true,
            margin:20,
            dots:false,
            nav:true,
            animateOut: 'slideOutDown',
            animateIn: 'slideInDown',
            smartSpeed: 5000,
            autoplay: true,
            active: true,
            //navText: [ '<span class="fa fa-caret-left"></span>', '<span class="fa fa-caret-right"></span>' ],
            navText: [ '<span class="fa fa-arrow-left"></span>', '<span class="fa fa-arrow-right"></span>' ],
            responsive:{
                0:{
                    items:1
                },
                480:{
                    items:1
                },
                600:{
                    items:1
                },
                800:{
                    items:1
                },
                1024:{
                    items:1
                }
            }
        });
    }


	if ($('.one-column-carousel').length) {
		$('.one-column-carousel').owlCarousel({
			loop:true,
			margin:0,
			nav:true,
			smartSpeed: 2000,
			autoplay: false,
			active: true,
			//navText: [ '<span class="fa fa-caret-left"></span>', '<span class="fa fa-caret-right"></span>' ],
			navText: [ '<span class="fa fa-angle-left"></span>', '<span class="fa fa-angle-right"></span>' ],
			responsive:{
				0:{
					items:1
				},
				480:{
					items:1
				},
				600:{
					items:1
				},
				800:{
					items:1
				},
				1024:{
					items:1
				}
			}
		});
	}
    //award-carousel
if ($('.award-carousel').length) {
		$('.award-carousel').owlCarousel({
			loop:true,
			margin:0,
			nav:true,
			smartSpeed: 2000,
			autoplay: true,
			active: true,
			//navText: [ '<span class="fa fa-caret-left"></span>', '<span class="fa fa-caret-right"></span>' ],
			navText: [ '<span class="fa fa-angle-left"></span>', '<span class="fa fa-angle-right"></span>' ],
			responsive:{
				0:{
					items:1
				},
				480:{
					items:1
				},
				600:{
					items:1
				},
				800:{
					items:1
				},
				1024:{
					items:1
				}
			}
		});
	}


	// clients-carousel
	if ($('.clients-carousel').length) {
		$('.clients-carousel').owlCarousel({
			loop:true,
			margin:30,
			nav:false,
			smartSpeed: 3000,
			autoplay: true,
			navText: [ '<span class="flaticon-left"></span>', '<span class="flaticon-right"></span>' ],
			responsive:{
				0:{
					items:1
				},
				480:{
					items:2
				},
				600:{
					items:3
				},
				800:{
					items:4
				},
				1200:{
					items:5
				}

			}
		});
	}


	//Add One Page nav
	if($('.scroll-nav').length) {
		$('.scroll-nav').onePageNav();
	}


	//Progress Bar
	if ($('.count-bar').length) {
		$('.count-bar').appear(function(){
			var el = $(this);
			var percent = el.data('percent');
			$(el).css('width',percent).addClass('counted');
		},{accY: -50});

	}


	//Search Popup
	if($('#search-popup').length){

		//Show Popup
		$('.search-toggler').on('click', function() {
			$('#search-popup').addClass('popup-visible');
		});
		$(document).keydown(function(e){
	        if(e.keyCode === 27) {
	            $('#search-popup').removeClass('popup-visible');
	        }
	    });
		//Hide Popup
		$('.close-search,.search-popup .overlay-layer').on('click', function() {
			$('#search-popup').removeClass('popup-visible');
		});
	}


	// page direction
	function directionswitch() {
	  	if ($('.page_direction').length) {

	    	$('.direction_switch button').on('click', function() {
			   $('body').toggleClass(function(){
			      return $(this).is('.rtl, .ltr') ? 'rtl ltr' : 'rtl';
			  })
			});
	  	};
	}


	// pieChart RoundCircle
	function expertizeRoundCircle () {
		var rounderContainer = $('.piechart');
		if (rounderContainer.length) {
			rounderContainer.each(function () {
				var Self = $(this);
				var value = Self.data('value');
				var size = Self.parent().width();
				var color = Self.data('fg-color');

				Self.find('span').each(function () {
					var expertCount = $(this);
					expertCount.appear(function () {
						expertCount.countTo({
							from: 1,
							to: value*100,
							speed: 3000
						});
					});

				});
				Self.appear(function () {
					Self.circleProgress({
						value: value,
						size: 170,
						thickness: 20,
						emptyFill: '#e7f0f8',
						animation: {
							duration: 3000
						},
						fill: {
							color: color
						}
					});
				});
			});
		};
	}


	/*$(document).ready(function() {
      $('select:not(.ignore)').niceSelect();
    });*/


    //Sortable Masonary with Filters
	function enableMasonry() {
		if($('.sortable-masonry').length){

			var winDow = $(window);
			// Needed variables
			var $container=$('.sortable-masonry .items-container');
			var $filter=$('.filter-btns');

			$container.isotope({
				filter:'*',
				 masonry: {
					columnWidth : '.masonry-item.small-column'
				 },
				animationOptions:{
					duration:500,
					easing:'linear'
				}
			});


			// Isotope Filter
			$filter.find('li').on('click', function(){
				var selector = $(this).attr('data-filter');

				try {
					$container.isotope({
						filter	: selector,
						animationOptions: {
							duration: 500,
							easing	: 'linear',
							queue	: false
						}
					});
				} catch(err) {

				}
				return false;
			});


			winDow.on('resize', function(){
				var selector = $filter.find('li.active').attr('data-filter');

				$container.isotope({
					filter	: selector,
					animationOptions: {
						duration: 500,
						easing	: 'linear',
						queue	: false
					}
				});
			});


			var filterItemA	= $('.filter-btns li');

			filterItemA.on('click', function(){
				var $this = $(this);
				if ( !$this.hasClass('active')) {
					filterItemA.removeClass('active');
					$this.addClass('active');
				}
			});
		}
	}

	enableMasonry();


	/*	=========================================================================
	When document is Scrollig, do
	========================================================================== */

	jQuery(document).on('ready', function () {
		(function ($) {
			// add your functions
			directionswitch();
		})(jQuery);
	});



	/* ==========================================================================
   When document is Scrollig, do
   ========================================================================== */

	$(window).on('scroll', function() {
		headerStyle();
	});



	/* ==========================================================================
   When document is loaded, do
   ========================================================================== */

	$(window).on('load', function() {
		handlePreloader();
		expertizeRoundCircle ();
		enableMasonry();
	});



})(window.jQuery);


// ========================accebility.js========================

		
// picker buttton
 
const skipLinksWrapper = document.getElementById('skip-links-wrapper');
const closeAccess = document.getElementById('close-access');
const openAccessibility = document.getElementById('open-accessibility');
const accessibilityButtons = document.querySelector('#accessibility .accessibility-buttons')
const skipAccessibility = document.getElementById('skip-contents');
const goAccessibility = document.getElementById('go-accessibility')
const btns = [skipAccessibility,goAccessibility, closeAccess];
btns.forEach(btn => {
    btn.addEventListener('focus', e => {
        skipLinksWrapper.style.top = 0;
		skipLinksWrapper.style.display = 'block'
		//alert(1);
    });
    btn.addEventListener('focusout', e => {
        skipLinksWrapper.style.top = '-1000px';
		skipLinksWrapper.style.display = 'none'
		//alert(1);
    });

	
});

closeAccess.addEventListener('click', e => {
    skipLinksWrapper.style.top = '-1000px';
	skipLinksWrapper.style.display = 'none'
});

const choosecolor = document.querySelector('#choose_color');
const qmenubtns = document.querySelector('.picker_close .qmenu-btn');
const buttonPressed = (e) => {
   choosecolor.classList.toggle('position');
    if(jQuery('.picker_close .qmenu-btn').hasClass('fa-wheelchair')){
   jQuery('.picker_close .qmenu-btn').removeClass('fa-wheelchair');
   jQuery('.picker_close .qmenu-btn').addClass('fa-times');
   jQuery('.accessibilitybody').css('display', 'block');
   } else {
   jQuery('.picker_close .qmenu-btn').addClass('fa-wheelchair');
   jQuery('.picker_close .qmenu-btn').removeClass('fa-times');
   jQuery('.accessibilitybody').css('display', 'none');
   }
}
goAccessibility.addEventListener("click", buttonPressed);



jQuery(".picker_close").click(function(){
       
 //jQuery(".tooltip-inner").toggleClass("position");
 jQuery('.accessibilitybody').css('display', 'block');
 //jQuery('.ui-tooltip').hide();
 //jQuery('[data-toggle="tooltip"]').tooltip("hide");
 //alert(1);
 //jQuery('[data-toggle="tooltip"]').tooltip();
   jQuery("#choose_color").toggleClass("position");
  
   if(jQuery('.picker_close .qmenu-btn').hasClass('fa-wheelchair')){
   jQuery('.picker_close .qmenu-btn').removeClass('fa-wheelchair');
   jQuery('.picker_close .qmenu-btn').addClass('fa-times');
   } else {
	
   jQuery('.picker_close .qmenu-btn').addClass('fa-wheelchair');
   jQuery('.picker_close .qmenu-btn').removeClass('fa-times');
   jQuery('.accessibilitybody').hide();
   }

});


jQuery("#decreaseFontSize").click(function(){

 var resizable_elements=$("a,p,span,ul,ol,h1,h2,h3,h4,h5,h6,td,th");
 resizable_elements.each(function() {
   var b = parseInt($(this).css("font-size"));
   if (b > 12) {
     $(this).css("font-size", parseInt(b - 1) + "px", "important");
   console.log($(this));
   }
 });
 //toggle button highlight
});
jQuery("#increaseFontSize").click(function(){

 var resizable_elements=$("a,p,span,ul,ol,h1,h2,h3,h4,h5,h6,td,th");
 resizable_elements.each(function() {
   if (!$(this).hasClass("sr screen-reader")) {
     var b = parseInt($(this).css("font-size"));
     $(this).css("font-size", parseInt(b + 1) + "px", "important")
   }
 });
 //toggle button highlight
});
var clicks = 0;
jQuery("#increaseTextspSize").click(function(){
 clicks += 1;
 var resizable_elements=$("a,p,span,ul,ol,h1,h2,h3,h4,h5,h6,td,th");
   resizable_elements.each(function() {
                  
     var b = parseInt($(this).css("letter-spacing"));
  //alert(b);
  if (b > 4) {
     $(this).css("letter-spacing", "", "!important");
   clicks = 0;
   //console.log($(this));
   }else{
     $(this).css("letter-spacing", parseInt(b + 1) + "px", "important")
    //$('#increaseTextspSize').html('Text Space+' + clicks);
  //  var spcounter=b+1;
   //alert($allSpace);
 //  var spcounter=parseInt(spcounter + 1);
   //alert(spcounter);
   //$("#increaseTextspSize").html('Space+'+spcounter);
  //$('#increaseTextspSize').html('Space+' + $allSpace);
  
   }
 });
 //toggle button highlight
});

var clicks = 0;
jQuery("#increaseLineSize").click(function(){
 clicks += 1;
 var resizable_elements=$("p,span,h1,h2,h3,h4,h5,h6,td,th");
   resizable_elements.each(function() {
                  
   var b = parseInt($(this).css("line-height"));
if (clicks == 8) {
// $(this).removeAttr("style");
$("p,span,h1,h2,h3,h4,h5,h6,td,th").css("line-height", "", "important")

// $('html').removeClass("guide");
//console.log($(this));
clicks = 0;
}else{
     $(this).css("line-height", parseInt(b + 1) + "px", "important")
  //  var spcounter=b+1;
   //alert($allSpace);
 //  var spcounter=parseInt(spcounter + 1);
   //alert(spcounter);
   //$("#increaseTextspSize").html('Space+'+spcounter);
  //$('#increaseLineSize').html('Line Height+' + clicks);
  
   }
 });
 //toggle button highlight
});


function highlightLinks(){
   $("a").each(function(){
   $(this).toggleClass("selected");
   });
   $( "#apHighlight" ).toggleClass("btnselected");
   
}

function underlineLinks(){
$("a").each(function(){
$(this).toggleClass("underline");
});
$( "#apUnderline" ).toggleClass("btnselected");
}



jQuery("#ahrfHighlight").click(function(){
   $("a").each(function(){
       $(this).toggleClass("selected");
       });
       $( "#ahrfHighlight" ).toggleClass("btnselected");

   if(!$($("#ahrfHighlight input")).is(':checked')) {
   $("#ahrfHighlight input").prop("checked", true);
   }else{
   $("#ahrfHighlight input").prop("checked", false);
   }


});   

jQuery("#ahrlineheight").click(function(){
$("li,p").each(function(){
$(this).toggleClass("selected");
});


$( "#ahrlineheight" ).toggleClass("btnselected");

if(!$($("#ahrlineheight input")).is(':checked')) {
$("#ahrlineheight input").prop("checked", true);
}else{
$("#ahrlineheight input").prop("checked", false);
}


});   

jQuery("#Dyslexia").click(function(){
$("li,p,a").each(function(){
$(this).toggleClass("dyslexiafont");
});


$( "#Dyslexia" ).toggleClass("btnselected");

if(!$($("#Dyslexia input")).is(':checked')) {
$("#Dyslexia input").prop("checked", true);
}else{
$("#Dyslexia input").prop("checked", false);
}


});  




jQuery("#Monochrome").click(function(){
   $('html').toggleClass("monochrome");
   $("img").each(function(){
       $(this).toggleClass("grayscale");
  });
  $( "#Monochrome").toggleClass("btnselected");

  if (!$($("#Monochrome input")).is(':checked')) {
  $("#Monochrome input").prop("checked", true);
  }else{
   $("#Monochrome input").prop("checked", false);
  }
  
});   

jQuery("#invertImages").click(function(){
   $("img").each(function(){
       $(this).toggleClass("inverted");
      
  });
  $('html').toggleClass("inverted");

  $("#invertImages" ).toggleClass("btnselected");
  // $("#invertImages input[type='checkbox']").prop("checked", true);
//alert(1);
  if(!($("#invertImages input[type='checkbox']")).is(':checked')) {
   
   $("#invertImages input[type='checkbox']").prop("checked", true);
   }else{
   $("#invertImages input[type='checkbox']").prop("checked", false);
   }

}); 

jQuery("#readingguidex").click(function(){

  $('html').toggleClass("guide");
  $( "#readingguide" ).toggleClass("btnselected");
if(!($("#invertImages input[type='checkbox']")).is(':checked')) {

$("#invertImages input[type='checkbox']").prop("checked", true);
}else{
$("#invertImages input[type='checkbox']").prop("checked", false);
}

}); 

jQuery("#bigCursor").click(function(){
   $('html').toggleClass("bigCursor");
  $( "#bigCursor" ).toggleClass("btnselected");
  if(!$($("#bigCursor input")).is(':checked')) {
   $("#bigCursor input").prop("checked", true);
   }else{
   $("#bigCursor input").prop("checked", false);
   }
});  

jQuery("#readingguide").click(function(){
 
  //$( "#reading-guide" ).toggleClass("d-none");
  $('html').toggleClass("guide");
   $( "#readingguide" ).toggleClass("btnselected");
  //$("#reading_Guide").css("display", "block");
$(document).on('mousemove', function(e){
     $('#reading_Guide').css('top', e.pageY-15);
     });
 document.getElementById('reading_Guide').style.display = "block";

 if(!($("#readingguide input[type='checkbox']")).is(':checked')) {
 
 $("#readingguide input[type='checkbox']").prop("checked", true);
 }else{
 $("#readingguide input[type='checkbox']").prop("checked", false);
 }


   
}); 




jQuery("#accecesbilitclean").click(function(){

var resizable_elements=$("a,p,span,ul,ol,h1,h2,h3,h4,h5,h6,td,th");
resizable_elements.each(function() {
var b = parseInt($(this).css("font-size"));
$(this).css("font-size", "", "important");
$(this).css("line-height", "", "important");
$(this).css("letter-spacing", "", "important");
});

$("a").each(function(){
$(this).removeClass("selected");

});		


$("img").each(function(){
$(this).removeClass("grayscale");
$(this).removeClass("invert");
});
$( "#Monochrome").removeClass("grayscale");
$( "#bigCursor").removeClass("bigCursor");
$('html').removeClass("bigCursor");
$( "#invertImages").removeClass("inverted");
$( "#ahrfHighlight").removeClass("btnselected");
$('html').removeClass("inverted");
$('html').removeClass("monochrome");
//$("#ahrfHighlight input").prop("checked", false);
$('html').removeClass("guide");
$("input[type='checkbox']").prop("checked", false);
$("li a").removeClass("btnselected");
});


// End picker buttton
  

// end accessibility
