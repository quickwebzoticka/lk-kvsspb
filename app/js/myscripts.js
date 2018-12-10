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
	let serviceWrapper = $('.service__wrapper .right-side__container'),
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

	function searchBtn(){
		$(document).on('click', '.search_bar__nav:not(.active)', function(){
			$(this).addClass('active').siblings().removeClass('active');
			$('.search_input').val('').removeClass('active').eq($(this).index()).addClass('active');
			return false;
		});
	};
	searchBtn();

	function hideBlock(block, blockEdit) {
		$(block).slideUp(700, function(){
			$(blockEdit).slideDown(700, function() {
				$(blockEdit).addClass('active');
			})
		});
		// $(blockEdit).addClass('active');
	};

	function showBlock(block, blockEdit) {
		$(blockEdit).slideUp(700, function(){
			$(blockEdit).removeClass('active');
			$(block).slideDown(700);
		})
		
		
	};

	$(document).on('click', '.btn-edit-trigger-family', function(){
		hideBlock('.family-block-wrapper', '.family-block-edit');
	})
	$(document).on('click', '.btn-edit-trigger-personal', function(e){
		 e.preventDefault();
		 hideBlock('.personal-block', '.personal-block-edit');
	})
	$(document).on('click', '.btn-edit-trigger-service', function(){
		hideBlock('.service-block', '.service-block-edit');
	})
	$(document).on('click', '.family-block-edit.active input[type="submit"]:not(.add-family-btn)', function(e){
		e.preventDefault();
		showBlock('.family-block-wrapper', '.family-block-edit');
	})
	$(document).on('click', '.service-block-edit.active input[type="submit"]', function(e){
		e.preventDefault();
		showBlock('.service-block', '.service-block-edit');
	})
	$(document).on('click', '.personal-block-edit.active input[type="submit"]', function(e){
		e.preventDefault();
		showBlock('.personal-block', '.personal-block-edit');
	})
	$(document).on('click', '.add-family-btn', function(e){
		e.preventDefault();
		let a = $('.family-block__member').eq(0).clone().hide();
		a.find('input:not([type="submit"]), textarea').val('');
		$('.family-block__wrapper-member').prepend(a);
		a.slideDown(700);
	})
	$(document).on('click', '.btn-service-trigger', function(e){
		e.preventDefault();
		let a = $('.service-block__fields').eq(0).clone().hide();
		$('.service-block__wrapper').prepend(a);
		a.slideDown(700);
	});
});

