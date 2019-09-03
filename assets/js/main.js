/**
 *
 * -----------------------------------------------------------------------------
 *
 * Template : AGN - Agency Solution
 * Author : themeeverest
 * Author URI : http://themeeverest.net/
 *
 * -----------------------------------------------------------------------------
 *
 **/
(function ($, window, document) {
	"use strict";
	/*---------------------*/
	/*  ActiveClass js
	/*---------------------*/
	var enterMouse = $('.service-area ul li');
	if (enterMouse.length) {
		function mouseEnter() {
			enterMouse.on('mouseenter', function (event) {
				$(this).addClass('active').siblings().removeClass('active');
				event.preventDefault();
			});
		}
		mouseEnter();
	}
	/*---------------------*/
	/*  Navbar Fixed js
	/*---------------------*/
	$('.navbar-nav li.dropdown').hover(function () {
		$(this).children('ul.dropdown-menu').stop(true, false, true).slideToggle(300);
	});
	var nav_offset_top = $('header').height();

	function navbarFixed() {
		if ($('.main-menu-area').length) {
			$(window).scroll(function () {
				var scroll = $(window).scrollTop();
				if (scroll >= nav_offset_top) {
					$(".main-menu-area").addClass("is-sticky");
				} else {
					$(".main-menu-area").removeClass("is-sticky");
				}
			});
		};
	};
	navbarFixed();
	/*---------------------*/
	/*  Main Slider js
	/*---------------------*/
	if ($.fn.owlCarousel) {
		/*---------------------*/
		/*  Home Carousel js
		/*---------------------*/
		var heroSlider = $('.slider-active');
		heroSlider.owlCarousel({
			items: 1,
			loop: true,
			animateIn: 'fadeIn',
			animateOut: 'fadeOut',
			smartSpeed: 1000,
			autoplayTimeout: 5000,
			mouseDrag: false,
			touchDrag: false,
			autoplay: true,
			dots: true,
			nav: true,
			navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
			responsive: {
				0: {
					items: 1,
				},
				480: {
					items: 1,
				},
				768: {
					items: 1,
				}
			}
		});
		heroSlider.on('translate.owl.carousel', function () {
			var layer = $("[data-animation]");
			layer.each(function () {
				var animation_name = $(this).data('animation');
				$(this).removeClass('animated ' + animation_name).css('opacity', '0');
			});
		});
		$("[data-delay]").each(function () {
			var animation_delay = $(this).data('delay');
			$(this).css('animation-delay', animation_delay);
		});
		$("[data-duration]").each(function () {
			var animation_duration = $(this).data('duration');
			$(this).css('animation-duration', animation_duration);
		});
		heroSlider.on('translated.owl.carousel', function () {
			var layer = heroSlider.find('.owl-item.active').find("[data-animation]");
			layer.each(function () {
				var animation_name = $(this).data('animation');
				$(this).addClass('animated ' + animation_name).css('opacity', '1');
			});
		});
		/*---------------------*/
		/*  Reviewer Carousel js
		/*---------------------*/
		var brandCarousel = $('.brand-logo');
		if (brandCarousel.length) {
			brandCarousel.owlCarousel({
				items: 2,
				autoPlay: true,
				loop: true,
				margin: 30,
				navSpeed: 800,
				nav: false,
				responsive: {
					0: {
						items: 2,
						nav: false
					},
					768: {
						items: 3,
						nav: false
					},
					992: {
						items: 4,
					},
					1200: {
						items: 5,
					},
				}
			});
		}
		/*---------------------*/
		/*  Reviewer Carousel js
		/*---------------------*/
		var reviewertCarousel = $('.review-wraper');
		if (reviewertCarousel.length) {
			reviewertCarousel.owlCarousel({
				items: 2,
				autoPlay: true,
				loop: true,
				margin: 15,
				navSpeed: 800,
				nav: true,
				navText: ["<i class='flaticon-left-arrow'></i>", "<i class='flaticon-right-arrow'></i>"],
				responsive: {
					0: {
						items: 1,
						nav: true
					},
					768: {
						items: 2,
						nav: false
					},
					992: {
						items: 2,
					},
					1200: {
						items: 2,
					},
				}
			});
		}
	};
	/*---------------------*/
	/*  CounterUp js
	/*---------------------*/
	$('.counter').counterUp({
		delay: 10,
		time: 2000
	});
	/*----------------------*/
	/*  Portfolio Isotope
	/*----------------------*/
	function home_gallery() {
		if ($('.portfolio-inner').length) {
			$(".portfolio-inner").imagesLoaded(function () {
				$(".portfolio-inner").isotope({
					itemSelector: '.protfolio-item',
					layoutMode: 'masonry',
					percentPosition: true,
					columnWidth: 1,
				});
			});
		}
	}
	home_gallery();
	function portfolio_isotope() {
		if ($('.portfolio-filter ul li').length) {
			$(".portfolio-filter ul li").on('click', function () {
				$(".portfolio-filter ul li").removeClass("active");
				$(this).addClass("active");

				var selector = $(this).attr("data-filter");
				$(".portfolio-inner").isotope({
					filter: selector,
					animationOptions: {
						duration: 450,
						easing: "linear",
						queue: false,
					}
				});
				return false;
			});
		}
	}
	portfolio_isotope();
	/*---------------------*/
	/*  Fancybox js
	/*---------------------*/
	$("[data-fancybox]").each(function () {
		$(this).attr("data-caption", $(this).attr("title"));
	});
	$("[data-fancybox]").fancybox({
		arrows: true,
		infobar: true,
		toolbar: true,
	});
	$('.play-btn').fancybox({});
	/*---------------------*/
	/*  Totop Scroller js
	/*---------------------*/
	$(window).scroll(function () {
		if ($(this).scrollTop() > 1) {
			$('.back-to-top').addClass('show-back-to-top');
		} else {
			$('.back-to-top').removeClass('show-back-to-top');
		}
	});
	$('.back-to-top').click(function () {
		$('html, body').animate({
			scrollTop: 0
		}, 800);
		return false;
	});
	/*---------------------*/
	/*  Keyup js
	/*---------------------*/
	$('.js-input').keyup(function () {
		if ($(this).val()) {
			$(this).addClass('not-empty');
		} else {
			$(this).removeClass('not-empty');
		}
	});
	/*---------------------*/
	/*  Google Map js
	/*---------------------*/
	function goMap() {
		if ($('#map').length) {
			var map = new google.maps.Map(document.getElementById('map'), {
				center: {
					lat: 40.925372,
					lng: -74.276544
				},
				zoom: 13,
				scrollwheel: false,
				styles: [{
						"featureType": "all",
						"elementType": "labels.text.fill",
						"stylers": [{
								"saturation": 36
							},
							{
								"color": "#000000"
							},
							{
								"lightness": 40
							}
						]
					},
					{
						"featureType": "all",
						"elementType": "labels.text.stroke",
						"stylers": [{
								"visibility": "on"
							},
							{
								"color": "#000000"
							},
							{
								"lightness": 16
							}
						]
					},
					{
						"featureType": "all",
						"elementType": "labels.icon",
						"stylers": [{
							"visibility": "off"
						}]
					},
					{
						"featureType": "administrative",
						"elementType": "geometry.fill",
						"stylers": [{
								"color": "#000000"
							},
							{
								"lightness": 20
							}
						]
					},
					{
						"featureType": "administrative",
						"elementType": "geometry.stroke",
						"stylers": [{
								"color": "#000000"
							},
							{
								"lightness": 17
							},
							{
								"weight": 1.2
							}
						]
					},
					{
						"featureType": "landscape",
						"elementType": "geometry",
						"stylers": [{
								"color": "#000000"
							},
							{
								"lightness": 20
							}
						]
					},
					{
						"featureType": "poi",
						"elementType": "geometry",
						"stylers": [{
							"visibility": "off"
						}]
					},
					{
						"featureType": "road.highway",
						"elementType": "geometry.fill",
						"stylers": [{
								"color": "#000000"
							},
							{
								"lightness": 17
							}
						]
					},
					{
						"featureType": "road.highway",
						"elementType": "geometry.stroke",
						"stylers": [{
								"color": "#000000"
							},
							{
								"lightness": 29
							},
							{
								"weight": 0.2
							}
						]
					},
					{
						"featureType": "road.arterial",
						"elementType": "geometry",
						"stylers": [{
								"color": "#000000"
							},
							{
								"lightness": 18
							}
						]
					},
					{
						"featureType": "road.local",
						"elementType": "geometry",
						"stylers": [{
								"color": "#000000"
							},
							{
								"lightness": 16
							}
						]
					},
					{
						"featureType": "transit",
						"elementType": "geometry",
						"stylers": [{
								"color": "#000000"
							},
							{
								"lightness": 19
							}
						]
					},
					{
						"featureType": "water",
						"elementType": "geometry",
						"stylers": [{
								"color": "#000000"
							},
							{
								"lightness": 17
							}
						]
					}
				]
			});
			var beachMarker = new google.maps.Marker({
				position: {
					lat: 40.925372,
					lng: -74.276544
				},
				map: map,
				title: "",
				infoWindow: {
					content: ''
				}
			});
		};
	};
	jQuery(document).on('ready', function () {
		(function ($) {
			goMap();
		})(jQuery);
	});
	/*---------------------*/
	/*  Preloader js
	/*---------------------*/
	var prealoaderOption = $(window);
	prealoaderOption.on("load", function () {
		var preloader = jQuery('.preloader');
		var preloaderArea = jQuery('.preloader-wrap');
		preloader.fadeOut();
		preloaderArea.delay(350).fadeOut('slow');
	});
})(jQuery, window, document);