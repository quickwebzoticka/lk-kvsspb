function newPhotoPathLoad(elem) {
	var parent = $(elem).parents('.photo-wrapper'),
		value = $(elem).val();

	console.log(parent);
	parent.find('.text-descr').html(value);
}

$(document).ready(function() {

	var width = parseInt($('html').css('width'), 10);

	if (width >= 1200) {
		var swiper = new Swiper('.swiper-container', { //инициализация галлереи соседей по дому
	      slidesPerView: 4,
	      spaceBetween: 10,
	      loop: true,
	      navigation: {
	        nextEl: '.swiper-button-next',
	        prevEl: '.swiper-button-prev',
	      },
	    });
	    var swiperUseful = new Swiper('.swiper-container-useful', { //инициализация галлереи соседей по дому
	      slidesPerView: 4,
	      spaceBetween: 10,
	      loop: true,
	      navigation: {
	        nextEl: '.swiper-button-useful-next',
	        prevEl: '.swiper-button-useful-prev',
	      },
	    });
	}
	if (width < 1199){
		var swiper = new Swiper('.swiper-container', { //инициализация галлереи соседей по дому
	      slidesPerView: 3,
	      spaceBetween: 10,
	      loop: true,
	      navigation: {
	        nextEl: '.swiper-button-next',
	        prevEl: '.swiper-button-prev',
	      },
	    });
	    var swiperUseful = new Swiper('.swiper-container-useful', { //инициализация галлереи соседей по дому
	      slidesPerView: 3,
	      spaceBetween: 10,
	      loop: true,
	      navigation: {
	        nextEl: '.swiper-button-useful-next',
	        prevEl: '.swiper-button-useful-prev',
	      },
	    });
	}
	if (width < 991) {
		var swiper = new Swiper('.swiper-container', { //инициализация галлереи соседей по дому
	      slidesPerView: 2,
	      spaceBetween: 10,
	      loop: true,
	      navigation: {
	        nextEl: '.swiper-button-next',
	        prevEl: '.swiper-button-prev',
	      },
	    });
	    var swiperUseful = new Swiper('.swiper-container-useful', { //инициализация галлереи соседей по дому
	      slidesPerView: 2,
	      spaceBetween: 10,
	      loop: true,
	      navigation: {
	        nextEl: '.swiper-button-useful-next',
	        prevEl: '.swiper-button-useful-prev',
	      },
	    });
	}
	if (width < 805) {
		var swiper = new Swiper('.swiper-container', { //инициализация галлереи соседей по дому
	      slidesPerView: 1,
	      spaceBetween: 10,
	      loop: true,
	      navigation: {
	        nextEl: '.swiper-button-next',
	        prevEl: '.swiper-button-prev',
	      },
	    });
	    var swiperUseful = new Swiper('.swiper-container-useful', { //инициализация галлереи соседей по дому
	      slidesPerView: 1,
	      spaceBetween: 10,
	      loop: true,
	      navigation: {
	        nextEl: '.swiper-button-useful-next',
	        prevEl: '.swiper-button-useful-prev',
	      },
	    });
	}
	var location = window.location.href,
		searchInputs = $('.search_input'),
		formPath = $('.search_bar').attr('action'),
		container = $('.contener-input');

	function searchBtn(){
		$('.search_input').remove();
		container.append(searchInputs[0]);
		$(document).on('click', '.search_bar__nav:not(.active)', function(){
			$('.search_input').remove();
			$(this).addClass('active').siblings().removeClass('active');
			let a = $(this).index();
			console.log(searchInputs[a]);
			console.log(location);
			console.log(formPath);
			console.log(container);

			container.append(searchInputs[a]);
			$('.search_bar .kvs-select').css('width', '200px !important');
			$('.search_bar').attr('action', '/neighbors/search/');
			if (a == 2) {
				formPath = location;
				$('.search_bar').attr('action', formPath);
				$('.search_bar .kvs-select').css('width', '100% !important');
			};
			// $('.search_input').val('').removeClass('active').eq($(this).index()).addClass('active');
			return false;
		});
	};
	searchBtn();

	
});