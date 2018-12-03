$(document).ready(function() {
	console.log('Hello there!');
	$('.select').SumoSelect()

	$(document).on('click', '.input__checkbox', function() {
		var img, imgsrc,
			checkbox = $(this).find('input[type="checkbox"]');

		if ($(this).parent('.input-with-edit').find('.email-switcher').length > 0) {
			img = $('.email-switcher');
			imgsrc = img.attr('src');
			if (imgsrc == '/lk/img/email.svg' && !checkbox.is(':checked')) {
				img.attr('src', '/lk/img/email-off.svg');
			} else {
				img.attr('src', '/lk/img/email.svg');
			}
		} 
		if ($(this).parent('.input-with-edit').find('.phone-switcher').length > 0) {
			img = $('.phone-switcher');
			imgsrc = img.attr('src');
			if (imgsrc == '/lk/phone.svg' && !checkbox.is(':checked')) {
				img.attr('src', '/lk/img/phone-off.svg');
			} else {
				img.attr('src', '/lk/img/phone.svg');
			}
		}
	});

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
});

