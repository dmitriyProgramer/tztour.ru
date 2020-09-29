$(document).ready(function(e) {
	if( /test=true/.test( location.search ) ){
		setTimeout(insert_new_slider, 2000);
	}
});

insert_new_slider = function(){
	o ={img: [], title: []};
	$('#main img').each(function(){
	    o.img[o.img.length] = $(this).attr('src');
	    o.title[o.title.length] = $(this).parent().parent().find('.entry-title.title-font').text().replace(/\s+/g, ' ');
	});

	$("header").after('<div class="new_slider" style="margin-top: 30px;"></div>');
	$(".new_slider").append('<div class="container"></div>');
	//$(".new_slider .container").css({"height":"151px", "border":"solid"});
	$(".new_slider .container").append('<div id="new_slider"></div>');

	for( i in o.img ){
	    $("#new_slider").append('<div class="sl-item" data-insert="'+i+'"></div>');
	    $("#new_slider .sl-item").css({"margin":"0 15px"});
	    $('#new_slider [data-insert="'+i+'"]').append('<img src="'+o.img[i]+'" alt="'+o.title[i]+'">');
	}

	$('#new_slider').slick({
	  infinite: true,
	  slidesToShow: 4,
	  slidesToScroll: 1,
	  //autoplay: true,
	  autoplaySpeed: 2000,
	  adaptiveHeight: true,
	  centerPadding: '30px',
	  responsive: [
	    {
	      breakpoint: 992,
	      settings: {
	        slidesToShow: 3
	      }
	    },
	    {
	      breakpoint: 768,
	      settings: {
	        slidesToShow: 2
	      }
	    },
	    {
	      breakpoint: 480,
	      settings: {
	        slidesToShow: 1
	      }
	    }
	  ]
	});
}
