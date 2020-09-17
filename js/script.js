$(document).ready(function() {
    // Анимация стратового окна
    setTimeout(function() {
		$('.start-screen').css({'-webkit-transform': 'translateX(-100%)',
								'-moz-transform': 'translateX(-100%)',
								'-o-transform': 'translateX(-100%)',
								'transform': 'translateX(-100%)'});
	}, 1000);
    // Анимация тумана
	setTimeout(function() {
		$('.bk-img_1-2').css('opacity', '1');
	}, 2000);
    // Функции кнопок открытия и закрытия меню
	$('.button-menu').on('click', function() {
		$('.menu').addClass('active');
		$('.menu-block, .contacts-block').addClass('visible');
	});
	$('.close-button').on('click', function() {
		$('.menu-block, .contacts-block').removeClass('visible');
		$('.menu').removeClass('active');
	});
	// Закрытие меню при нажатии за его пределами
	$(document).mouseup(function(e) {
		if (!$('.menu').is(e.target) && $('.menu').has(e.target).length === 0) {
			$('.menu-block, .contacts-block').removeClass('visible');
			$('.menu').removeClass('active');
		};
	});
});