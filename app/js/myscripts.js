$(document).ready(function() {
	console.log('Hello there!');
	$('.select').SumoSelect();

	$(document).on('click', '.phone-switcher-tumblr', function(e){
		console.log($('.phone-switcher').attr('src'));
		if ($('.phone-switcher').attr('src') == 'img/phone-off.svg') {
			$('.phone-switcher').attr('src', 'img/phone.svg');
			$(this).find('input[type="checkbox"]').prop('checked', true);
		} else {
			$('.phone-switcher').attr('src', 'img/phone-off.svg');
			$(this).find('input[type="checkbox"]').prop('checked', false);
		}
		return false;
	})
	$(document).on('click', '.email-switcher-tumblr', function(e){
		console.log($('.email-switcher').attr('src'));
		if ($('.email-switcher').attr('src') == 'img/email-off.svg') {
			$('.email-switcher').attr('src', 'img/email.svg');
			$(this).find('input[type="checkbox"]').prop('checked', true);
		} else {
			$('.email-switcher').attr('src', 'img/email-off.svg');
			$(this).find('input[type="checkbox"]').prop('checked', false);
		}
		return false;
	})

	$(document).on('click', '.visibility', function(){
		$('#edit_visibility').slideDown();
	})
	$(document).click( function(event){
		if ( $(event.target).closest('#edit_visibility').length || $(event.target).closest('.visibility').length ) 
   			return;

	  $('#edit_visibility').slideUp();
	  event.stopPropagation();
	});
	var serviceWrapper = $('.service__wrapper .right-side__container'),
		familyWrapper  = $('.family-wrapper');

	$(document).on('click', '.service__wrapper .photo-wrapper__plus', function(){
		serviceWrapper.clone()
					  .appendTo($('.service__wrapper .right-side'));
		$('.service__wrapper .right-side__container:last').find('input:not([type="submit"]), textarea').val('');
					  
	});
	$(document).on('click', '.add-family-btn', function(){
		familyWrapper.clone().hide().appendTo($('.third-screen')).show();
	});
	$(document).on('click', '.mob-hamburger', function(){
		$('.ul_out').slideToggle(400);
	});
});

