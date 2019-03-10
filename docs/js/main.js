$(document).ready(function() {

	/* Call plugins hrere ...*/
		// Скрипт для показа и скрытия выпадающего меню на смартфонах
		    // Создаем переменые для кнопки и для меню
		    var navToggleButton = $("#navigation-toggle");
		    var nav = $(".navigation-list");
		    var navLink = $('.navigation-list__link');

		    // Описываем событие при нажатии на кнопку
		    $(navToggleButton).on("click", function(e){
		    	
	        // Отменяем стандартное поведение ссылки в браузере
	        e.preventDefault();

	        // Открываем/Скрываем меню
	        $(nav).slideToggle();

			// применяем фукцию navButtonToggle
			navButtonToggle();

		});

	    // При изменении размера окна, в большую сторону, если меню было скрыто, показываем его.
	    $(window).resize(function(){
	    	var w = $(window).width();
	    	if(w > 992) {
	    	    // nav.removeAttr('style');
	    	    navToggleButton.removeClass("active");
	    	} else {

	    	}
	    });

		// Скрываем меню при клике на него на смартфоне и планцете
		// По клику на ссылку в меню запускаем ф-ю fnstart();
		navLink.on("click", function(){
			fnstart();
			navToggleButton.removeClass("active");
		});

		// В ф-ии fnstart(); проверяем - если меню открыто (проверяем по наличию класса active у кнопки navToggleButton)
		// сворачиваем/скрываем меню 
		function fnstart(){	
			if ( $(navToggleButton).hasClass("active")  ) {
				nav.slideToggle();
			}
		};

		// Создаем фукцию navButtonToggle для анимации иконки
		function navButtonToggle(){
			if ( navToggleButton.hasClass("active")) {
				navToggleButton.removeClass("active");
			} else {
				navToggleButton.addClass("active");
			}
		}

		//slide2id - плавная прокрутка по ссылкам внутри страницы
		$("nav a,a[href='#top'],a[rel='m_PageScroll2id'],a.PageScroll2id").mPageScroll2id({
		    highlightSelector:"nav a"
		});

	});