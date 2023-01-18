$(document).ready(function(){ 
$('.slider-wrapper').slick({
  arrows: true,
  dots: true,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
  speed: 2000,
  });
$('.ex-card').slick({
  arrows: true,
  slidesToScroll: 1,
  slidesToShow: 3,
  autoplay: true,
  autoplaySpeed: 2000,
  speed: 2000,
  responsive: [
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
  });
})
$('.cod-wrapper').slick({
  arrows: false,
  dots: false,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
  speed: 2000,
  });


$('.footer-title').click(function (){
  $(this).toggleClass('active');
  $('.line',this).toggleClass('active_active');
});
$('.menu-item').click(function (){
  $(this).toggleClass('active');
  $('.line-line',this).toggleClass('active_active');
  
});

$('.user').click(function (){
  $(this).toggleClass('active');
  $('.line-line-line',this).toggleClass('active_active');
});
$('.technical-title').click(function (){
  $('.technical-wrap-list').toggleClass('act');
  $('.line',this).toggleClass('active_active_active');
});
jQuery(function($){
	$(document).mouseup( function(e){ 
		var div = $( ".menu-item" ); 
		if ( !div.is(e.target) 
		    && div.has(e.target).length === 0 ) { 
			// div.hide(); // скрываем его
      $('.menu-item').removeClass('active')
      $('.line-line').removeClass('active_active');
		}
	});
});
jQuery(function($){
	$(document).mouseup( function(e){ 
		var div = $( ".user" ); 
		if ( !div.is(e.target) 
		    && div.has(e.target).length === 0 ) { 
      $('.user').removeClass('active')
       $('.line-line-line').removeClass('active_active');
		}
	});
});
jQuery(function($){
	$(document).mouseup( function(e){ 
		var div = $( ".footer-title" ); 
		if ( !div.is(e.target) 
		    && div.has(e.target).length === 0 ) { 
      $('.footer-title').removeClass('active')
      $('.line').removeClass('active_active')
		}
	});
});