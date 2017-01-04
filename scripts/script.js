$.when(getSiteInfo()).done(function () {
	
	// Defining Global Functions
	randNum = function (min, max) {
		return Math.floor(Math.random() * (max - min) + min);
	};
	
	isEven = function (num) {
		return (num % 2 === 0) ? true : false;
	};
	
	changePageTitle = function (title) {
		var $pageTitle = $('#page-title');
		document.title = title + ' - ' + siteInfo.siteName;
		$.when($pageTitle.fadeOut(200)).then(function () {
			$pageTitle.html(title);
			$pageTitle.fadeIn(200);
		});
	};
	
	shuffle = function (array) {
		var currentIndex = array.length, temporaryValue, randomIndex;

		// While there remain elements to shuffle...
		while (0 !== currentIndex) {

			// Pick a remaining element...
			randomIndex = Math.floor(Math.random() * currentIndex);
			currentIndex -= 1;

			// And swap it with the current element.
			temporaryValue = array[currentIndex];
			array[currentIndex] = array[randomIndex];
			array[randomIndex] = temporaryValue;
		}
		return array;
	};
	
	// Menu Navigation API
	menu = (function () {
		
		// Cache DOM
		var $el = $('header'),
				$drawer = $('nav'),
				$backdrop = $('.menu-backdrop'),
				$albums = $('.albums'),
				$artists = $('.artists'),
				$tracks = $('.tracks'),
				$about = $('.about');

		var $hamburger = $el.find('#header-hamburger'),
				$albumsLi = $drawer.find('#menu-albums'),
				$artistsLi = $drawer.find('#menu-artists'),
				$tracksLi = $drawer.find('#menu-tracks'),
				$aboutLi = $drawer.find('#menu-about');
		
		// Variables
		var menuCounter = 0;
		
		// Bind Events
		$albumsLi.on('click', albums.bind(this));
		$artistsLi.on('click', artists.bind(this));
		$tracksLi.on('click', tracks.bind(this));
		$aboutLi.on('click', about.bind(this));
		
		$hamburger.add($backdrop)
							.add($albumsLi)
							.add($artistsLi)
							.add($tracksLi)
							.add($aboutLi)
							.on('click', hamburger.bind(this));
		
		// Set Page Title
		changePageTitle('Albums');
		
		// Hamburger Function
		function hamburger() {
			menuCounter++;
			if (isEven(menuCounter) === false) { $backdrop.show(); }
			else if (isEven(menuCounter) === true) { $backdrop.hide(); }
			$hamburger.toggleClass('is-active');
			$drawer.animate({width:'toggle'},300);
		}
		
		// Clear Menu Items
		function clear() {
			$albums.hide();
			$artists.hide();
			$tracks.hide();
			$about.hide();
			$albumsLi.removeClass('menu-active');
			$artistsLi.removeClass('menu-active');
			$tracksLi.removeClass('menu-active');
			$aboutLi.removeClass('menu-active');
		}
		
		// Menu Pages Switch
		function albums() {
			clear();
			$albumsLi.addClass('menu-active');
			$albums.show();
			changePageTitle('Albums');
		}
		function artists() {
			clear();
			$artistsLi.addClass('menu-active');
			$artists.show();
			changePageTitle('Artists');
		}
		function tracks() {
			clear();
			$tracksLi.addClass('menu-active');
			$tracks.show();
			changePageTitle('Tracks');
		}
		function about() {
			clear();
			$aboutLi.addClass('menu-active');
			$about.show();
			changePageTitle('About');
		}
		
		return {
			albums: albums,
			artists: artists,
			tracks: tracks,
			about: about
		}
		
	})();
	
	$(function () {

		// Init plugins
		bodyFadeIn.init();

		menu.albums();
		
		
		
	});
	
});