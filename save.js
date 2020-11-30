$(document).ready(function(e) {
	if( /test=true/.test( location.search ) ){
		$('head').append('<link rel="stylesheet" type="text/css" href="wp-content/themes/nitro/assets/css/new_slider.css"/>');
		$('head').append('<script type="text/javascript" src="wp-content/themes/nitro/assets/js/new_slider.js"></script>');
		$('head').append('<link rel="stylesheet" type="text/css" href="wp-content/themes/nitro/assets/css/call_style.css"/>');
		$('head').append('<link rel="stylesheet" type="text/css" href="wp-content/themes/nitro/assets/css/call_style_2.css"/>');
		$('head').append('<script type="text/javascript" src="wp-content/themes/nitro/assets/js/key_phone.js"></script>');
		$('head').append('<script type="text/javascript" src="//tourvisor.ru/module/init.js"></script>');
	}
});
