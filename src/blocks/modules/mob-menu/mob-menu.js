(function toggleMenu() {
	let button = document.querySelector('.header__burger');
	let body = document.querySelector('.body');
	let menu = document.querySelector('.mob-menu');
	let opened = false;

	button.addEventListener('click', function() {
		if (opened == false) {
			open();
		} else {
			close();
		}
	});

	function open() {
		body.classList.add('body--opened');
		menu.classList.add('mob-menu--open');
		opened = true;
	}

	function close() {
		body.classList.remove('body--opened');
		menu.classList.remove('mob-menu--open');
		opened = false;
	}

	menu.addEventListener('click', function() {
		close();
	})
})();