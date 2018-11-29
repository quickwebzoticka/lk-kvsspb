$(document).ready(function() {
	console.log('Hello there!');
	$('.select').SumoSelect()

	$(document).on('click', '.input__checkbox', function() {
		var img, imgsrc,
			checkbox = $(this).find('input[type="checkbox"]');

		if ($(this).parent('.input-with-edit').find('.email-switcher').length > 0) {
			img = $('.email-switcher');
			imgsrc = img.attr('src');
			if (imgsrc == 'img/email.svg' && !checkbox.is(':checked')) {
				img.attr('src', 'img/email-off.svg');
			} else {
				img.attr('src', 'img/email.svg');
			}
		} 
		if ($(this).parent('.input-with-edit').find('.phone-switcher').length > 0) {
			img = $('.phone-switcher');
			imgsrc = img.attr('src');
			if (imgsrc == 'img/phone.svg' && !checkbox.is(':checked')) {
				img.attr('src', 'img/phone-off.svg');
			} else {
				img.attr('src', 'img/phone.svg');
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
});