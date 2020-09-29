$(document).ready(function(e) {
	if( /test=true/.test( location.search ) ){
		$('head').append('<link rel="stylesheet" type="text/css" href="wp-content/themes/nitro/assets/css/new_slider.css"/>');
		$('head').append('<script type="text/javascript" src="wp-content/themes/nitro/assets/js/new_slider.js"></script>');
	}
});
