document.addEventListener('DOMContentLoaded', function() {
	const radio = document.querySelectorAll('.agreement');

	for (let i = 0; i < radio.length; i++) {
		let input = radio[i].querySelector('input');
		
		toggleDisabled(input, input.checked);

		input.addEventListener('change', function() {
			toggleDisabled(input, input.checked);
		});
	}

	function toggleDisabled (item, state) {
		let text = item.getAttribute('data-for');
		let button = document.querySelector('#' + text);
		
		if (button && state) {
			button.classList.remove("disabled");
		} else if (button && state == false) {
			button.classList.add("disabled");
		} else {
			return false;
		}
	}
})