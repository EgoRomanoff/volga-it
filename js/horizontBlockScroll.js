$(document).ready(function() {
    // Скрипт для реализации горизонтльного блочного скролла
    var
        screen = 0,                      // Для рассчета позиции для перемещения 
        pages = $('.container'),         // Все существующие страницы сайта
        inscroll = false;                // Проводится ли скролл или нет
    // Первой странице по умолчанию устанавливается класс .show
    $('.container:first-child').addClass('show');
    // Отслеживание события прокручивания колесика мыши
    $('body').on('mousewheel', function(event) {
        var activePage = pages.filter('.show');
        // Предотвращение множественных событий скролла (большое изменение параметра deltaY)
		if (!inscroll) {
            inscroll = true;
            // При прокрутке вниз увеличить на единицу переменную screen, и наооборот
			if (event.deltaY == -1) {
                // Проверка наличия блока после активного        
                if (activePage.next().length) {
                    screen++;
                }
			} else if (event.deltaY == 1){
                // Проверка наличия блока перед активным
                if (activePage.prev().length) {
                    screen--;
                }
			}
        }
        // Расчет параметра для анимации скролла
        var position = (-screen * 100) + '%';
        // Удаление класса .show у всех элементов кроме активного
        pages.eq(screen).addClass('show').siblings().removeClass('show');
        // Проведение анимации скролла путем изменения css-свойства "left"
		$('.main-wrapper').css('left', position);
        // Возврат переменной начального значения после выполнения анимации скролла
		setTimeout(function() {
			inscroll = false;
		}, 1700);
		console.log(event.deltaY);
	});
});