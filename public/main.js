const button = document.querySelector('button')

const message = evt => {
    alert('Thank you! We have saved your information and we will be in contact soon!')
}

button.addEventListener('click', message)