$(document).ready(function() {
	// Пауза для анимации на 3-ем экране
	$('.summer-to-autumn').css({'-webkit-animation-play-state': 'paused',
								'-moz-animation-play-state': 'paused',
								'-o-animation-play-state': 'paused',
								'animation-play-state': 'paused'});
    /* -----Анимация-----*/
	// Отслеживание события прокручивания колесика мыши
	$('body').on('mousewheel', function(event) {
		var 
			pages = $('.container'), // Все существующие страницы сайта
			activePage = pages.filter('.show'), // Страница с классом .show
			movedLeaves = activePage.children('.moved-leaves'), // Все блоки с листьями на активной странице
            prevMovedLeaves = activePage.prev().find('div.moved-leaves'), // Все блоки с листьями на предыдущей странице
            nextMovedLeaves = activePage.next().find('div.moved-leaves'), // Все блоки с листьями на следующей странице
            backZoom = activePage.find('div.back-zoom'), // Все блоки с масштабируемыми изображениями на активной странице
			prevBackZoom = activePage.prev().find('div.back-zoom'), // Все блоки с масштабируемыми изображениями на предыдущей странице
            titles = activePage.children('.title'), // Все элементы с текстом на активной странице
            prevTitles = activePage.prev().find('section.title'), // Все элементы с текстом на предыдущей странице
			nextTitles = activePage.next().find('section.title'); // Все элементы с текстом на следующей странице
        // Отслеживание скролла колесиком вниз
        if (event.deltaY < 0) {
            // Скрипт для общих правил анимации
			if (pages.hasClass('show')) {
				movedLeaves.addClass('parallax-in');
				titles.addClass('move-in');
				prevBackZoom.addClass('zoom-out');
				prevTitles.addClass('move-out');
				prevMovedLeaves.removeClass('parallax-in').addClass('parallax-out');
			};
            // Функция для смены логотипа при переходе на 2-й экран
			if ($('.page-1').next().hasClass('show')) {
				$('div.logo').addClass('green');
			};
            // Функция для анимации элементов 4-го экрана
			if ($('.page-4').hasClass('show')) {
				$('.videoscreen').addClass('screen-in');
				$('.play-button').addClass('button-in');
			};
			// Функция для анимации элементов 5-го экрана
			if ($('.page-5').hasClass('show')) {
				$('.back_5-2').addClass('parallax-in');
				$('.go-to-collection').addClass('move-in-1st');
				$('.ttl-5').addClass('move-in-2nd');
				$('h2.move-h2').addClass('move-in-3rd');
            };
        // Отслеживание скролла колесиком вверх
		} else if (event.deltaY > 0) {
            // Скрипт для общих правил анимации
			if (pages.hasClass('show')) {
				movedLeaves.removeClass('parallax-out').addClass('parallax-in');
				nextMovedLeaves.removeClass('parallax-in');
				titles.removeClass('move-out');
				nextTitles.removeClass('move-in');
				backZoom.removeClass('zoom-out').addClass('zoom-in');
			};
            // Функция для смены логотипа при переходе на 1-й экран
			if ($('.page-2').prev().hasClass('show')) {
				$('div.logo').removeClass('green');
			};
            // Функция для анимации элементов 4-го экрана при переходе с него на 3-й экран
			if ($('.page-4').prev().hasClass('show')) {
				$('.videoscreen').addClass('screen-out');
                $('.play-button').addClass('button-out');
                // Обнуление стилей переходов для элементов 4-го экрана с необоходимой задержкой
				setTimeout(function() {
					$('.videoscreen').removeClass('screen-in screen-out');
					$('.play-button').removeClass('button-in button-out');
				}, 1550);
			};
            // Функция для анимации элементов 5-го экрана при переходе с него на 4-й экран 
			if ($('.page-5').prev().hasClass('show')) {
				$('h2.move-h2').removeClass('move-in-3rd');
				$('.ttl-5').removeClass('move-in-2nd');
				$('.go-to-collection').removeClass('move-in-1st');
				$('.back_5-2').removeClass('parallax-in');
			};
		};
		// Скрипт для анимации смены лета и осени на 3-ем экране
		if ($('.page-3').hasClass('show')) {
			setTimeout(function() {
				$('.summer-to-autumn').css({'-webkit-animation-play-state': 'running',
											'-moz-animation-play-state': 'running',
											'-o-animation-play-state': 'running',
											'animation-play-state': 'running'});
			}, 1500);
		// Остановка анимации при уходе с 3-го экрана
		} else {
			$('.summer-to-autumn').css({'-webkit-animation-play-state': 'paused',
										'-moz-animation-play-state': 'paused',
										'-o-animation-play-state': 'paused',
										'animation-play-state': 'paused'});
		};
    });
});