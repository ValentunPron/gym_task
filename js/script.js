window.addEventListener('DOMContentLoaded', () => {
	const burgerButton = document.querySelector('.burger');
	const burgerMenu = document.querySelector('.burger__menu');

	burgerButton.addEventListener('click', (event) => {
		burgerButton.classList.toggle('active');
		burgerMenu.classList.toggle('active');
		document.body.classList.toggle('over');
	})
});