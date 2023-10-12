const input = document.querySelector('.search')
const animal = document.querySelectorAll('.animal')

const searching = e => {
    const text = e.target.value.toLowerCase()
    console.log(text);

    animal.forEach(item => {
        if(item.textContent.toLowerCase().indexOf(text) !== -1) {
           item.style.display = 'flex'
        } else {
            item.style.display = 'none'
        }
    })
}

input.addEventListener('keyup', searching)
