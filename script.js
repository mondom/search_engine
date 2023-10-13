const input = document.querySelector('.search')
const animal = document.querySelectorAll('.animal')
const happyInfo = document.querySelector('.happy-info')
const animalBox = document.querySelector('.animal-list')
const header = document.querySelector('h2')

const searching = e => {
	const text = e.target.value.toLowerCase()

	animal.forEach(item => {
		if (item.textContent.toLowerCase().indexOf(text) !== -1) {
			item.style.display = 'flex'
		} else {
			item.style.display = 'none'
			addHappyInfo()
		}
	})
}

input.addEventListener('keyup', searching)

const addHappyInfo = () => {
	if (animalBox.offsetHeight < 200) {
		happyInfo.style.display = 'flex'
		header.style.display = 'none'
	} else if (animalBox.offsetHeight > 649) {
		happyInfo.style.display = 'none'
	}
}
