// TODO: refactor to move methods outside of constructor

// i'll probably replace freezeframe later because it's not exactly what I want. Would make more sense to have a global toggle that doesnt reset on fresh and start with animation on
// freezeframe library to pause gifs
import Freezeframe from 'freezeframe'

class StaticIconToggle {
	constructor() {
		const freeze = new Freezeframe({
			responsive: false,
			trigger: false
		})

		const navSelector = document.querySelector('[data-toggle-animation]')
		const playIcon = document.querySelector('#toggleAnimationPlay')
		const pauseIcon = document.querySelector('#toggleAnimationPause')

		navSelector.addEventListener('click', function () {
			freeze.toggle()
			playIcon.classList.toggle('hide')
			pauseIcon.classList.toggle('hide')
		})
	}
}

export { StaticIconToggle }
