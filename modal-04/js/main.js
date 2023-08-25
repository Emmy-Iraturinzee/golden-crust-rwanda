(function($) {
//whatsapp link
	window.location = 'whatsapp://send?text='+encodeURIComponent(imageURL);
	var fakeLink = document.createElement('a');
fakeLink.setAttribute('href', 'whatsapp://send?text='+encodeURIComponent(imageURL));
fakeLink.setAttribute('data-action', 'share/whatsapp/share');
fakeLink.click();
// singin up
const signUpButton = document.getElementById('signUp');
const signInButton = document.getElementById('signIn');
const container = document.getElementById('container');

signUpButton.addEventListener('click', () => {
	container.classList.add("right-panel-active");
});

signInButton.addEventListener('click', () => {
	container.classList.remove("right-panel-active");
});

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