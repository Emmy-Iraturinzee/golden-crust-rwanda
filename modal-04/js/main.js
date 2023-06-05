(function($) {

	window.location = 'whatsapp://send?text='+encodeURIComponent(imageURL);
	var fakeLink = document.createElement('a');
fakeLink.setAttribute('href', 'whatsapp://send?text='+encodeURIComponent(imageURL));
fakeLink.setAttribute('data-action', 'share/whatsapp/share');
fakeLink.click();

	"use strict";

	$('[data-toggle="tooltip"]').tooltip()

	// $('#exampleModalCenter').modal('show')

	var fullHeight = function() {

		$('.js-fullheight').css('height', $(window).height());
		$(window).resize(function(){
			$('.js-fullheight').css('height', $(window).height());
		});

	};
	fullHeight();

})(jQuery);